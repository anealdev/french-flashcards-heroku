<?php
define('__CONFIG__', true);
 require_once '../inc/config.php';

  if($_SERVER['REQUEST_METHOD'] == 'POST') {
    header('Content-Type: application/json'); //return JSON format
    $array = [];
    $email = Cleaner::String($_POST['email']);

    // Make sure user does not exist, returns true or false
    $user_found = User::Find($email);
    $passwordCheck = $_POST['password'];
    $passwordCheckConfirm = $_POST['passwordConfirm'];

    if($user_found) {
      //User exists
      $array['error'] = "An account with that email already exists.";
      $return['is_logged_in'] = false;
    }else if ($passwordCheck != $passwordCheckConfirm){
      $array['error'] = "Password fields must match.";
      $return['is_logged_in'] = false;
    }
    else{
    //User does not exist, add user
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // takes password and turns it into a hash

    $name = Cleaner::String( $_POST['name']);
    $email = Cleaner::String( $_POST['email']);


    $addUser = $dsn->prepare("INSERT INTO users(password, name, email) VALUES(:password, :name, LOWER(:email))");

    $addUser->bindParam(':password', $password, PDO::PARAM_STR);
    $addUser->bindParam(':name', $name, PDO::PARAM_STR);
    $addUser->bindParam(':email', $email, PDO::PARAM_STR);
    $addUser->execute();

    $user_id = $dsn->lastInsertId();

    $_SESSION['user_id'] = (int) $user_id;
    $_SESSION['name'] = (string) $name;
    $array['redirect'] = '/frenchapplogin';

    }

    echo json_encode($array, JSON_PRETTY_PRINT); //Pretty_Print-Use whitespace in returned data to format it
    exit;
  }else{
    exit('Invalid URL'); // end the script
  }
 ?>

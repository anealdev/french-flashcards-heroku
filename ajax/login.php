<?php
define('__CONFIG__', true);
 require_once '../inc/config.php';

 //Sessions are always turned on
 if(!isset($_SESSION)) {
   session_start();
   }

  if($_SERVER['REQUEST_METHOD'] == 'POST') {
    header('Content-Type: application/json'); //return JSON format
    $array = [];
    $email = Cleaner::String($_POST['email']);
    $password = $_POST['password'];

    $user_found = User::Find($email, true);


    if($user_found) {
      //User exists, check password
      $user_id = (int) $user_found['ID'];
      $hash = (string) $user_found['password'];
      $name = (string) $user_found['name'];

      if(password_verify($password, $hash)){
        // User is signed in
        $array['redirect'] = 'index.php';
        $_SESSION['user_id'] = $user_id;
        $_SESSION['name'] = $name;
      } else{
        // Invalid user email/password combo
        $array['error'] = $user_found;
      }

    }else{
      //User does not exist, add user
      $array['error'] = "Account not found. Please create an account.";
    }

    echo json_encode($array, JSON_PRETTY_PRINT); //Pretty_Print-Use whitespace in returned data to format it
    exit;
  }else{
    exit('Invalid URL'); // end the script
  }
 ?>

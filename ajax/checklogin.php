<?php
define('__CONFIG__', true);
 require_once '../inc/config.php';
 require_once '../inc/classes/User.php';

if($_SERVER['REQUEST_METHOD'] == 'GET') {
  $login=[];
  header('Content-Type: application/json');
  $login_status = User::returnUserID();
  if($login_status['status'] == true){
    $login['status'] = true;
    $login['user_id'] = $login_status['user_id'];
    $login['name'] = $login_status['name'];
  }else{
    $login['status'] = false;
  }
  echo json_encode($login, JSON_PRETTY_PRINT);
}
?>

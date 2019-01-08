<?php
define('__CONFIG__', true);
 require_once '../inc/config.php';
require_once '../inc/classes/DB.php';
 //Sessions are always turned on
 //if(!isset($_SESSION)) {
   //session_start();
   //}

if($_SERVER['REQUEST_METHOD'] == 'POST') {
  //$dsn = DB::getConnection();
  $delete = [];
  header('Content-Type: application/json');
  $user_id = $_POST['user_id'];

  $deleteUserCard = $dsn->prepare("DELETE FROM learned WHERE ID = :user_id");
  $deleteUserCard->bindParam(':user_id', $user_id, PDO::PARAM_STR);
  $deleteUserCard->execute();

  $delete['user'] = "true";
  echo json_encode($delete, JSON_PRETTY_PRINT);
}else{
  exit("Invalid URL");
}
?>

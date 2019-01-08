<?php

define('__CONFIG__', true);
 require_once '../inc/config.php';
 require_once '../inc/classes/User.php';
 require_once '../inc/classes/DB.php';

 if(!isset($_SESSION)) {
   //session_start();
   }

   if($_SERVER['REQUEST_METHOD'] == 'GET') {
     $array=[];
     header('Content-Type: application/json');
     $user_id = $_GET['user_id'];
     $word = $_GET['word'];

     $array = User::findUserWord($user_id, $word);

     echo json_encode($array, JSON_PRETTY_PRINT);

   }else{
     exit('Invalid URL'); // end the script
   }
?>

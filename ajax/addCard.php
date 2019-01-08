<?php
define('__CONFIG__', true);
 require_once '../inc/config.php';
 require_once '../inc/classes/User.php';

 if($_SERVER['REQUEST_METHOD'] == 'GET') {

   header('Content-Type: application/json');
     $user_id = $_GET['user_id'];
     $word = $_GET['word'];

     $addWord = $dsn->prepare("INSERT INTO learned(ID, WORD) VALUES(:user_id, :word)");
     $addWord->bindParam(':user_id', $user_id, PDO::PARAM_STR);
     $addWord->bindParam(':word', $word, PDO::PARAM_INT);
     $addWord->execute();

     $check = "card added";

   echo json_encode($check, JSON_PRETTY_PRINT);
   }else{
    exit('Invalid URL'); // end the script
   }




 ?>

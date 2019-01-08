<?php

define('__CONFIG__', true);
 require_once '../inc/config.php';
 require_once '../inc/classes/User.php';
 require_once '../inc/classes/DB.php';


   if($_SERVER['REQUEST_METHOD'] == 'GET') {
     $array=[];
     $results=[];
     header('Content-Type: application/json');
     $user_id = $_GET['user_id'];
     $wordArrayLength = $_GET['wordArrayLength'];
     $flag = true; // put first word not found in DB as currentWord, once found $flag = false
     for($i = 0; $i<$wordArrayLength; $i++){
       $temp = User::findUserWord($user_id, $i);
       if($temp['status'] == true){
         array_push($array, $i);
       }else{
         if($flag == true){
           $flag = false;
           $results['currentWord'] = $i;
         }
       }
     }
     $results['words'] = $array;

     echo json_encode($results, JSON_PRETTY_PRINT);

   }else{
     exit('Invalid URL'); // end the script
   }
?>

<?php

//If there is no constant called __CONFIG__ do not load this file
  if(!defined('__CONFIG__')){
  exit('Config file not found');
  }

include_once "classes/DB.php";
//include_once "classes/Filter.php";
include_once "classes/Cleaner.php";
include_once "classes/User.php";
include_once "functions.php";  //Could not get dashboard.php to find this file through config.php
include_once "classes/User.php";

$dsn = DB::getConnection();

?>

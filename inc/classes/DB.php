<?php


//If there is no constant called __CONFIG__ do not load this file
if(!defined('__CONFIG__')){
  exit('Config file not found');
}

class DB{

  protected static $dsn;

  private function __construct(){
    require_once 'dblogin.php';
//DATABASE CONNECTION

try {
    self::$dsn = new PDO('mysql:charset=utf8mb4;host=localhost;port=3306;dbname=frenchapp', $username, $password);
    self::$dsn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
    self::$dsn->setAttribute( PDO::ATTR_PERSISTENT, false);
    //echo "Connected successfully";
}catch(PDOException $e){
    echo "Could not connect to database."; exit;
  }
}

public static function getConnection(){ // use :: to access static function
  if(!self::$dsn) {
    new DB();
  }
  return self::$dsn;
}
}
?>

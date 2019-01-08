<?php
if(!defined('__CONFIG__')) {
	exit('config file not found');
}

class Cleaner {
  public static function String($string, $html = false){
    if($html == false){
      $string = filter_var($string , FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW); // Remove characters with ASCII value < 32 (non printable control characters)
    }else{
      $string = filter_var($string, FILTER_SANITIZE_FULL_SPECIAL_CHARS); //Equivalent to calling htmlspecialchars() with ENT_QUOTES set
      //converts some predefined characters to HTML entities, ENT_QUOTES - Encodes double and single quotes
    }
    return $string;
    }
  public static function Email( $email ) {
  		return filter_var( $email , FILTER_SANITIZE_EMAIL);
  	}
  }

?>

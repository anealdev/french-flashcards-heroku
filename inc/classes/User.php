<?php
//If there is no constant called __CONFIG__ do not load this file
  if(!defined('__CONFIG__')){
  exit('Config file not found');
  }
  require_once 'DB.php';
  require_once 'Cleaner.php';
class User {
  private $dsn;
  public $user_id;
  public $email;

  public function __construct(int $user_id){
    $this->dsn = DB::getConnection();

    $user_id = Cleaner::Int( $user_id);

    $user = $this->dsn->prepare("SELECT ID, email FROM users WHERE ID = :user_id LIMIT 1");
    $user->bindParam(':user_id', $user_id, PDO::PARAM_INT);
    $user->execute();

    if($user->rowCount() == 1){
      $user = $user->fetch(PDO::FETCH_OBJ);//Fetches the next row from a result set
      $this->email    = (string) $user->email;
      $this->user_id  = (int) $user->ID;
    } else {
      // No user, redirect to Logout
      header("Location: /logout.php"); exit;
    }
}

public static function Find($email, $return_assoc = false){
    // Make sure the user does not exist
    $dsn = DB::getConnection();
    $email = (string) Cleaner::String($email);
    $findUser = $dsn->prepare("Select ID, password, name FROM users WHERE email = LOWER(:email) LIMIT 1");
    $findUser->bindParam(':email', $email, PDO::PARAM_STR);
    $findUser->execute();

    if($return_assoc){ // if an array is required return this
      return $findUser->fetch(PDO::FETCH_ASSOC); //tells PDO to return the result as an associative array
    }
    // if only a true or false is required return this
    $user_found = (boolean) $findUser->rowCount(); // returns the number of rows affected by the last MYSQL call
    return $user_found;
  }

  public static function findUserWord($user_id, $word){
    // Check if the user-word combo does not exist
    $dsn = DB::getConnection();
    $findUserWordCombo = $dsn->prepare("Select LEARNEDID FROM learned WHERE ID = :user_id AND WORD = :word LIMIT 1");
    $findUserWordCombo->bindParam(':user_id', $user_id, PDO::PARAM_INT);
    $findUserWordCombo->bindParam(':word', $word, PDO::PARAM_INT);
    $findUserWordCombo->execute();

    $array = [];
    if($findUserWordCombo->rowCount() == 1){
      //user found in db
      $array['status'] = true;

    }else{
      $array['status'] = false;

    }
    return $array;
  }

  public static function returnUserID(){
      $array = [];
      if(isset($_SESSION['user_id'])) {
        $array['status'] = true;
        $array['user_id'] = $_SESSION['user_id'];
        $array['name'] = $_SESSION['name'];
        return $array;
    }else{
        $array['status'] = false;
        return $array;
    }
}
}
?>

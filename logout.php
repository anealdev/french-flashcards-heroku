<?php
$past = time() -3600;

session_start();  //older version of php need this to destroy session on server
session_destroy();
session_write_close();
setcookie(session_name(),'',0,'/');
session_regenerate_id(true);

header("Location: /frenchapplogin/index.php");
 ?>

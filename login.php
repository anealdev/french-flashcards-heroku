<?php
define('__CONFIG__', true);
require_once('inc/config.php');
require_once('inc/functions.php');
?>

  <?php include('header.php'); ?>

  <div class="nav-wrapper">
  <span id ="home-wrapper">
    <a href="/frenchapplogin" class="btn btn-login">Home</a>
  <span id="register-wrapper">
    <a href="register.php" class="btn btn-login">Create Account</a>
  </span>
  </div>

  <div class='form-container'>
    <form class="login-form" action="" method="post">
      <h2 class="form-header">Login</h2>


        <div class="form-field-container">

          <div class="form-group">
            <input type="email" class="form-control" id="inputEmail" placeholder="Your email" required>
          </div>

          <div class="form-group">
            <input type="password" data-minlength="6" class="form-control" id="inputPassword" placeholder="Password" required>
          </div>
          <div class="alert alert-danger js-error" style="display: none;">
          </div>
        </div>

        <div class="form-group">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
  </div>

  </form>



  <?php include('footer.php'); ?>

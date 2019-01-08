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
    <a href="login.php" class="btn btn-login">Login</a>
  </span>
  </div>

  <div class='form-container'>
    <form class="register-form" action="" method="post">
      <h2 class="form-header">Create an Account</h2>
        <div class="form-field-container">
          <div class="form-group">
            <input type="text" class="form-control" name="name" id="inputName" placeholder="Your name" required>
          </div>

          <div class="form-group">
            <input type="email" class="form-control" id="inputEmail" placeholder="Email" required>
            <div class="help-block with-errors"></div>
          </div>

          <div class="form-group">
            <input type="password" data-minlength="6" class="form-control" id="inputPassword" placeholder="Password" required>
            <div class="help-block">Minimum of 6 characters</div>
          </div>
          <input type="password" data-minlength="6" class="form-control" name="passwordConfirm" id="inputPasswordConfirm" placeholder="Confirm Password" required>
          <div class="alert alert-danger js-error" style="display: none;">
          </div>

        </div>

        <div class="form-group">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
  </div>

  </form>



  <?php include('footer.php'); ?>

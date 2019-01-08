<?php include('header.php'); ?>

<div class="container-fluid">
<div class="nav-wrapper">
<span id="hello">
</span>
<span id="logout-wrapper">
  <a href="logout.php">Logout</a>
</span>
<span id="login-wrapper">
  <a href="login.php" class="btn btn-login">Login</a>
</span>
<span id="register-wrapper">
  <a href="register.php" class="btn btn-login">Create Account</a>
</span>
  </div>
  <div id="intro-container">
    <h1 id="intro-header">Learn 100 Common French Words</h1>
    <p id="intro-text">Read the word in French and try to remember/guess its meaning, then click on the word. If you were correct, check the "Got It" box. If not, move on to the next word, this word will shuffle back into the pile.</p>
</div>

<div id="start-the-cards">
<button type="button" class="btn btn-primary" onclick="startCards()">Start Flashcards</button>
</div>
<div class="btn-group">
<span id="card-prev"></span>
<span id="card-next"></span>
</div>
<div id="completion">
  <h3>You completed all the cards!<h3>
  <h4>Click the 'Start Over' button to do it all again.</h4>
</div>
  <div id="accordion">
    <div class="card" onclick="displayRemoveButton()">
      <div class="card-header" id="headingOne">
        <h5 class="mb-0">

          <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

            <div id="card-top">
            French word
          </div>
          </button>
        </h5>
      </div>

      <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="card-body">
          <div  id="card-bottom">
          English word
        </div>
      </div>
    </div>
  </div>
</div>
  <div id="card-remove">
</div>


</div>
<?php include('footer.php'); ?>

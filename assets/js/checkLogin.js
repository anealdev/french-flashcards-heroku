//check if user is logged in, if so display a logout option
// if not, display a login option

$(document).ready(function() {



  $.ajax({
      type: 'GET',
      url: 'ajax/checklogin.php',
      data: {
        'login': false
      },
      dataType: 'json',
      async: true,
    })
    .done(function ajaxDone(data) {
      if (data.status == true) {
        // include logout button
        document.getElementById("logout-wrapper").style.display = "inline";
        document.getElementById("login-wrapper").style.display = "none";
        document.getElementById("register-wrapper").style.display = "none";
        document.getElementById("hello").innerHTML = "Hello " + data.name;
        buildStartingArray(data.user_id, (function(data1) {
          console.log("startin Array is: " + data1.words);
          console.log("Start cards started: " + data1.currentWord);
          //set the currentCard to the first card not found in the DB for this user
          currentCard = data1.currentWord;
          loggedInIGotIt = data1.words;
          //check if user has already completed all cards
          console.log("loggedInIGotIt = : " + loggedInIGotIt);
          if (loggedInIGotIt.length == wordArray.length) {
            console.log("completed flashcards");
            displayCard();
            return;
          }
          var startTheCards = document.getElementById("start-the-cards");
          accordion.style.display = "flex";
          startTheCards.innerHTML = '<button type="button" class="btn btn-primary" onclick="startOver()">Start Over</button>';
          cardPrev.innerHTML = '<button type="button" class="btn btn-primary btn-nav" onclick="prevCard()">Previous</button>';
          cardNext.innerHTML = '<button type="button" class="btn btn-primary btn-nav" onclick="nextCard()">Next</button>';

          cardTop.innerHTML = wordArray[currentCard][0];
          cardBottom.innerHTML = wordArray[currentCard][1];
          displayCard();

        }))
      } else {
        //include login button
        document.getElementById("logout-wrapper").style.display = "none";
        document.getElementById("login-wrapper").style.display = "inline";
      }
    })
    .fail(function ajaxFailed(e) {
      alert("Fail!");
      console.log(e);
    })
    .always(function ajaxAlwaysDoThis(data) { // called when AJAX finishes whether success or fail
      console.log("Always");
    })
})

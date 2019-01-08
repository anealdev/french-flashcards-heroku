var wordArray = [
  ["le", "the(m)"],
  ["je", "I"],
  ["de", "of"],
  ["est", "is"],
  ["pas", "not"],
  ["vous", "you (plural)"],
  ["la", "the(f)"],
  ["tu", "you"],
  ["que", "that"],
  ["un", "a"],
  ["il", "he, it"],
  ["et", "and"],
  ["à", "in, to, at"],
  ["a", "has"],
  ["ne", "only"],
  ["les", "the (plural)"],
  ["en", "in, to"],
  ["ça", "this, that"],
  ["une", "a (f)"],
  ["J'ai", "I have"],
  ["pour", "for"],
  ["des", "from, of the"],
  ["ce", "this"],
  ["sur", "on, upon, about"],
  ["qui", "who"],
  ["nous", "we, us"],
  ["y", "there"],
  ["mais", "but"],
  ["me", "me, myself"],
  ["plus", "more", ],
  ["non", "not"],
  ["mon", "my"],
  ["suis", "am"],
  ["dans", "in"],
  ["du", "from, of"],
  ["bien", "well"],
  ["elle", "she"],
  ["si", "if"],
  ["tout", "all"],
  ["Je suis", "I am"],
  ["Pouvoir", "can,to be able to"],
  ["par", "by"],
  ["avec", "with"],
  ["va", "will"],
  ["toi", "you"],
  ["Il va", "he goes, he is going"],
  ["oui", "yes"],
  ["il fait", "he does, he makes"],
  ["computer", "ordinateur"],
  ["ils", "they"],
  ["il a", "he has"],
  ["être", "to be"],
  ["faire", "to do, to make"],
  ["comme", "as"],
  ["quoi", "what"],
  ["ici", "here"],
  ["Je sais", "I know"],
  ["Je veux", "I want"],
  ["là", "there"],
  ["au", "to"],
  ["rien", "nothing"],
  ["ici", "here"],
  ["veux", "want"],
  ["ma", "my"],
  ["où", "where"],
  ["pourquoi", "why"],
  ["quand", "when"],
  ["Je vais", "I go, I am going"],
  ["Je peux", "I can"],
  ["dire", "to say"],
  ["alors", "then"],
  ["autre", "other"],
  ["nouveau", "new"],
  ["aller", "to go"],
  ["temps", "time"],
  ["savoir", "to know"],
  ["voir", "to see"],
  ["sans", "without"],
  ["jour", "day"],
  ["an", "year"],
  ["monde", "world"],
  ["après", "after"],
  ["personne", "person"],
  ["venir", "to come"],
  ["peu", "little"],
  ["semaine", "week"],
  ["son", "its"],
  ["ton", "your"],
  ["seconde", "second"],
  ["seconde", "second"],
  ["heure", "hour"],
  ["minute", "minute"],
  ["comment", "how"],
  ["avez", "have"],
  ["bon", "good"],
  ["ou", "or"],
  ["très", "very"],
  ["merci", "thank you"],
  ["même", "same"],
  ["jamais", "never"]
];
var cardTop = document.getElementById("card-top");
var cardBottom = document.getElementById("card-bottom");
var cardPrev = document.getElementById("card-prev");
var cardNext = document.getElementById("card-next");
var cardRemove = document.getElementById("card-remove");
var completion = document.getElementById("completion");
var accordion = document.getElementById("accordion");
var startTheCards = document.getElementById("start-the-cards");
var currentCard = 0;
var iGotIt = [];
var loggedInIGotIt = [];
var statusLoggedIn = false;

function displayCard() {

  if (iGotIt.length == wordArray.length || loggedInIGotIt.length == wordArray.length) {
    console.log("out of cards");
    startTheCards.innerHTML = '<button type="button" class="btn btn-primary" onclick="startOver()">Start Over</button>';
    completion.style.display = "block";
    accordion.style.display = "none";
    cardPrev.innerHTML = "";
    cardNext.innerHTML = "";
    cardRemove.innerHTML = "";
    //return;
  } else {

    console.log("curentCard is: " + currentCard);
    cardTop.innerHTML = wordArray[currentCard][0];
    cardBottom.innerHTML = wordArray[currentCard][1];
    cardRemove.innerHTML = "";
    console.log('currentCard is now: ' + currentCard);
    console.log("wordArray length is: " + wordArray.length);
    document.getElementById("collapseOne").className = "collapse";
  }
}

function deleteUserCards(user_id, callback) {
  console.log("entering deleteUserCards");
  $.ajax({
      type: 'POST',
      url: 'ajax/deleteUserCards.php',
      data: {
        'user_id': user_id
      },
      dataType: 'json',
      async: false,
      success: callback
    })
    .done(function ajaxDone(data) {
      console.log("removed all user learned cards from DB")
    })
    .fail(function ajaxFailed(e) {
      alert("Fail to delete!");
      console.log(e);
    })
    .always(function ajaxAlwaysDoThis(data) { // called when AJAX finishes whether success or fail
      console.log("Always deleteUserCards");
    })
}

function startOver() {
  checkLogin((function(data) {

    if (data.status == true) {
      console.log("user is logged in: " + data.user_id);
      //check if this card and user combo is already in database
      var user_id = data.user_id;
      statusLoggedIn = true;
      deleteUserCards(data.user_id);

    }
    console.log("startover was clicked ");
    iGotIt = [];
    loggedInIGotIt = [];
    currentCard = 0;
    completion.style.display = "none";
    accordion.style.display = "flex";
    startCards();

  }))
}

function buildStartingArray(user_id, callback) {
  console.log("Running buildStartingArray");
  $.ajax({
    type: 'GET',
    url: 'ajax/buildStartingArray.php',
    data: {
      'user_id': user_id,
      'wordArrayLength': wordArray.length
    },
    dataType: 'json',
    async: false,
    success: callback
  });

}

function startCards() {
  console.log("Running startCards");
  checkLogin((function(data) {
    console.log("The current card is" + currentCard);
    if (data.status == true) {
      console.log("user is logged in");

      console.log("Start cards started");
      var startTheCards = document.getElementById("start-the-cards");
      accordion.style.display = "flex";
      startTheCards.innerHTML = '<button type="button" class="btn btn-primary" onclick="startOver()">Start Over</button>';
      cardPrev.innerHTML = '<button type="button" class="btn btn-primary btn-nav" onclick="prevCard()">Previous</button>';
      cardNext.innerHTML = '<button type="button" class="btn btn-primary btn-nav" onclick="nextCard()">Next</button>';

      cardTop.innerHTML = wordArray[currentCard][0];
      cardBottom.innerHTML = wordArray[currentCard][1];
      displayCard();
    } else {
      console.log("reached nextCard");
      if (currentCard >= wordArray.length) {
        currentCard = 0;
      }
      if (iGotIt.length != 0) { //if iGotIt is not empty check iGotIt for current card
        checkIGotItNext(iGotIt);
      }
      console.log("Start cards started");
      var startTheCards = document.getElementById("start-the-cards");
      accordion.style.display = "flex";
      startTheCards.innerHTML = '<button type="button" class="btn btn-primary" onclick="startOver()">Start Over</button>';
      cardPrev.innerHTML = '<button type="button" class="btn btn-primary btn-nav" onclick="prevCard()">Previous</button>';
      cardNext.innerHTML = '<button type="button" class="btn btn-primary btn-nav" onclick="nextCard()">Next</button>';

      cardTop.innerHTML = wordArray[currentCard][0];
      cardBottom.innerHTML = wordArray[currentCard][1];
      displayCard();

    }

  }))

}

function checkIGotItNext(iGotItToUse) {
  console.log("checking for learned card");

  while (iGotItToUse.includes(currentCard)) {
    currentCard++;
    if (currentCard >= wordArray.length) {
      currentCard = 0;
      console.log("current card is more than zero, adjusting... " + currentCard);
    }

  }
  return;

}

function nextCard() {
  var iGotItToUse;
  console.log("entered next card");
  if (loggedInIGotIt.length == wordArray.length) {
    console.log("completed flashcards");
    displayCard();
    return;
  }
  currentCard++;
  if (currentCard >= wordArray.length) {
    currentCard = 0
  }

  checkLogin((function(data) {

      if (data.status == true) {
        console.log("user is logged in: " + data.user_id);
        iGotItToUse = loggedInIGotIt;

      } else {
        iGotItToUse = iGotIt;
      }
      console.log("reached nextCard");
      if (currentCard >= wordArray.length) {
        currentCard = 0;
      }
      if (iGotItToUse.length != 0) { //if iGotIt is not empty check iGotIt for current card
        checkIGotItNext(iGotItToUse);
      }
      displayCard();
    }

  ))
}

function checkiGotItPrev(iGotItToUse) {
  console.log("checking for learned card");

  while (iGotItToUse.includes(currentCard)) {
    console.log("learned card found, decrementing");
    currentCard--;
    console.log("current card after -- is: " + currentCard);
    if (currentCard < 0) {
      currentCard = wordArray.length + currentCard;
      console.log("current card is less than zero, adjusting... " + currentCard);
    }

  }
  return;
}

function prevCard() {
  var iGotItToUse;
  if (loggedInIGotIt.length == wordArray.length) {
    console.log("completed flashcards");
    displayCard();
  }
  currentCard--;
  if (currentCard < 0) {
    currentCard = (wordArray.length - 1);
  }
  checkLogin((function(data) {

    if (data.status == true) {
      console.log("user is logged in");
      //check if this card and user combo is already in database
      iGotItToUse = loggedInIGotIt;

    } else {
      iGotItToUse = iGotIt;
    }
    console.log("currentCard minus 1 is now: " + currentCard);
    if (currentCard < 0) {
      currentCard = wordArray.length + currentCard;
    }
    checkiGotItPrev(iGotItToUse);

    displayCard();

  }))
}

function checkLogin(callback) {

  $.ajax({
    type: 'GET',
    url: 'ajax/checklogin.php',
    //data: {'user_id': user_id, 'word': currentCard},
    dataType: 'json',
    async: false,
    success: callback
  });

}


function checkUserCardCombo(user_id, callback) {
  //check if a row with user_id and word is found
  console.log("running checkUserCardCombo");

  $.ajax({
    type: 'GET',
    url: 'ajax/findWord.php',
    data: {
      'user_id': user_id,
      'word': currentCard
    },
    dataType: 'json',
    async: false,
    success: callback
  });

}

function addCardToDB(user_id, callback) {
  console.log("Adding: " + currentCard + " to DB");
  $.ajax({
    type: 'GET',
    url: 'ajax/addCard.php',
    data: {
      'user_id': user_id,
      'word': currentCard
    },
    dataType: 'json',
    async: false,
    success: callback
  });

}

function removeCard() {
  //check if the user is logged in
  //var data = checkLogin();
  checkLogin((function(data) {

    if (data.status == true) {
      console.log("user is logged in");
      //check if this card and user combo is already in database
      var user_id = data.user_id;

      checkUserCardCombo(user_id, (function(data2) {

        if (data2.status == true) {
          console.log("card already in database, moving on: ");
          nextCard();
        } else {
          addCardToDB(user_id, function(data) {
            loggedInIGotIt.push(currentCard);
            nextCard();
          });


        }
      }))
    } else {
      console.log("user is NOT logged in");
      //if user is not logged in, continue with original function
      console.log("is the current card already in the array?: " + iGotIt.indexOf(currentCard));
      if (iGotIt.indexOf(currentCard) === -1) {
        iGotIt.push(currentCard);
        console.log(iGotIt)
        console.log("card added to iGotIt");
      } else if (iGotIt.indexOf(currentCard) != -1) {
        console.log("Card already in array");
        nextCard();
      }

      if (iGotIt.length == wordArray.length) {
        console.log("Out of cards!");
        displayCard();
      } else {
        nextCard();
      }
    }

  }))
}



function displayRemoveButton() {
  if (iGotIt.length == wordArray.length) {
    return;
  }
  cardRemove.innerHTML = '<button type="button" class="btn btn-primary" onclick="removeCard()">I know this one!</button>';
}

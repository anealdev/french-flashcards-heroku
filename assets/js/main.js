// bind all listeners to the doc object model
$(document)
  .on("submit", ("form"), function(event) {
  event.preventDefault(); // if the method is called, the default action of the event will not be triggered, form will not submit to same url
  var formKind;
  var _form = $(this);
  console.log(_form[0].action);
  var _error = $(".js-error", _form);
  if(_form[0].action == 'http://localhost/frenchapplogin/register.php'){
    console.log("this is the register form");
    formKind = "register";
    var form_content = {
      name: $("input[name='name']", _form).val(),
      email: $("input[type='email']", _form).val(),
      password: $("input[type='password']", _form).val(),
      passwordConfirm: $("input[name='passwordConfirm']", _form).val()
    };
  }
  else if(_form[0].action == 'http://localhost/frenchapplogin/login.php'){
    console.log("this is the login form");
    formKind = "login";
    var form_content = {
      email: $("input[type='email']", _form).val(),
      password: $("input[type='password']", _form).val()
    };
  }
  else{
    console.log("this form is unknown");
  }

console.log(form_content);
  if(form_content.password.length < 6) {
    _error.text("Please enter a password of at least 6 characters").show();
    return false;
  }else if(form_content.email.length < 6){
    _error.text("Valid email address required.");
    return false;
  }

  // Hide the error messages if if statments aren't triggered
  _error.hide();
  var url;
  if(formKind == "register"){
    url = 'ajax/register.php';
  }if(formKind == "login"){
    url = 'ajax/login.php';
  }
  $.ajax({
    type: 'POST',
    url: url,
    data: form_content,
    dataType: 'json',
    async: true,
  })
  .done(function ajaxDone(data){ //on success call this function
    console.log("The redirect is: " + data.redirect);
    if(data.redirect !== undefined){
      window.location = data.redirect;
    }else if(data.error !== undefined){
      _error.text(data.error).show();
      console.log("the error is" + data.error);
    }

  })
  .fail(function ajaxFailed(e){
    alert("Fail!");
    console.log(e);
  })
  .always(function ajaxAlwaysDoThis(data){ // called when AJAX finishes whether success or fail
    console.log("Always");
  })

  return false; // stays on the same page when false is returned */
});

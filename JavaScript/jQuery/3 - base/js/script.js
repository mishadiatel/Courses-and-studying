$(function() {
  // The Focus & Blur Events
  // const inputFields = $("input:text, input:password, textarea");
  // inputFields.focus(function(){
  //   $(this).css("box-shadow", "0 0 4px #666");
  // });

  // inputFields.blur(function(){
  //   $(this).css("box-shadow", "none");
  // })
  // $("#name").blur(function(){
  //   let text = $(this).val();
  //   if(text.length < 3){
  //     $(this).css("box-shadow", "0 0 4px #811");
  //   }else{
  //     $(this).css("box-shadow", "0 0 4px #181")
  //   }
  // })


  // Using the Change Event
  // $("#checkbox").change(function(){
  //   const isCecked = $(this).is(":checked");
  //   if(isCecked){
  //     $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181");
  //   }else{
  //     $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811");
  //   }
  // });

  // $("#selection").change(function(){
  //   const seletedOption = $(this).find(":selected").text();
  //   alert(seletedOption);
  // })


  // Handling submit event
  // $("#form").submit(function(event){
  //   const textarea = $("#message");
  //   if(textarea.val().trim() == ""){
  //     textarea.css("box-shadow", "0 0 4px #811");
  //     event.preventDefault();
  //   }else{
  //     // form will be submited
  //   }
  // })


  // Complete Form Validation on Submit
  const form = $("form");
  enableFastFeedback(form);

  $("form").submit(function(event){
    const name = $("#name").val();
    const password = $("#password").val();
    const message = $("#message").val();
    const checked = $("#checkbox").is(":checked");

    validateNameField(name, event);
    validatePasswordField(password, event);
    validateMessageField(message, event);
    validateCheckboxField(checked, event);
  });

  function enableFastFeedback(formElement){
    var nameInput = formElement.find("#name");
    var passwordInput = formElement.find("#password");
    var messageInput = formElement.find("#message");
    var checkboxInput = formElement.find("#checkbox");

    nameInput.blur(function() {
      var name = $(this).val();
      highlight($(this), isValidName(name));
    });

    passwordInput.blur(function() {
      var password = $(this).val();
      highlight($(this), isValidPassword(password));
    });

    messageInput.blur(function() {
      var message = $(this).val();
      highlight($(this), isValidMessage(message));
    });

    checkboxInput.change(function() {
      var isChecked = $(this).is(":checked");
      highlight($(this), isChecked);
    });
  }

  function highlight(element, isValid) {
    var color = "#811";  // red
    if (isValid) {
      color = "#181";  // green
    }

    element.css("box-shadow", "0 0 4px " + color);
  }
  
  function isValidPassword(password) {
    return password.length >= 6 && /.*[0-9].*/.test(password);
  }

  function isValidMessage(message) {
    return message.trim() !== "";
  }

  function validateNameField(name, event) {
    if (!isValidName(name)) {
      $("#name-feedback").text("Please enter at least two characters");
      event.preventDefault();
    } else {
      $("#name-feedback").text("");
    }
  }
  function isValidName(name) {
    return name.trim().length >= 2;
  }
  function validatePasswordField(password, event) {
    if (!isValidPassword(password)) {
      $("#password-feedback").text("The password should have at least 6 characters and contain a number");
      event.preventDefault();
    } else {
      $("#password-feedback").text("");
    }
  }

  function validateMessageField(message, event) {
    if (!isValidMessage(message)) {
      $("#message-feedback").text("Please enter a message.");
      event.preventDefault();
    } else {
      $("#message-feedback").text("");
    }
  }

  function validateCheckboxField(isChecked, event) {
    if (!isChecked) {
      $("#checkbox-feedback").text("Please agree to this.");
      event.preventDefault();
    } else {
      $("#checkbox-feedback").text("");
    }
  }
  


});
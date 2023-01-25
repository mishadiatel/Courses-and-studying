$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $(".blue-box").fadeIn(2000);
  // $(".blue-box").fadeOut(2000);
  // $(".blue-box").show();
  // $(".blue-box").hide(2000);

  // $(".blue-box").slideToggle(2000);
  // $("p").hide();
  // $("p").slideDown();

  // Custom animation
  // $(".blue-box").animate({
  //   "margin-left": "+=200px",
  // }, 1000, "linear");
  
  // $(".blue-box").animate({
  //   marginLeft: "200px",
  //   opacity: "0",
  //   height: "50px",
  //   width: "50px",
  //   marginTop: "25px",
  // }, 1000);

  // $('p').animate({
  //   fontSize: "25px",
  // }, 1000)

  // $(".red-box").fadeTo(1000, 0.2);
  // $(".green-box").delay(1000).fadeTo(1000, 0.5);
  // $(".blue-box").delay(2000).fadeTo(1000, 0.8).fadeOut().delay(500).fadeIn();

  // callback functions
  // $(".red-box").fadeTo(1000, 0, function(){
  //   $(".green-box").fadeTo(1000, 0, function(){
  //     $(".blue-box").fadeTo(1000, 0);
  //   });
  // });


  // $(".lightbox").delay(500).fadeIn(1000)

  // $('p').css("background-color", "rgba(180, 180, 30, 0.8)");
  // $('.red-box').css("background-color", "rgba(180, 180, 30, 0.8)");
  // $('#list').css("background-color", "rgba(180, 180, 30, 0.8)");

  // $('input[type="text"]').css("background-color", "rgba(180, 180, 30, 0.8)");
  // $('h2, p, input').css("background-color", "rgba(180, 180, 30, 0.8)");
  // $('p:first').css("background-color", "rgba(180, 180, 30, 0.8)");
  // $('li:last').css("background-color", "rgba(180, 180, 30, 0.8)");
  // $('li:even').css("background-color", "rgba(180, 180, 30, 0.8)");
  // $('li:odd').css("background-color", "rgba(180, 180, 30, 0.8)");

  // $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").parents("body").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").siblings("p").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").next().css("background-color", "rgba(180, 180, 30, 0.8)");

  // $("#list").children("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");

  // $("#list").filter(function(index){
  //   return index % 3 === 2;
  // }).css("background-color", "rgba(180, 180, 30, 0.8)");

  // $("li").eq(4).css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").eq(-2).css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").not(":first").css("background-color", "rgba(180, 180, 30, 0.8)");

  // Adding new elements DOM
  // $("ul ul:first").append("<li>I'm gonna be last subitem</li>");
  // $("<li>I'm gonna be last subitem</li>").appendTo($("ul ul:first"));
  // $("ul ul").prepend("<li>I'm gonna be first subitem</li>")
  // $(".red-box").after("<div class=\"red-box\">other red</div>");
  
  // Replacing elements
  // $(".blue-box").before( $(".red-box"));
  // $("p").after($("#list"));
  // $("li").replaceWith("<li>Replaced</li>");
  // $("li").replaceWith(function(){
  //   return "<li>Replaced with functions</li>";
  // });
  // const firstListItem = $("li:first");
  // $("p:first").replaceWith(firstListItem);


  // Remove elements
  // $("li").remove();
  // $("form").children().not("input:text, textarea, br").remove();

  // const detachedListItem = $("li").detach();
  // $("#content").append(detachedListItem);
  // $("p:first").empty();
  // $(".red-box, .green-box, .blue-box").empty();

  // // one argument: the name of the attribute you want to read.
  // var link = $("#link");
  // // Retrieve the value of the href attribute of the <a> tag
  // // This is logged into the console. To see it, press F12 in Firefox/Chrome
  // // to open the Developer Tools and click on the Console tab.
  // console.log(link.attr("href"));
  // // Log the value of the title attribute
  // console.log(link.attr("title"));

  // // To set the value of an attribute, you call the attr() function with two
  // // arguments: first, the name of the attribute you want to change, and second
  // // the new value:
  // link.attr("href", "http://petersommerhoff.com");

  // // 2) Properties with prop()

  // // To read the *current* value of a checkbox for instance, you must use the
  // // prop() function:
  // var radioButton = $("input[type=radio]:first");
  // console.log(radioButton.prop("checked"));  // false
  // console.log(radioButton.attr("checked"));  // undefined

  // // 3) Values with val()
  // // -> Read or set the value attribute of input elements

  // // To retrieve the value of an input element, simply call val()
  // var email = $("input[type=email]").val();
  // console.log(email);  // i@mine.me
  // var number = $("input[type=range]").val();
  // console.log(number);  // 3

  // // To set a new value, pass the new value as an argument to val():
  // $("input[type=text]").val("Peter Sommerhoff");
  // $("input[type=range]").val(9);

  // // If you have multiple elements selected, using val() will implicitly
  // // always call first() beforehand, so only change the first input element:
  // var value = $("input").val();
  // console.log(value);  // Peter Sommerhoff

  // Select the <img> inside the gallery to manipulate it later
  var galleryImage = $(".gallery").find("img").first();

  // Initialize an array of all images for the gallery
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
  ];

  // Now, we want to cycle through all images we have and show one after the
  // other in our gallery. For this, we create a variable i: the index of the
  // image we want to currently show.
  var i = 0;

  // setInterval will call whatever code is inside the callback function every
  // 2 seconds. This way, we can change the shown image every 2 seconds.
  setInterval(function() {
    // First, we update the index i to the next image.
    // However, we cannot simply do i = i+1 because that would quickly result in
    // indexes i = 3, 4, 5 etc which are invalid for our array.
    // So we constrain the sequence to the range 0..2 by using modulo 3 (i % 3).
    i = (i + 1) % images.length;  // i = 1, 2, 0, 1, 2, 0, ...

    // Now, we just have to change the src attribute of the <img> to the next
    // image we want to show.
    // To achieve a smooth transition, we'll actually first fadeOut the old,
    // then update the src attribute behind the scenes, and then fade it back in.
    galleryImage.fadeOut(function() {
      // Inside the callback, "this" refers to the galleryImage
      $(this).attr("src", images[i]);
      $(this).fadeIn();
    });

    // Log current image path for debugging
    console.log(galleryImage.attr("src"));

  }, 2000);
});
$(function() {

  // // Changing css properties

  // $(".gallery").css("display", "none"); //hide()
  // const redBox = $(".red-box");
  // console.log(redBox.css('width'));
  // console.log(redBox.width());
  // redBox.css("background-color", "#AA7700");
  // $("p").css("font-size", "18px");
  // redBox.css("width", "+=20px");
  // const properties = $("p").css(["font-size", "line-height", "color"]);
  // console.log(properties);
  // console.log(properties["font-size"]);
  // redBox.css("user-select", "none");


  // Adding and removing classes

  // $("a").addClass("fancy-link");
  // $("p:first").addClass("large emphasize");
  // $("li li").addClass(function(index){
  //   $(this).addClass("item-" + index);
  // })
  // $("div").addClass(function(index, currentClass){
  //   if(currentClass === "dummy"){
  //     return "red-box";
  //   }
  // });
  // $(".red-box").removeClass("red-box").addClass("blue-box");


  // Changing data of element
  // const gallery = $(".gallery");
  // var images = [
  //   "images/laptop-mobile_small.jpg",
  //   "images/laptop-on-table_small.jpg",
  //   "images/people-office-group-team_small.jpg"
  // ];
  // gallery.data("availableImages", images);
  // console.log(gallery.data("availableImages"));
  // const firstPar = $("p:first");
  // console.log(firstPar.data("mydata"));


  //  Retrieving and Changing the Content of an Element
  // const pFirst = $("p:first");
  // console.log(pFirst.text());
  // console.log(pFirst.html());
  // console.log($("p").html());

  // // pFirst.text("<strong>Hello</strong> world");
  // // pFirst.html("<strong>Hello</strong> world");
  // pFirst.html(pFirst.html() + " it eas just appended");


  // Event handlers
  // click
  // $("#btn-click").click(function(event){
  //   console.log(event);
  //   alert("Button was clicked");
  // });
  // $(".red-box").click(function(){
  //   $(this).fadeTo(500, 0.5);
  // })

  // hover
  // $("#btn-hover").hover(function(){
  //   alert("Button was hovered");
  // });
  // $(".green-box").hover(function(){
  //     $(this).text("I was hovered");
  // });

  // const blueBox = $(".blue-box");
  // // blueBox.mouseenter(function(){
  // //   $(this).stop().fadeTo(500, 0.7);
  // // });
  // // blueBox.mouseleave(function(){
  // //   $(this).stop().fadeTo(500, 1);
  // // });
  // // hover(handlerIn, handlerOut)
  // blueBox.hover(function(){
  //   $(this).stop().fadeTo(500, 0.7);
  // }, function(){
  //   $(this).stop().fadeTo(500, 1);
  // });


  // Adding the Same Handler for Multiple Events
  // $("html").on("click keydown", function(){
  //   console.log("Mouse was clicked or key was pressed");
  // })

  // var images = [
  //   "images/laptop-mobile_small.jpg",
  //   "images/laptop-on-table_small.jpg",
  //   "images/people-office-group-team_small.jpg"
  // ];
  // let i = 0;
  // $(".gallery").find("img").on("click", switchToNextImage);
  // function switchToNextImage() {
  //   i = (i + 1) % images.length;
  //   $(this).fadeOut(function() {
  //     $(this).attr("src", images[i]).fadeIn();
  //   });
  // }

  // $("p").click(function(){
  //   $(this).slideUp();
  // });
  // $("#content").append("<p>This is a dynamicly added paragraph</p>");

  // Delegated events
  // $("#content").on("click", "p", function(){
  //   $(this).slideUp();
  // });
  // $("#content").append("<p>This is a dynamicly added paragraph</p>");

  // $("body").on("mouseenter", "li", function(){
  //   // console.log("event");
  //   $(this).css("color", "#E254f7");
  // });

  // $("#btn-click").click({
  //   user: "Peter",
  //   domain: "peterdskhkfsghsfdkhsd.com"
  // }, function(event){
  //   greetUser(event.data);
  // })

  // function greetUser(userdata){
  //   const username = userdata.user || "Anonumus";
  //   const doman = userdata.domain || "sfgk,dsgfckjgasbv"
  //   alert(`Welcome back ${username} from ${doman}`);

  // }

  // let galleryItems = $(".gallery").find("img");
  // galleryItems.css("width", "33%").css("opacity", "0.7");

  // galleryItems.mouseenter(function(){
  //   $(this).stop().fadeTo(500, 1);
  // });
  // galleryItems.mouseleave(function(){
  //   $(this).stop().fadeTo(500, 0.7);
  // });

  // galleryItems.click(function(){
  //   const sourse = $(this).attr("src");
  //   const image = $("<img>").attr("src", sourse).css("width", "100%");
  //   $(".lightbox").empty().append(image).fadeIn(2000);
  // });

  // $(".lightbox").click(function(){
  //   $(this).stop().fadeOut();
  // })

  $("html").keydown(function(event){
    console.log(event.which);
  })

  let arrow_right = 39;
  $("html").keydown(function(event){
    if(event.which === arrow_right){
      $(".blue-box").stop().animate({
        marginLeft: "+=10px"
      }, 50)
    }
  })


});
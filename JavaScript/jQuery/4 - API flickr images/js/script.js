$(function() {
  // Fetching a Server File with jQuery
  // $.load()
  // $("#code").load("js/script.js");
  // $("#code").load("js/script.js", function(response, status){
  //   if(status == "error"){
  //     alert("Could not find file");
  //   }
  //   console.log(response);
  // })


  // Retrieving Flickr Images Through the Flickr API (+Understanding JSON)
  var flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

  // Next, we use jQuery's getJSON() function to access to API and retrieve data.
  $.getJSON(flickrApiUrl, {
    tags: "sun, beach",
    tagmode: "any",
    format: "json"
  }).done(function(data) {
    // Inside done(), you can work with the retrieved data.
    console.log(data);

    // Let's use jQuery $.each() function to create an <img> tag for each image .
    $.each(data.items, function(index, item) {
      console.log(item);  // Helpful to see what data you can access

      // Create new image and add to gallery.
      $("<img>").attr("src", item.media.m).appendTo("#flickr");

      // Stop after 5 images.
      if (index == 4) {
        return false;
      }
    });
  }).fail(function(response) {
    // Inside fail(), you can handle error cases.
    console.log(response);
    alert("AJAX call failed.")
  });










});
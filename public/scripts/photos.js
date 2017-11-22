$(document).ready(function(){
  var dir = "/images/queerphotos/"; // folder location
  var fileextension = ".jpg"; // image format
  var i = 1;
  console.log(dir);
  $(function imageloop(){
    imageUrl = dir + i + fileextension;
    $(".photo-container").css('background-image', 'url(' + imageUrl +')');

    if (i==20){
      i = 1;
      setTimeout(imageloop, 10000);
    }
    else {
      i++;
      setTimeout(imageloop, 10000);
    };
  });
});

$(document).ready(function(){
  var dir = "/images/queerphotos/"; // folder location
  var fileextension = ".jpg"; // image format
  // var fileextension = [".png", ".jpg",];
  var i = "1";
  console.log(dir);
  $(function imageloop(){
    $(".photo-container").empty();
    $("<img />").attr('src', dir + i + fileextension ).appendTo(".photo-container");
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

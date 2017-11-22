$(document).ready(function() {
   var dir = "/images/queerphotos/"; // folder location
   var fileextension = ".jpg"; // image format
   var i = 1;
   console.log(dir);
   $(function imageLoop() {
      imageUrl = dir + i + fileextension;
      $('.photo-container').css('background-image', 'url(' + imageUrl + ')');
      if (i == 20) {
         i = 1;
         setTimeout(imageLoop, 10000);
      } else {
         i++;
         setTimeout(imageLoop, 10000);
      };
      $('button').click(function() {
         imageUrl = dir + i + fileextension;
         $('.photo-container').css('background-image', 'url(' + imageUrl + ')');
         console.log(i, "imageUrl", imageUrl)
         i++;
         if (i >= 13) {
           i = 1;
         }
      });
   });
});

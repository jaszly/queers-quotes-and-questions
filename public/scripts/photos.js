$(document).ready(function(){
var dir = "/images/queerphotos/"; // folder location
var fileextension = ".jpg"; // image format
// var fileextension = [".png", ".jpg",];
var i = "1";
console.log(dir);
$(function imageloop(){
 $("<img />").attr('src', dir + i + fileextension ).appendTo(".photo-container");
 if (i==27){
 alert('loaded');
 }
 else{
 i++;
 imageloop();
 };
       });
});

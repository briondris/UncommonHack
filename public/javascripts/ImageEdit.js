$(document).on("click","#b",function(){
  //alert("it hit!");
  $("#c").get(0).toBlob(function(blob){
         saveAs(blob, "image.png");
    });
});

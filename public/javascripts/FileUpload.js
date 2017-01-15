var readFile = function(e) {
  var input = e.target;

  var reader = new FileReader();
  
  reader.onload = function(){
      alert("it hit!");
    var img = document.createElement('img');
    img.src = reader.result;
    
    var image = new fabric.Image(img);
    canvas.add(image);
  };
  
  reader.readAsDataURL(input.files[0]);
};

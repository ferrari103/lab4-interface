function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}
function myFunction1(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("demo1").innerHTML = coor;
}
  
function clearCoor() {
    document.getElementById("demo1").innerHTML = "";
}

function myFunction3() {
    var x = document.getElementById("myInput").value;
    document.getElementById("demo2").innerHTML = "You wrote: " + x;
}
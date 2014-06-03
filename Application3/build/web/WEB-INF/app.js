/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var canvas = document.getElementById("my-canvas"),
    context = canvas.getContext("2d");
 
context.fillStyle = "#f00";
context.fillRect(0, 0, 100, 100);
context.strokeStyle = "#00f";
context.strokeRect(25, 25, 50, 50);
 
var canvas2 = document.getElementById("my-canvas-2"),
   context2 = canvas2.getContext("2d");
     
context2.fillStyle = "#0f0";    

context2.beginPath();  
context2.moveTo(100, 0);  
context2.lineTo(0, 100);  
context2.lineTo(200, 100);  
context2.fill();
 
var canvas3 = document.getElementById("my-canvas-3"),
    context3 = canvas3.getContext("2d");
                        
context3.beginPath();
context3.moveTo(110,75);
context3.arc(75,75,35,0,Math.PI*1.2,false);
context3.stroke();
 
context3.moveTo(47,54);
context3.lineTo(95,15);
 
context3.moveTo(109,75);
context3.lineTo(195,45);
 
context3.lineTo(95,15);
context3.stroke();
 
var canvas4 = document.getElementById("my-canvas-4"),
   context4 = canvas4.getContext("2d");
 
context4.fillStyle = "#f00";
context4.bezierCurveTo(100, 100, 10, 10, 250, 10);
context4.fill();

var canvas5 = document.getElementById("my-canvas-5"),
    context5 = canvas5.getContext("2d"),
    img = document.createElement("img");
    
img.addEventListener("load", function () {
    context5.drawImage(img, 0, 0, 600, 200);
   // Get canvas content as a base64 image
   var base64Img = canvas5.toDataURL("image/png");
}, false);
 
img.setAttribute("src", "view.jpg");


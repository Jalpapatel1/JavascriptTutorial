const button1 = document.getElementById("show");
const button2=document.getElementById("hide");
const image=document.getElementById("img");
const button3=document.getElementById("blue");
const button4=document.getElementById("red");

// Style 1
button1.onclick = function() {
console.log("ha ha i click show button");
image.style.display="";
button3.style.display="";
button4.style.display="";
}

// Style 2
// button1.addEventListener('click', button1ClickHandler);

// Style 3
// function button1ClickHandler() {
//     console.log("ha ha i click show button");
//     image.style.display="";
//     button3.style.display="";
//     button4.style.display="";
//     }

button2.onclick = function () {
    console.log("ha ha i click hide button");
    image.style.display="none";
    button3.style.display="none";
    button4.style.display="none";

}

button3.onclick=function(){
    image.style.border="solid blue";
}

button4.onclick=function(){
    image.style.border="solid red";
}




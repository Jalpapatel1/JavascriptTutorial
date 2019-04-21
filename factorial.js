// function factorial(n){
    
// var x=1;
//     for(i=1;i<=n;i++){
//          x=x*i;
//     }
//     console.log("Factorial of " +n+ " is :",x)
// }

// factorial(5);
// factorial(7);

function factorial(){
    var n=document.getElementById("number").value;
    var x=1;
        for(i=1;i<=n;i++){
             x=x*i;
        }
        console.log("Factorial of " +n+ " is :",x)
        
        // now show factorial in the UI
        const answerNode = document.createTextNode(x);
        const answerElement = document.getElementById('answer');
        if(answerElement.firstChild) {
            answerElement.removeChild(answerElement.firstChild);
        }
        answerElement.appendChild(answerNode);
        // var node=document.createElement("");
    }
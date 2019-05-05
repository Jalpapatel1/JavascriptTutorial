function getOptions(){
    var x=document.getElementById("mySelect");
    var txt1="No. of Items :";
    var i;
    i=document.getElementById("mySelect").length;
    txt1=txt1+i;
    // i=0;
    // if(i<x.length){
    //     alert(txt1=txt1+"\n"+x.options[i].text);
    //     i++;
    // }
    

    for(i=0;i<x.length;i++){
        alert(txt1=txt1+"\n"+x.options[i].text);
    }
    
}
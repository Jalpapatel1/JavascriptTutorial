function getAttributes(){
    
    const href=document.getElementById("w3r").href;
   alert("Value of the href attribute of the link  is : "+href);
   
   const hreflang=document.getElementById("w3r").hreflang;
   alert("Value of the hreflang attribute of the link is : " +hreflang);
   
   const rel=document.getElementById("w3r").rel;
   alert("Value of the rel attribute of the link is : " +rel);

   const target=document.getElementById("w3r").target;
   alert("Value of the target attributes of the link is : "+target);

   const type=document.getElementById("w3r").type;
   alert("Value of the type attributes of the link is : "+type);
}
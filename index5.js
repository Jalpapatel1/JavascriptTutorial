function insert_Row(){
   const table=document.getElementById("myTable").insertRow(0); 
    const x=table.insertCell(0);
    const y=table.insertCell(1);
    x.innerHTML="New Cell1";
    y.innerHTML="New Cell2";

}

function ticketNumberChange(isIncrease,id){
    const ticketInput=document.getElementById(id);
    const ticketCount=parseInt(ticketInput.value);
    let ticketNewCount;
    if(isIncrease==true){
        ticketNewCount=ticketCount+1;
    }
    else if(isIncrease==false && ticketCount==0){
        ticketNewCount=ticketCount;
    }
    else{
        ticketNewCount=ticketCount-1;
    }  
    ticketInput.value=ticketNewCount;

    grandTotal();
   
}

function subTotalCalculation(){
    const firstClassCount=parseInt(document.getElementById('first-class').value);
    const economyClassCount=parseInt(document.getElementById('economy').value);

    const subTotalInput=document.getElementById('subtotal');
    const subTotal=firstClassCount*150+economyClassCount*100;
    subTotalInput.innerText=subTotal;
    return subTotal;
}

function grandTotal(){
   const subTotalCalc= subTotalCalculation(); 
   const tax=subTotalCalc*10/100;

   document.getElementById('tax').innerText=tax;
   const grandTotal=tax+subTotalCalc;

   document.getElementById('grand-total').innerText=grandTotal;
}
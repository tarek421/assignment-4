function ticketCountHandaler(ticket , isIncrease){
    const ticketInput = document.getElementById(ticket + '-class-count');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if(isIncrease == true){
        ticketNewCount = ticketCount + 1;
    }
    if(isIncrease == false && ticketCount > 0){
        ticketNewCount = ticketCount - 1;
    }
    let totalTicket = ticketNewCount;
    if(ticket == 'first'){
        totalTicket = ticketNewCount * 150;
    }
    if( ticket == 'economy'){
        totalTicket = ticketNewCount * 100;
    }
    ticketInput.value = ticketNewCount;
    //document.getElementById(ticket + '-class-total').innerText = firstClassTotal;
    calculateTotal();
}

    function calculateTotal(){
        const firstClassCount = getInputValue('first');
        const economyClassCount = getInputValue('economy');
        
        const totalCalculate = firstClassCount * 150 + economyClassCount * 100;
        document.getElementById('sub-total').innerText = totalCalculate;
        const tax = Math.round((totalCalculate / 100) * 10);
        document.getElementById('tax').innerText = tax;
        const grandTotal = totalCalculate + tax;
        document.getElementById('grand-total').innerText = grandTotal;
    }

    function getInputValue(ticket){
        const ticketInput = document.getElementById(ticket + '-class-count');
        const ticketCount = parseInt(ticketInput.value);
        return ticketCount;
    }
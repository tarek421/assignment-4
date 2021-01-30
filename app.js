function ticketCountHandaler(ticket , isIncrease){
    const firstClassInput = document.getElementById(ticket + '-class-count');
    const firstClassCount = parseInt(firstClassInput.value);
    let firstClassNewCount = firstClassCount;
    if(isIncrease == true){
        firstClassNewCount = firstClassCount + 1;
    }
    if(isIncrease == false && firstClassCount > 1){
        firstClassNewCount = firstClassCount - 1;
    }
    let firstClassTotal = firstClassNewCount;
    if(ticket == 'first'){
        firstClassTotal = firstClassNewCount * 150;
    }
    if( ticket == 'economy'){
        firstClassTotal = firstClassNewCount * 100;
    }
    firstClassInput.value = firstClassNewCount;
    document.getElementById(ticket + '-class-total').innerText = firstClassTotal;
}






// document.getElementById('first-class-increase').addEventListener('click', function(){
//     const firstClassInput = document.getElementById('first-class-count');
//     const firstClassCount = parseInt(firstClassInput.value);
//     const firstClassNewCount = firstClassCount + 1;
//     firstClassInput.value = firstClassNewCount;
//     const firstClassTotal = firstClassNewCount * 150;
//     document.getElementById('first-class-total').innerText = firstClassTotal;
// });

// document.getElementById('first-class-decrease').addEventListener('click', function(){
//     const firstClassInput = document.getElementById('first-class-count');
//     const firstClassCount = parseInt(firstClassInput.value);
//     const firstClassNewCount = firstClassCount - 1;
//     firstClassInput.value = firstClassNewCount;
//     const firstClassTotal = firstClassNewCount * 150;
//     document.getElementById('first-class-total').innerText = firstClassTotal;
    
// });
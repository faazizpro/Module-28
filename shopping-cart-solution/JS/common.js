function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const phoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(phoneTotalString);
    return currentPhoneTotal;
}

function setTextElementById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}


function calculateSubtotal(){
    //Calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;

    setTextElementById('sub-total', currentSubTotal);

    

    //Calculate Tax
    const taxAmount = calculateSubtotal * 0.1;
    setTextElementById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;

    setTextElementById('final-total', finalAmount);
}
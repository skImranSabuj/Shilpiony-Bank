//Deposit

function getInputValue(inputId) {
    // debugger;
    const inputField = document.getElementById(inputId);;
    const inputAmount = parseFloat(inputField.value);
    inputField.value = "";
    return inputAmount;
}
function getTotalValue(depositAmount, totalId) {

    const currentdepositTotal = document.getElementById(totalId);
    var currentdepositTotalAmount = parseFloat(currentdepositTotal.innerText);
    const updatedDepositTotal = currentdepositTotalAmount + depositAmount;
    currentdepositTotal.innerText = updatedDepositTotal;
}
function updateBalance(updateAmount, isAdd) {
    const currentdBalanceTotal = document.getElementById('balance-total');
    var currentBalanceTotalAmount = parseFloat(currentdBalanceTotal.innerText);
    if (isAdd) {
        currentdBalanceTotal.innerText = currentBalanceTotalAmount + updateAmount;
    }
    else {
        currentdBalanceTotal.innerText = currentBalanceTotalAmount - updateAmount;
    };
};
document.getElementById('deposit-button').addEventListener('click', function () {
    //getting the new amount 
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        getTotalValue(depositAmount, 'deposit-total');
        updateBalance(depositAmount, true);
    }

});
//Withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    //getting the new amount 
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = parseFloat(document.getElementById('balance-total').innerText);
    if (withdrawAmount > 0 && withdrawAmount<=currentBalance) {
        getTotalValue(withdrawAmount, 'withdraw-total');
        updateBalance(withdrawAmount, false);
    }
});
//Deposit

function getInputValue(){
    const depositInput = document.getElementById('deposit-input');;
    const depositAmount = parseFloat(depositInput.value);
    depositInput.value="";
    return depositAmount;
}
function getTotalValue(){
    return null;
}
document.getElementById('deposit-button').addEventListener('click', function () {
    //getting the new amount 
    const depositAmount = getInputValue();

    const currentdepositTotal = document.getElementById('deposit-total');
    var currentdepositTotalAmount = parseFloat(currentdepositTotal.innerText);
    const updatedDepositTotal = currentdepositTotalAmount+depositAmount;
    currentdepositTotal.innerText=updatedDepositTotal;

    const currentdBalanceTotal = document.getElementById('balance-total');
    var currentBalanceTotalAmount = parseFloat(currentdBalanceTotal.innerText);
    const updatedBalanceTotal = currentBalanceTotalAmount+depositAmount;

    currentdBalanceTotal.innerText=updatedBalanceTotal;

});
//Withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    //getting the new amount 
    var withdrawInput = document.getElementById('withdraw-input');;
    withdrawAmount = parseFloat(withdrawInput.value);


    const currentWithdrawTotal = document.getElementById('withdraw-total');
    var currentWithdrawTotalAmount = parseFloat(currentWithdrawTotal.innerText);
    const updatedWithdrawTotal = currentWithdrawTotalAmount+withdrawAmount;

    currentWithdrawTotal.innerText=updatedWithdrawTotal;
    withdrawInput.value="";

    const currentdBalanceTotal = document.getElementById('balance-total');
    var currentBalanceTotalAmount = parseFloat(currentdBalanceTotal.innerText);
    const updatedBalanceTotal = currentBalanceTotalAmount-withdrawAmount;

    currentdBalanceTotal.innerText=updatedBalanceTotal;

});
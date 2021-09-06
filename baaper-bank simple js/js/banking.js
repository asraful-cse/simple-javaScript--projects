// handle deposit button event...
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposit....
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(newDepositAmount);

    // update deposite total....
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText; // porber jeiman ta cilow $00
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;      // jeheto h/p tag ase eijonno innetText jodi input hoto tahole value hoto.


    // update account balance....
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input field ...
    depositInput.value = '';
});
// handle withdraw event handler....
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);
    // console.log(newWithdrawAmount);

    //  update withdraw total....
const withdrawTotal = document.getElementById('withdraw-total');
const previousWithdrawText = withdrawTotal.innerText;
// console.log(previousWithdrawText)
const previousWithdrawTotal = parseFloat(previousWithdrawText);
// console.log(previousWithdrawTotal)
const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotal.innerText = newWithdrawTotal;



// update balance and withdraw....
const balanceTotal = document.getElementById('balance-total');
const previousBalanceText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(previousBalanceText);
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount; 
balanceTotal.innerText = newBalanceTotal;

// clear the withdraw input feild.....
withdrawInput.value ='';

})
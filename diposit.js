
//add even lisener to deposit button
document.getElementById('deposit-Btn').addEventListener('click', function () {
  // get the deposit amount from the deposit input field
  const depositField = document.getElementById('deposit-field');
  // For input field use  .value to the value inside the input field
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  //get the current deposit total 
  const depositTotalElement = document.getElementById('total-Diposit');
  
  //For non-input (element other than input, textarea) use  .innerText to get the text
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

// add number to set the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
//set the deposit total
  depositTotalElement.innerText = currentDepositTotal;





  //get the ballance current total
  const ballanceTotalElement = document.getElementById('total-ballance');
  const previousBallanceTotalString = ballanceTotalElement.innerText;
  const previousBallanceTotal = parseFloat(previousBallanceTotalString);

  //calculate current total ballance
  const currentBallanceTotal = previousBallanceTotal + newDepositAmount;



//set the ballance total
  ballanceTotalElement.innerText = currentBallanceTotal;

  //clear the deposit field
  depositField.value = '';

})
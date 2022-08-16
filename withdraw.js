//Withdraw

//add event handlar with the withdraw button
document.getElementById('withdrow-Btn').addEventListener('click', function(){
  
    
  //get the withdarw amount from the input field
  const withdrawField = document.getElementById('withdraw-field');

  // 
  const newWithdrawAmountString = withdrawField.value;
  //make sure to convert the input a number by using parseFloat
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
      //clear the input field
      withdrawField.value = '';

  if (isNaN(newWithdrawAmount)) {
    alert('please provide a valid number');
    return;
  }

  if (newWithdrawAmount > 499) {
    //get the withdarw amount from the previous Withdraw amount
    const withdrawTotalElement = document.getElementById('total-Withdraw');
    //
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    //make sure to convert the previous withdraw amount a number by using parseFloat
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
   
   
   
   

    //get the total ballance amount
    const ballanceTotalElement = document.getElementById('total-ballance');
    const previousBallanceTotalString = ballanceTotalElement.innerText;
    const previousBallanceTotal = parseFloat(previousBallanceTotalString);


    if (newWithdrawAmount > previousBallanceTotal) {
      alert('Balance is not available');
      return;
    }
    
       // calculate total value of the withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    //Set total withdraw amount
    withdrawTotalElement.innerText = currentWithdrawTotal;

      //calculate new balance total 
       const newBalanceTotal = previousBallanceTotal - newWithdrawAmount;
       //set the ballance total
       ballanceTotalElement.innerText = newBalanceTotal;
       //clear the input field 
    
   
   
  }
  else {
    alert('You can not withdraw the amount of less than $500')
  }


  })
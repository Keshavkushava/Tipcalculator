function buttonclick() {                                                     //Function to calculate tip per person and total bill per person
  
  var bill = Number(document.getElementById('totalBill').value);             //create variable to store Bill Amount
  var tipPercent = Number(document.getElementById('tipInput').value);        //create variable to store Tip Percentage
  var people = Number(document.getElementById('tipSplit').value);            //create variable to store number of people

  if( !document.getElementById('totalBill').value || bill<0 ) {              //Check to see if Bill Amount is empty or less than 0
      alert('Please enter valid Bill Amount ($)');                           //Alert message
  }

  else if( !document.getElementById('tipInput').value || tipPercent<0 ) {     //Check to see if tip percentage is empty or less than 0
      alert('Please enter valid tip percentage (%)');                         //Alert message
  }
  else {
  var tipValue =(bill * (tipPercent / 100))/people;                          //Calculate tip amount per person
  var newBillEach = (bill + tipValue*people) / people;                       //Calculate total bill per person

      document.getElementById('newBill').innerHTML = "$" + (newBillEach).toFixed(2);        //Display the total bill per person
      document.getElementById('tipAmount').innerHTML = "$" + (tipValue).toFixed(2);         //Display the tip amount per person
}}



function clearform() {                                                                    //Function to reset the output fields
  var a = (document.getElementById('newBill').innerHTML = '$0.00');                       //reset the total bill per person to $0.00 
  var b = (document.getElementById('tipAmount').innerHTML = '$0.00');                     //reste the tip amount per person to $0.00
} 



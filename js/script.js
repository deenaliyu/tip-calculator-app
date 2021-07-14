const totalBill = document.getElementById('bill').value;
const typedTip = document.getElementById('input-tip').value;
const selectedTip = document.querySelectorAll('.btn-dark');
const numPeople = document.getElementById('people').value;
const clear = document.getElementById('reset');


let percentTip = 0;
let bill = 0;
let numberOfPeople = 0;


let setTipPercent = (x) => {
  persentTip = Number.parseFloat(x.value);
  if(!numberOfPeople) {
    document.getElementById('error').textContent = "can't be zero";
    document.getElementById('people').style.borderColor = "red";
    document.getElementById('people1').style.borderColor = "red";

    return;
  }
  tipPerPerson = bill * persentTip / numberOfPeople;
  tipPerPerson = parseFloat(tipPerPerson.toFixed(2))
  totalTip = tipPerPerson + bill;
  document.getElementById('tip-amount').textContent = tipPerPerson;
  document.getElementById('total').textContent = totalTip;
}

let setBill = (x) => {
  bill = Number.parseFloat(x.value);
}

let setNumberOfPeople = (x) => {
  numberOfPeople = Number.parseInt(x.value);
}


clear.addEventListener('click', e => {
  e.preventDefault(); 
  document.getElementById('bill').value ='';
  document.getElementById('input-tip').value ='';
 document.querySelectorAll('.btn-dark').value ='';
  document.getElementById('people').value ='';
  document.getElementById('error').textContent = "";
  document.getElementById('tip-amount').textContent = "";
  document.getElementById('total').textContent = "";
  
    })


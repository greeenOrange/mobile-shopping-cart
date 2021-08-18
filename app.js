/* First steps/** */

//  function updateCaseNum(isIncreasing) {
//     const caseInput = document.getElementById('case-number');
//     let caseNum = caseInput.value;
//    if(isIncreasing == true){
//        caseNum = parseInt(caseNum) + 1;
//    }else if(caseNum > 0){
//     caseNum = parseInt(caseNum) - 1;
//    }
//    caseInput.value = caseNum;
//    /* Update case Amount */
// const caseTotal = document.getElementById('case-total');
// caseTotal.innerText = caseNum * 59;
// console.log(caseTotal.innerText);

// }
// document.getElementById('case-plus').addEventListener('click',function () {  
//  updateCaseNum(true);
//     // caseInput.value = caseNum + 1;
//     // console.log(caseInput.value);
// })
// document.getElementById('case-minus').addEventListener('click',function () {
//     updateCaseNum(false);
//     // caseInput.value = caseNum - 1; 
// });

// /* Phones Total */
// function totalPhones(dollerIncrease) {
//     const phoneInput = document.getElementById('phone-number');
//     let phoneNum = phoneInput.value;
    
//     if (dollerIncrease == true) {
//         phoneNum = parseInt(phoneNum) + 1; 
//         console.log();
//     }else if(phoneNum > 0){
//         phoneNum = parseInt(phoneNum) - 1; 
//     }
//     phoneInput.value = phoneNum;

//     const phoneTotal = document.getElementById('phone-total');
//     phoneTotal.innerText = phoneNum * 1219;
//     console.log(phoneTotal.innerText);
// }

// /* Phone Amount update */
// document.getElementById('phone-plus').addEventListener('click',function () {

//     totalPhones(true);
//     // const phoneInput = document.getElementById('phone-number');
//     // const phoneNum = phoneInput.value;
//     // phoneInput.value = parseInt(phoneNum) + 1;       
    
// });
// document.getElementById('phone-minus').addEventListener('click',function () {
//     totalPhones(false);
//     // const phoneTotal = document.getElementById('phone-number');
//     // const phoneNum = phoneTotal.value;
          
// });

/** First step End ***/

/* Full part */
function updateProductNum(product,price,isIncreasing) {
    const productInput = document.getElementById(product +'-number');
    let productNum = productInput.value;
   if(isIncreasing == true){
       productNum = parseInt(productNum) + 1;
   }else if(productNum > 0){
    productNum = parseInt(productNum) - 1;
   }
   productInput.value = productNum;
   /* Update case Amount */
const productTotal = document.getElementById(product + '-total');
productTotal.innerText = productNum * price;
// console.log(productTotal.innerText);

/* calculate Total */
calculatorTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNum = parseInt(productInput.value);
    return productNum;
}

function calculatorTotal() {
    
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // const phoneNumber = document.getElementById('phone-number').value;
    /* Update On the HTML */
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = tax;
    document.getElementById('total').innerText = totalPrice;
    
}

/* Case Increase Decrease Events */
document.getElementById('case-plus').addEventListener('click',function () {  
 updateProductNum('case',59,true);
    // caseInput.value = caseNum + 1;
    // console.log(caseInput.value);
});
document.getElementById('case-minus').addEventListener('click',function () {
    updateProductNum('case',59,false);
    // caseInput.value = caseNum - 1; 
});

  
/* Phone Amount update */
document.getElementById('phone-plus').addEventListener('click',function () {

    updateProductNum('phone', 1219 ,true)
    // const phoneInput = document.getElementById('phone-number');
    // const phoneNum = phoneInput.value;
    // phoneInput.value = parseInt(phoneNum) + 1;       
    
});
document.getElementById('phone-minus').addEventListener('click',function () {
    updateProductNum('phone', 1219 ,false)
    // const phoneTotal = document.getElementById('phone-number');
    // const phoneNum = phoneTotal.value;
          
});
/* Full part end */
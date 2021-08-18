function updateCaseNum(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    let caseNum = caseInput.value;
   if(isIncreasing == true){
       caseNum = parseInt(caseNum) + 1;
   }else if(caseNum > 0){
    caseNum = parseInt(caseNum) - 1;
   }
   caseInput.value = caseNum;
   /* Update case Amount */
const caseTotal = document.getElementById('case-total');
caseTotal.innerText = caseNum * 59;
console.log(caseTotal.innerText);

}
document.getElementById('case-plus').addEventListener('click',function () {  
 updateCaseNum(true);
    // caseInput.value = caseNum + 1;
    // console.log(caseInput.value);
})
document.getElementById('case-minus').addEventListener('click',function () {
    updateCaseNum(false);
    // caseInput.value = caseNum - 1; 
});

/* Phones Total */
function totalPhones(dollerIncrease) {
    const phoneInput = document.getElementById('phone-number');
    let phoneNum = phoneInput.value;
    
    if (dollerIncrease == true) {
        phoneNum = parseInt(phoneNum) + 1; 
        console.log();
    }else if(phoneNum > 0){
        phoneNum = parseInt(phoneNum) - 1; 
    }
    phoneInput.value = phoneNum;

    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = phoneNum * 1219;
    console.log(phoneTotal.innerText);
}

/* Phone Amount update */
document.getElementById('phone-plus').addEventListener('click',function () {

    totalPhones(true);
    // const phoneInput = document.getElementById('phone-number');
    // const phoneNum = phoneInput.value;
    // phoneInput.value = parseInt(phoneNum) + 1;       
    
});
document.getElementById('phone-minus').addEventListener('click',function () {
    totalPhones(false);
    // const phoneTotal = document.getElementById('phone-number');
    // const phoneNum = phoneTotal.value;
          
});
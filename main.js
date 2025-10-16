const hamburge_image = document.getElementById("hamberg-image");
const navbarLists=document.getElementById('navbar-lists');
const sign_in_button=document.getElementById('sign-button');

let itsOpen=false;

hamburge_image.addEventListener('click',()=>{
  if(!itsOpen){ 
  navbarLists.classList.add('navbar-lists-return');
  sign_in_button.classList.add('sign-return');
 
  // hamburge_image.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
  itsOpen=true;
  }
  else{
  navbarLists.classList.remove('navbar-lists-return');
  sign_in_button.classList.remove ('sign-return')
  //hamburge_image.innerHTML = '<i class="fa-solid fa-bars"></i>';
  itsOpen=false;
  }
})




const form = document.getElementById('form')
function Validation(event){
    event.preventDefault();
    
        // emailValidation();
        companyemailValidation();
        fnameValidation();
        lnameValidation(); 
        companynameValidation(); 
        companyurlValidation(); 
        jobValidation();
        textBox();


    if(companyemailValidation() && fnameValidation() && lnameValidation() && companynameValidation() && companyurlValidation() && jobValidation() && textBox()){
        alert("Form submitted")
        form.reset();
    }

    let valid = true;

}

function companyemailValidation() {
    const email = document.getElementById('company-em').value.trim();
    const emailError = document.getElementById('cemail-error');
    let valid = true;
    if(email === ''|| !email.includes('@')){        //used-regex;
        emailError.textContent = 'Enter your Email correctly';
        document.getElementById('company-em').style.border = '1px solid red';
        valid = false;
    }
    
    else{
        emailError.textContent = '';
        document.getElementById('company-em').style.border = '1px solid green'; 

             
    }

    return valid
}

function  companynameValidation() {
    const companyName = document.getElementById('company-name').value.trim();
    const companyError = document.getElementById('cname-error');
    let valid = true;
    if(companyName === '' || /\d/.test(companyName)){
        companyError.textContent = 'Enter your Name';
        document.getElementById('company-name').style.border = "1px solid red";
        valid = false
    }
    else{
        companyError.textContent = '';
        document.getElementById('company-name').style.border = "1px solid green";
    }
    return valid
}



function  fnameValidation() {
    const name = document.getElementById('fname-inp').value.trim();
    const nameError = document.getElementById('fname-error');
    let valid = true;
    if(name === '' || /\d/.test(name)){
        nameError.textContent = 'Enter your Name';
        document.getElementById('fname-inp').style.border = "1px solid red";
        valid = false
    }
    else{
        nameError.textContent = '';
        document.getElementById('fname-inp').style.border = "1px solid green";
    }
    return valid
}

function  lnameValidation() {
    const name = document.getElementById('lname-inp').value.trim();
    const nameError = document.getElementById('lname-error');
    let valid = true;
    if(name === '' || /\d/.test(name)){
        nameError.textContent = 'Enter your Name';
        document.getElementById('lname-inp').style.border = "1px solid red";
        valid = false
    }
    else{
        nameError.textContent = '';
        document.getElementById('lname-inp').style.border = "1px solid green";
    }
    return valid
}

function companyurlValidation(){
    const companyUrl = document.getElementById('company-url').value.trim();
    const companyError = document.getElementById('url-error');
    let valid = true;

    if(companyUrl === ''){
        companyError.textContent = 'This field is required';
        document.getElementById('company-url').style.border = '1px solid red';   
        valid = false
    }else if(!isValid(companyUrl)){
        companyError.textContent = 'Enter a valid website';
        document.getElementById('company-url').style.border = '1px solid red';  
        valid = false
    }else{
        companyError.textContent = '';
        document.getElementById('company-url').style.border = '1px solid green';   
        
    }
    return valid
}

function isValid(str){
    try {
        const url = new URL(str)
        return url.protocol === 'http:' || url.protocol === 'https:'; 
    } catch (error) {
        return false;
    }
}

function jobValidation(){
    const job = document.getElementById('job-select');
    const jobError = document.getElementById('select-error');

    let valid = true;

    if(job.value === ''){
        jobError.textContent = 'select job';
        document.getElementById('job-select').style.border = '1px solid red';
        valid = false
    }
    else{
        jobError.textContent = '';
        document.getElementById('job-select').style.border = '1px solid green';
    }
    return valid;
}


function textBox(){
    const textArea = document.getElementById('text-inp').value.trim();
    const textError = document.getElementById('text-error');

    let valid = true;

    if(textArea === '' || textArea.split(' ').length > 5){
        textError.textContent = 'give some words';
        document.getElementById('text-inp').style.border = '1px solid red';
        valid = false;
    }
    else{
        textError.textContent = '';
        document.getElementById('text-inp').style.border = '1px solid green';
    }
    return valid
} 

document.getElementById('company-em').addEventListener('input', companyemailValidation)
document.getElementById('company-name').addEventListener('input', companynameValidation)
document.getElementById('fname-inp').addEventListener('input', fnameValidation)
document.getElementById('lname-inp').addEventListener('input', lnameValidation)
document.getElementById('company-url').addEventListener('input', companyurlValidation)
document.getElementById('job-select').addEventListener('change', jobValidation)
document.getElementById('text-inp').addEventListener('input', textBox)





const submitButton = document.querySelector('.btns-submit');
submitButton.addEventListener('click', function(event){
    event.preventDefault(); // prevent jump
    Validation(event);

});



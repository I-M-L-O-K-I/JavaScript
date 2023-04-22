const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')
let success = true;
form.addEventListener('submit',(e)=>{
if(!ValidateInputs()){
    e.preventDefault()
  }
})
function ValidateInputs(){
   const usernameVal = username.value.trim()
   const emailVal = email.value.trim()
   const passwordVal = password.value.trim()
   const cpasswordVal = cpassword.value.trim()
if(usernameVal === ''){
      success = false
      setError(username, 'Enter a Name Mf..!') }
else{
       setSuccess(username)
    }
 if(emailVal === ''){
    success = false
    setError(email,'Enter a Email Mf...!')
 }  
else if(!validateEmail(emailVal)){
    success = false
     setError(email,'Enter a Valid Email')
 }
else{
    setSuccess(email)
}
if(passwordVal === ''){
    success = false
    setError(password,'Enter a passwod Mf')
}else if(passwordVal.length<8){
    success = false
    setError(password,'Password atleast contain 8 characters Mf')
}
else{
    setSuccess(password)
}
if(cpasswordVal === ''){
    success = false
       setError(cpassword,'Enter a Confirm Paswword Mf')
} else if(cpasswordVal!== passwordVal){
    success = false
        setError(cpassword,'Password is Incorrect')
}else{
    setSuccess(cpassword)
}

return success;
}
 



function setError(element,message){
    inputGroup = element.parentElement;
    errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = message
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}
function setSuccess(element){
    inputGroup = element.parentElement;
    errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = ''
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
const validateEmail = (email) =>{
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    }
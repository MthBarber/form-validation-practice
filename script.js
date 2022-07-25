console.log("hello")

//set constraint for email input
const emailInput = document.getElementById('email')

emailInput.addEventListener('input',() => {    
    if (emailInput.validity.typeMismatch){
        emailInput.setCustomValidity("I am expecting an email address!")
    }else if(emailInput.validity.valueMissing){
        emailInput.setCustomValidity("Please enter an email address!")    
    }else {
        emailInput.setCustomValidity("")
    }
});

//set constraint for country input
const countryInput = document.getElementById('country')

countryInput.addEventListener('input', () =>{
    if (countryInput.validity.valueMissing){
        countryInput.setCustomValidity('Please enter your country')
    }else if (countryInput.validity.patternMismatch){
        countryInput.setCustomValidity('This fields accepts letters only')
    }else {
        countryInput.setCustomValidity("")
    }
})

//set constraint for zip code input
const zipCodeInput = document.getElementById('zip-code')

zipCodeInput.addEventListener('input', () => {
    if (zipCodeInput.validity.valueMissing){
        zipCodeInput.setCustomValidity('Please enter your zip code')
    }else if (zipCodeInput.validity.typeMismatch){
        zipCodeInput.setCustomValidity('Numbers only!')
    }else if (zipCodeInput.validity.tooShort){
        zipCodeInput.setCustomValidity(`Zip code should be atleast ${zipCodeInput.minLength} characters`)
    }else {
        zipCodeInput.setCustomValidity('')
    }
})


//set constraint for password input
const passwordInput = document.getElementById('password')
passwordInput.addEventListener('input', () => {
    if (passwordInput.validity.valueMissing){
        passwordInput.setCustomValidity('Please enter your password')
    }else if (passwordInput.setCustomValidity.typeMismatch){
        passwordInput.setCustomValidity("Please enter valid values for password")
    }else{
        passwordInput.setCustomValidity('')
    }
})

const confirmPasswordInput = document.getElementById('password-confirm')
confirmPasswordInput.addEventListener('input', () => {
    if (confirmPasswordInput.validity.valueMissing){
        confirmPasswordInput.setCustomValidity('Please enter your password')       
    }else if (confirmPasswordInput.setCustomValidity.typeMismatch){
        confirmPasswordInput.setCustomValidity("Please enter valid values for password")
    }else if(confirmPasswordInput.value != passwordInput.value){
            confirmPasswordInput.setCustomValidity("Your entered passwords do not match")    
    }else {
        confirmPasswordInput.setCustomValidity('')
    }
})








//Prevent form submission for now as nothing is being saved
const submit = document.querySelector('button')

submit.addEventListener("click", (e) => {
    e.preventDefault()
    if (emailInput.checkValidity() === false){
        alert("Please fix email input")
    }else if (countryInput.checkValidity() === false){
        alert("Please fix country input")
    }else if (zipCodeInput.checkValidity() === false){
        alert("Please fix zip code input")
    }else if (passwordInput.checkValidity() === false){
        alert("Please fix password input") 
    }else if (confirmPasswordInput.checkValidity() === false){ 
        alert("Please fix confirm password input")        
    }else {
        alert("High five!")
    }
})
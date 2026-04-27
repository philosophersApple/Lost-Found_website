// Form Validation
const signup_form = document.getElementById('signup_form')
const fname = document.getElementById('fName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repeat_password = document.getElementById('repeat-password');
const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');
const repeat_password_error = document.getElementById('repeat_password_error');
const signup_success = document.getElementById('signup_success')
const login_email_error = document.getElementById('login_email_error')
const login_password_error = document.getElementById('login_password_error')
const login_form = document.getElementById('login_form')
const login_email = document.getElementById('login_email');
const login_password = document.getElementById('login_password');
const login_success = document.getElementById('login_success');
const allColor = document.querySelector('.all');
const lostColor = document.querySelector('.lost')
const foundColor = document.querySelector('.found');

if(signup_form){
    signup_form.addEventListener('submit',(e) => {
    let messages = []
    if(fname.value === '' || fname.value == null){
        name_error.innerText = 'First name is required'
        name_error.classList.add('error_message')
        messages.push('First name is required')
    }
    if(email.value === '' || email.value == null){
        email_error.innerText = 'Email is required'
        email_error.classList.add('error_message')
        messages.push('Email is required')
    }
    if(password.value === '' || password.value == null){
        password_error.innerText  = 'Password is required'
        password_error.classList.add('error_message')
        messages.push('Password is required')
    }
    if(password.value.length < 6){
        password_error.innerText  = 'Password should have at least 6 characters'
        password_error.classList.add('error_message')
        messages.push('Password should have at least 6 characters')
    }
    if(repeat_password.value !== password.value){
        repeat_password_error.innerText = "Passwords do not match"
        repeat_password_error.classList.add('error_message')
        messages.push('Passwords do not match')
    }
    if(messages.length > 0){
        e.preventDefault();
    }else{
        e.preventDefault();
        signup_success.innerText = 'Account created successfully'
        signup_success.classList.add('signup_success')
    }
    
})}

if(login_form){
    login_form.addEventListener('submit',(e)=>{
    let messages = [];
    let validEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

   if(login_email.value === '' || login_email.value == null){
        login_email_error.innerText = 'Email is required'
        login_email_error.classList.add('error_message')
        messages.push('Email is required')
    } else if(!validEmail.test(login_email.value)){
        login_email_error.innerText = 'Enter a valid email'
        login_email_error.classList.add('error_message')
        messages.push('Enter a valid email')
    }
    if(login_password.value === '' || login_password.value == null){
        login_password_error.innerText = 'Password is required'
        login_password_error.classList.add('error_message')
        messages.push('Password is required')
    }
    if(login_password.value.length < 6){
        login_password_error.innerText  = 'Password should have at least 6 characters'
        login_password_error.classList.add('error_message')
        messages.push('Password should have at least 6 characters')
    }
    if(messages.length > 0){
        e.preventDefault();
    }else{
        e.preventDefault();
        login_success.innerText = 'You are logged in'
        login_success.classList.add('login_success')
    }
})}

function clearError(input,errorElement){
    if(input && errorElement){
    input.addEventListener('input',()=>{
        errorElement.innerText = ''
        errorElement.classList.remove('error_message')
    })
}
}
clearError(fname, name_error)
clearError(email, email_error)
clearError(password, password_error)
clearError(repeat_password, repeat_password_error)
clearError(login_email,login_email_error)
clearError(login_password,login_password_error)

function allColor(){
    allColor.addEventListener('click',()=>{
        allColor.style.backgroundColor = 'red'
    })
}
allColor()
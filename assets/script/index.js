const myForm=document.forms.myForm;
const userNameInput=myForm.elements.userName;
const emailInput=myForm.elements.email;
const ageInput=myForm.elements.age;
const passwordInput=myForm.elements.password;
const profession=myForm.elements.profession;
const agreementCheckbox=myForm.elements.agreementCheckbox;
const inputFields=document.querySelectorAll('.form_input');
const submitButton=document.getElementById('formSubmit');
const checkbox=document.getElementById('checkbox');


const spanError = document.querySelector('.error');

myForm.addEventListener('submit',function(evt){
    evt.preventDefault();
    let hasError=false;


    if(userNameInput.value === '' || emailInput.value ==='' || isNaN(ageInput.value) &&ageInput.value <= 0 || passwordInput.value ==='' || agreementCheckbox.checked === false){
        spanError.style.display='block';
        hasError=true;
    }
    
    // Проверка select-profession
    // if(profession.value=''){
    //     professionError.textContent='Please choose a profession';
    //     professionError.style.display='block';
    // }

    if(hasError==false){
        console.log('Name:', userNameInput.value);
        console.log('Email:', emailInput.value);
        console.log('Age:', ageInput.value);
        console.log('Password:', passwordInput.value);
        console.log('Gender:',document.querySelector('input[name=gender]:checked').value );
        console.log('Profession:', profession.value);
        myForm.reset();
        alert('Form submitted successfully');
    }
});

inputFields.forEach(function(input){
    input.addEventListener('focus',function(){
        input.style.border='1px solid #00ff00';
    });
    input.addEventListener('blur',function(){
        input.style.border='';
    });
});

myForm.addEventListener('change',(event)=>{
    const inputFields = Array.from(document.querySelectorAll('.form_input')).map(input => input.value);
    if(event.target.classList.contains('checkbox')){
        if(checkbox.checked===true && inputFields.every(field => field !== '')){
            submitButton.disabled = false;
            submitButton.classList.remove('btn');
        }
        if(checkbox.checked===false){
            submitButton.disabled = true;
            submitButton.classList.add('btn');
        }
    }
});


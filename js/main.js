const myForm = document.getElementById('my-form'), 
        nameInput = document.querySelector('#name'),
        emailInput = document.querySelector('#email'),
        msg = document.querySelector('.msg'),
        userList  = document.querySelector('#users');
/* give some consts to deal with them if we use jquery we won't do that*/


/* this function to check that name and email fields aren't empty*/
/* if they are empty a messafe will display tellin the user that he/she should fill these fields*/

function onSubmit(e) {
    e.preventDefault();
   
    if(nameInput.value=== '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please kindly fill all parts of form';

        setTimeout(() => msg.remove(), 3000);

    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`
        ${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
    }
}

myForm.addEventListener('submit',onSubmit);


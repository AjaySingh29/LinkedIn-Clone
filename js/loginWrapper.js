document.getElementById('contact').addEventListener('input', function() {
    const value = this.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (emailPattern.test(value)) {
        console.log('Valid email');
    } else if (phonePattern.test(value)) {
        console.log('Valid phone number');
    } else {
        console.log('Invalid input');
    }
});

const passwordInput=document.getElementById('password');

// passwordInput.addEventListener('click', function(){
//     const show = document.createElement('div');
//     show.classList.add('show');
//     show.innerHTML="SHOW";
//     document.body.appendChild(show);
// });

const readability=document.getElementById('readability');

readability.addEventListener('click', function(){
    if(readability.innerHTML=='Show'){
        readability.innerHTML="Hide";
        passwordInput.type='text';
    }
    else{
        readability.innerHTML='Show';
        passwordInput.type='password';
    }
})




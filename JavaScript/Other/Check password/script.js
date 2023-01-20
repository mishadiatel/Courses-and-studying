let passw = document.querySelector('#myPassword');
let show = document.querySelector('.show');
let container = document.querySelector('.container');

document.addEventListener('keyup', function(e){
    let password = document.querySelector('#myPassword').value;
    let strengt = strength(password);
    if(strengt <= 2){
        container.classList.add('weak');
        container.classList.remove('medium');
        container.classList.remove('strong');

    }else if(strengt >= 2 && strengt <= 4){
        container.classList.remove('weak');
        container.classList.add('medium');
        container.classList.remove('strong');
    }else{
        container.classList.remove('weak');
        container.classList.remove('medium');
        container.classList.add('strong');
    }

});


show.addEventListener('click', function(){
    if(passw.type === 'password'){
        passw.setAttribute('type', 'text');
        show.classList.add('hide');
    }else{
        passw.setAttribute('type', 'password');
        show.classList.remove('hide');
    }
});


function strength(password){
    let i = 0
    if(password.length >= 6){
        i++;
    }
    if(password.length >= 10){
        i++;
    }
    if(/[A-Z]/.test(password)){
        i++;
    }
    if(/[a-z]/.test(password)){
        i++;
    }
    if(/[0-9]/.test(password)){
        i++;
    }
    if(/[A-Za-z0-9]/.test(password)){
        i++;
    }
    return i;
}
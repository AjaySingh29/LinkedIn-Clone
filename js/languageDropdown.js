const language=document.getElementById('language');
const opt=document.getElementById('optLang');

language.addEventListener('click', function(){
    opt.style.display="none";
});

let options = document.querySelectorAll("option");

options.forEach(option => {
    option.addEventListener('mouseover', function() {
        option.style.backgroundColor = "dodgerblue";
    });
    if(option.selected){
        option.style.backgroundColor = "dodgerblue";
    }
});


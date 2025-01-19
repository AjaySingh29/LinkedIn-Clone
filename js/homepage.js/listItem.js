
let CancelButton = document.querySelectorAll('.CancelButton');

CancelButton.forEach((button) => {
    button.addEventListener('click', function() {
        let subject = button.closest('.subject');
        if (subject) {
            subject.style.display = "none";
        }
    });
});




const form = document.querySelector('form');
const bd = {};
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const emailInput = this.elements.email;
    const passwordInput = this.elements.password;


    if (emailInput.value.trim() ==="" || passwordInput.value.trim() ===""){
        alert('All form fields must be filled in');
        return;
    } else{
        bd.email = emailInput.value.trim();
        bd.password = passwordInput.value.trim();
    };
    console.log(bd);
    form.reset();
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

// togglePassword Func
function myFunction() {
    var passwordLock = document.getElementById("password");
    if (passwordLock.type === "password") {
        passwordLock.type = "text";
        passwordLock.src = "assets/eye_close.svg";
    } else {
        passwordLock.type = "password";
        passwordLock.src = "assets/eye_open.svg";
    }
  }
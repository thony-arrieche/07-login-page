// Disbale form submissions if there are invalid fields
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

// togglePassword function
function togglePassword() {
    var passwordLock = document.getElementById("password");
    var eyeIconImg = document.getElementById('eye-icon');

    if (passwordLock.type === "password") {
        passwordLock.type = "text";
        eyeIconImg.src = "assets/eye_close.svg";
    } else {
        passwordLock.type = "password";
        eyeIconImg.src = "assets/eye_open.svg";
    }
  }
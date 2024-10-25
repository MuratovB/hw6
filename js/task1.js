document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.style.display = 'none');

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    let valid = true;

    function emptyField(inputElement, messageId, message) {
        errorMessageElement = document.getElementById(messageId);
        if (!inputElement.value.trim()) {
            inputElement.classList.add('error');
            errorMessageElement.textContent = message;
            errorMessageElement.style.display = 'block';
            return false;
        } else {
            inputElement.classList.remove('error');
            errorMessageElement.style.display = 'none';
            return true;
        }
    }
    
    valid &= emptyField(nameInput, 'nameError', 'Имя не может быть пустым.');
    valid &= emptyField(emailInput, 'emailError', 'Email не может быть пустым.');
    valid &= emptyField(passwordInput, 'passwordError', 'Пароль не может быть пустым.');
    
    if (emailInput.value.length < 5) {
        valid = false;
        emailInput.classList.add('error');
        document.getElementById('emailError').textContent = 'Почта должна быть настоящей.';
        document.getElementById('emailError').style.display = 'block';
    } else {
        emailInput.classList.remove('error');
    }

    if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
        valid = false;
        emailInput.classList.add('error');
        document.getElementById('emailError').textContent = 'Введите корректный email.';
        document.getElementById('emailError').style.display = 'block';
    } else {
        emailInput.classList.remove('error');
    }
    
    if (passwordInput.value.length < 8) {
        valid = false;
        passwordInput.classList.add('error');
        document.getElementById('passwordError').textContent = 'Пароль должен содержать минимум 8 символов.';
        document.getElementById('passwordError').style.display = 'block';
    } else {
        passwordInput.classList.remove('error');
    }

    if (valid) {
        alert('Форма успешно отправлена!');
    }
});
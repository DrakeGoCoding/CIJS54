import { addUserDocument, getUserDocumentByEmail, isValidEmail, isValidName, isValidPassword, isValidRegistration } from "../utils.js"

export class RegisterScreen extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowDom.innerHTML = `
            ${STYLE}
            <div class="register-container">
                <form id="register-form">
                    <h1>CI Project</h1>
                    <div id="full-name">
                        <input-wrapper id="first-name" type="text" placeholder="First name"></input-wrapper>
                        <input-wrapper id="last-name" type="text" placeholder="Last name"></input-wrapper>
                    </div>
                    <input-wrapper id="email" type="email" placeholder="Email"></input-wrapper>
                    <input-wrapper id="password" type="password" placeholder="Password"></input-wrapper>
                    <input-wrapper id="confirm-password" type="password" placeholder="Confirm password"></input-wrapper>
                    <button type="submit">Register</button>
                </form>
            </div>
        `

        const registerForm = this.shadowDom.querySelector('#register-form');

        const firstNameInput = registerForm.querySelector('#first-name');
        firstNameInput.onkeyup = () => {
            const firstName = firstNameInput.value.trim();
            if (firstName.length === 0) {
                firstNameInput.alertDiv.innerText = `First name?`;
                firstNameInput.alertDiv.classList.add('active');
            }
            else if (!isValidName(firstName)) {
                firstNameInput.alertDiv.innerText = "Only letters and white spaces allowed!";
                firstNameInput.alertDiv.classList.add('active');
            }
            else firstNameInput.alertDiv.classList.remove('active');
        }

        const lastNameInput = registerForm.querySelector('#last-name');
        lastNameInput.onkeyup = () => {
            const lastName = lastNameInput.value.trim();
            if (lastName.length === 0) {
                lastNameInput.alertDiv.innerText = "Last name?";
                lastNameInput.alertDiv.classList.add('active');
            }
            else if (!isValidName(lastName)) {
                lastNameInput.alertDiv.innerText = "Only letters and white spaces allowed!";
                lastNameInput.alertDiv.classList.add('active');
            }
            else {
                lastNameInput.alertDiv.classList.remove('active');
            }
        }

        const emailInput = registerForm.querySelector('#email');
        emailInput.onkeyup = () => {
            const email = emailInput.value;
            if (email.length === 0) {
                emailInput.alertDiv.innerText = "Please fill in your email!";
                emailInput.alertDiv.classList.add('active');
            }
            else if (!isValidEmail(email)) {
                emailInput.alertDiv.innerText = "Invalid email format!";
                emailInput.alertDiv.classList.add('active');
            }
            else emailInput.alertDiv.classList.remove('active');
        }

        const passwordInput = registerForm.querySelector('#password');
        passwordInput.onkeyup = () => {
            const password = passwordInput.value;
            if (!isValidPassword(password)) {
                passwordInput.alertDiv.innerText = "Password must be 6-15 characters containing only digits and/or numbers!";
                passwordInput.alertDiv.classList.add('active');
            }
            else passwordInput.alertDiv.classList.remove('active');
        }

        const confirmPasswordInput = registerForm.querySelector('#confirm-password');
        confirmPasswordInput.onkeyup = () => {
            const confirmPassword = confirmPasswordInput.value;
            if (confirmPassword.length === 0){
                confirmPasswordInput.alertDiv.innerText = "Please confirm your password!";
                confirmPasswordInput.alertDiv.classList.add('active');
            }
            else if (confirmPassword !== passwordInput.value){
                confirmPasswordInput.alertDiv.innerText = "Confirm password did not match!";
                confirmPasswordInput.alertDiv.classList.add('active');
            }
            else confirmPasswordInput.alertDiv.classList.remove('active');
        }

        registerForm.addEventListener('submit', e => {
            e.preventDefault();
            const firstName = firstNameInput.value;
            const lastName = lastNameInput.value;
            const email = emailInput.value;
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;
            if (isValidRegistration(firstName, lastName, email, password, confirmPassword)){
                getUserDocumentByEmail(email).then(users => {
                    if (users.length > 0){
                        emailInput.alertDiv.innerText = "Email already exists!";
                        emailInput.alertDiv.classList.add('active');
                    }
                    else {
                        const newUser = {
                            'firstName': firstName,
                            'lastName': lastName,
                            'email': email,
                            'password': password
                        }
                        addUserDocument(newUser);
                        console.log("Congrats!");
                    }
                })
            }
        })
    }
}

customElements.define('register-screen', RegisterScreen);

const STYLE = `
    <style>
        .register-container{
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: flex-end;
            background: url('https://picsum.photos/id/1/1920/1080');
            background-repeat: no-repeat;
            background-size: cover;
        }

        #register-form{
            padding: 0 1.5rem;
            width: 30%;
            height: 100vh;
            background-color: white;
        }

        h1{
            text-align: center;
            color: #1d9ced;
            font-size: 3em;
        }

        #full-name{
            display: flex;
        }

        #first-name{
            width: 65%;
        }

        #last-name{
            width: 45%;
        }

        input-wrapper{
            display: block;
            margin-bottom: 1rem;
        }

        button{
            width: 100%;
            font-size: 2rem;
            margin-top: 1rem;
            padding: 0.75rem 0;
            color: white;
            background-color: #1d9ced;
            border-style: none;
            border-radius: 6px;
            user-select: none;
        }

        button:focus{
            border: none;
            outline: none;
        }

        button:hover{
            background-color: #3d7ea6;
            cursor: pointer;
        }
    </style>
`
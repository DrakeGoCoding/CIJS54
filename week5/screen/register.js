export class RegisterScreen extends HTMLElement{
    constructor(){
        super();
        this.shadowDom = this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.shadowDom.innerHTML = `
            ${STYLE}
            <div class="register-container">
                <form id="register-form">
                    <h1>CI Project</h1>
                    <input-wrapper id="first-name" type="text" placeholder="First Name"></input-wrapper>
                    <input-wrapper id="last-name" type="text" placeholder="Last Name"></input-wrapper>
                    <input-wrapper id="email" type="text" placeholder="Email"></input-wrapper>
                    <input-wrapper id="password" type="password" placeholder="Password"></input-wrapper>
                    <input-wrapper id="confirm-password" type="password" placeholder="Confirm Password"></input-wrapper>
                    <button type="submit">Register</button>
                </form>
            </div>
        `

        const registerForm = this.shadowDom.querySelector('#register-form');
        registerForm.addEventListener('submit', e => {
            e.preventDefault();
            console.log(registerForm.querySelector('#first-name').value);
            console.log(registerForm.querySelector('#last-name').value);
            console.log(registerForm.querySelector('#email').value);
            console.log(registerForm.querySelector('#password').value);
            console.log(registerForm.querySelector('#confirm-password').value);
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
            width: 30%;
            height: 100vh;
            background-color: white;
        }

        h1{
            text-align: center;
            color: #333;
            font-family: Arial;
        }
    </style>
`
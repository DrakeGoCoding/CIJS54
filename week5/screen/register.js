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
                    <div id="full-name">
                        <input-wrapper id="first-name" type="text" placeholder="First name"></input-wrapper>
                        <input-wrapper id="last-name" type="text" placeholder="Last name"></input-wrapper>
                    </div>
                    <input-wrapper id="email" type="text" placeholder="Email"></input-wrapper>
                    <input-wrapper id="password" type="password" placeholder="Password"></input-wrapper>
                    <input-wrapper id="confirm-password" type="password" placeholder="Confirm password"></input-wrapper>
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
            margin: 1rem 0;
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
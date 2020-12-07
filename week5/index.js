import './screen/register.js';
import './screen/login.js'
import './components/inputWrapper.js'

redirect('register');

export function redirect(screen){
    if (screen === 'register'){
        document.querySelector('#main-container').innerHTML = `
            <register-screen></register-screen>
        `
    }
    else if (screen === 'login'){
        document.querySelector('#main-container').innerHTML = `
            <login-screen></login-screen>
        `
    }
}
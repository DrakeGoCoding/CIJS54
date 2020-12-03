class InputWrapper extends HTMLElement{
    constructor(){
        super();
        this.shadowDom = this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.type = this.getAttribute('type');
        this.placeHolder = this.getAttribute('placeholder')
        this.alertMessage = this.getAttribute('alert-message') || '';
        this.shadowDom.innerHTML = `
            <div class="wrapper">
                <input id="input-main" type="${this.type}" placeholder="${this.placeHolder}">
                <div class="alert">${this.alertMessage}</div>
            </div>
        `
    }

    get value(){
        const value = this.shadowDom.querySelector('#input-main').value;
        return value;
    }
}

const STYLE = `
    <style>

    </style>
`

customElements.define('input-wrapper', InputWrapper);
export class PostWrapper extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){
        this.shadowDom.innerHTML = `
            ${STYLE}
            <form id="post">
                <textarea name="post-content" rows="4"></textarea>
                <button>Post</button>
            </form>
        `
    }
}

customElements.define('post-wrapper', PostWrapper);

const STYLE = `
    <style>
        
    </style>
`;
export class PostCreator extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowDom.innerHTML = `
            ${STYLE}
            <div class="post-creator-container">
                <form id="post">
                    <textarea name="post-content" rows="4"></textarea>
                    <button>Post</button>
                </form>
            </div>
        `
    }
}

customElements.define('post-creator', PostCreator);

const STYLE = `
    <style>
        
    </style>
`;
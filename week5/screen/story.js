export class StoryScreen extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){
        this.shadowDom.innerHTML = `
            ${STYLE}
            <story-header></story-header>
            <post-wrapper></post-wrapper>
        `
    }
}

customElements.define('story-screen', StoryScreen);

const STYLE = `
    <style>

    </style>
`
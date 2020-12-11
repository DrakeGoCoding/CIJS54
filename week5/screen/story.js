export class StoryScreen extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowDom.innerHTML = `
            ${STYLE}
            <div class="story-screen-container">
                <story-header></story-header>
                <post-creator></post-creator>
                <div class="user-posts"></div>
            </div>
        `
    }
}

customElements.define('story-screen', StoryScreen);

const STYLE = `
    <style>
        
    </style>
`
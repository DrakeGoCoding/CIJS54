import { getItemFromLocalStorage, getPostDocumentsByUserID } from "../utils.js";
import '../components/postWrapper.js'

export class StoryScreen extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const currentUser = getItemFromLocalStorage('currentUser');
        getPostDocumentsByUserID(currentUser.id).then(posts => {
            let postDivs = '';
            posts.forEach(post => {
                postDivs += `
                    <post-wrapper 
                        user-name="${currentUser.fullName}"
                        created-time="${post.createdDate}"
                        content="${post.content}">
                    </post-wrapper>
                `
            })
            this.shadowDom.innerHTML = `
            ${STYLE}
            <div class="story-screen-container">
                <story-header></story-header>
                <div class="story-body-container">
                    <post-creator></post-creator>
                    <div class="user-posts">${postDivs}</div>
                </div> 
            </div>
        `
        });
    }
}

customElements.define('story-screen', StoryScreen);

const STYLE = `
    <style>
        .story-screen-container{
            height: 100%;
        }

        .story-body-container{
            background-color: #f0f2f5;
            height: 100%;
        }

        .user-posts{
            display: flex; 
            justify-content: center; 
            width: 100%; 
            flex-direction: column; 
            align-items: center;
        }

        post-wrapper{
            width: 40%;
        }
    </style>
`
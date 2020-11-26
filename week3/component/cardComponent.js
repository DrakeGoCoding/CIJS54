export class CardComponent extends HTMLElement {
    constructor() {
        super();
        // declare a shadowDom
        this.shadowDom = this.attachShadow({ mode: 'open' })
        this.imgSrc = this.getAttribute('img-src');
        this.title = this.getAttribute('title');
        this.description = this.getAttribute('description');
        this.shadowDom.innerHTML = `
            ${style}
            <div class="card">
                <img src="${this.imgSrc}">
                <div class="card-body">
                    <div class="title">${this.title}</div>
                    <div class="description">${this.description}</div> 
                </div>
            </div>
        `
    }
}

const style = `
    <style>
        .card{
            font-family: Arial;
            border: 1px solid #dbdbdb;
            margin: 20px;
            width: fit-content;
        }

        .card-body{
            padding: 20px;
        }

        .title{
            font-size: 1.5rem;
            font-weight: 600;
        }

        .description{
            padding-top: 5px;
        }
    </style>
`
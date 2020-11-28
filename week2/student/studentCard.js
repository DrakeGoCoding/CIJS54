export default class StudentCard extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
        this.name = this.getAttribute('name');
        this.age = this.getAttribute('age');
        this.pob = this.getAttribute('pob');
        this.shadowDom.innerHTML = `
        ${STYLE}
        <div class="student">
            <p class="student-name"><strong>Name:</strong> ${this.name}</p>
            <p class="student-age"><strong>Age:</strong> ${this.age}</p>
            <p class="student-POB"><strong>Place of birth:</strong> ${this.pob}</p>
        </div>
        `;
    }
}

const STYLE = `
    <style>
        .student{
            border: 1px solid #dbdbdd;
            padding: 10px;
            margin: 10px;
        }

        p{
            font-family: Arial;
            font-size: 1.5rem;
            text-overflow: ellipsis;
        }
    </style>
`
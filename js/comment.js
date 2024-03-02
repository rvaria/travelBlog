import { addComment } from './firebaseCall.js';

export class CommentSection extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML = `
        <style>
        #comments-container {
            margin:auto;
            width:45%;
            text-align:center;
            background-color: #f2f2f2;
            padding:15px;
        }
        
        #comment {
            text-align:left;
            border-radius: 5px;
            padding: 20px;
        }
        
        input[type=text] {
          width: 100%;
          padding: 12px 20px;
          margin: 8px;
          box-sizing: border-box;
        }
        
        button {
            padding:2%;
        }
        </style>
        <div id="comments-container">
            <form>
                <div id="comment">
                    <label>Enter name
                        <input id="name" type="text" placeholder="Your name.." required>
                    </label>
            </div>
            <div id="comment">
                <label>Enter comment
                    <input id="enterComment" type="text" placeholder="Your comment.." required>
                </label>
            </div>
            <button id="commentButton" type="submit">Add</button>
            </form>
        </div>
        `;

        const commentID = this.id;
        const commentButton = this.querySelector('#commentButton');
        const nameInput = this.querySelector('#name');
        const commentInput = this.querySelector('#enterComment');

        commentButton.addEventListener("click", function (e) {
            if (nameInput.value.trim() !== "" && commentInput.value.trim() !== "") {
                addComment(commentID, nameInput.value, commentInput.value);
                e.preventDefault();
            }
        });

    }
}

window.customElements.define('comment-section', CommentSection);


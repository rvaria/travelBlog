import { addComment } from './firebaseFunctions.js';
import { retrieveComments } from './firebaseFunctions.js';

export class CommentSection extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML = `
        <style>
        #comments-container {
            margin:auto;
            width:40%;
            text-align:center;
            background-color: #edfff8;
            padding:15px;
            border-radius: 5%;
            font-family: "Arial";
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

        #prompt {
            font-size: 20px;
            font-weight: bold;
        }
        
        #commentButton {
            font-family: inhert;
            padding:2% 4%;
            background-color: #edfff8;
            font-family: "Arial";
        }

        @media (max-width: 480px) {
            #comments-container {
                width: 70%;
            }
        }

        </style>
        <div id="comments-container">
            <p id="prompt">Leave a comment</p>
            <form>
                <div id="comment">
                    <label>Enter name:
                        <input id="name" type="text" placeholder="Your name.." required>
                    </label>
            </div>
            <div id="comment">
                <label>Enter comment:
                    <input id="enterComment" type="text" placeholder="Your comment.." required>
                </label>
            </div>
            <button id="commentButton" type="submit">Add</button>
            </form>
        </div>
        `;

        const blogID = this.id;
        const commentButton = this.querySelector('#commentButton');
        const nameInput = this.querySelector('#name');
        const commentInput = this.querySelector('#enterComment');

        retrieveComments(blogID);

        commentButton.addEventListener("click", function (e) {
            if (nameInput.value.trim() !== "" && commentInput.value.trim() !== "") {
                
                addComment(blogID, nameInput.value, commentInput.value);
                nameInput.value = "";
                commentInput.value = "";
                e.preventDefault();
            }
        });

    }
}

window.customElements.define('comment-section', CommentSection);


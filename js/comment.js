class CommentSection extends HTMLElement {

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
            <div id="comment">
                <label>Enter name
                    <input id="name" type="text" placeholder="Your name..">
                </label>
            </div>
            <div id="comment">
                <label>Enter comment
                    <input id="enterComment" type="text" placeholder="Your comment..">
                </label>
            </div>
            <button id="commentButton" type="button">Add</button>
        </div>
        `;

        const commentID = this.id;
        const commentButton = this.querySelector('#commentButton');
        const nameInput = this.querySelector('#name');
        const commentInput = this.querySelector('#enterComment');
        
        commentButton.addEventListener("click", function() {
            click(nameInput, commentInput);
        });

    }

}

window.customElements.define('comment-section', CommentSection);

function click(nameInput, commentInput) {
    alert(nameInput.value);
    alert(commentInput.value);
}


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
        
        #name {
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
            <div id="name">
                <label for="fname">Enter name</label>
                <input type="text" placeholder="Your name..">
            </div>
            <div id="name">
                <label for="fname">Enter comment</label>
                <input type="text" id="enterComment"  placeholder="Your comment..">
            </div>
            <button type="button">Add</button>
        </div>
        `;
    }
    
  }

window.customElements.define('comment-section', CommentSection);
class CommentSection extends HTMLElement {
    constructor() {
        super();

        const template = document.createElement('template');

        template.innerHTML = `
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
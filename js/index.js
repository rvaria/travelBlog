const homeImage = document.querySelectorAll('.imageContainer');
const blogBoxes = document.querySelectorAll('.blogBox');

const intersectionObserver = new IntersectionObserver(entries =>  {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fade');
        }
    });
}, {
    threshold:0.5,
});

blogBoxes.forEach((blog) => {
    intersectionObserver.observe(blog);
});

homeImage.forEach((image) => {
    intersectionObserver.observe(image);
});
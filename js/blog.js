const blogElements = document.querySelectorAll('.blog');

const intersectionObserver = new IntersectionObserver(entries =>  {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fade');
        }
    });
}, {
    threshold:0.,
});

blogElements.forEach((element) => {
    intersectionObserver.observe(element);
});
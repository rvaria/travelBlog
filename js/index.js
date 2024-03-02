const homeImage = document.querySelectorAll('.imageContainer');
const blogBoxes = document.querySelectorAll('.blogBox');
const imageSlides = document.querySelectorAll('.image');
let current = 1;

slideshow();
fadePage();

function fadePage() {
    const intersectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade');
            }
        });
    }, {
        threshold: 0.3,
    });

    blogBoxes.forEach((blog) => {
        intersectionObserver.observe(blog);
    });

    homeImage.forEach((image) => {
        intersectionObserver.observe(image);
    });
}

function slideshow() {

    if(current > imageSlides.length) {
        current = 1;
    }

    for(let i = 0; i < imageSlides.length; i++) {
        imageSlides[i].style.display = "none"; 
    }

    imageSlides[current-1].style.display="block";

    current++;
    setTimeout(slideshow, 1500);

}
// navbar toggler
function toggle() {
    var x = document.getElementById('toggler');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}


// about slideshow
const slideshowImages = document.querySelectorAll(".slide .slideshow-img");

const nextImageDelay = 3000;

let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.display = "block";

setInterval(nextImage, nextImageDelay);

function nextImage() {
    slideshowImages[currentImageCounter].style.display = "none";

    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;

    slideshowImages[currentImageCounter].style.display = "block";

}




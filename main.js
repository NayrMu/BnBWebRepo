const dImages = ["dImages/deskBred1.jpg", "dImages/deskBred2.jpg", "dImages/deskCookies1.jpg", 
                "dImages/deskCookies2.jpg", "dImages/deskCookies4.jpg",
                "dImages/deskCookies5.jpg", "dImages/deskPops1.jpg"]; // Add more image URLs as needed
const pImages = ["pImages/portBred1.jpg", "pImages/portCookies1.jpg", "pImages/portCookies2.jpg", 
                "pImages/portCookies3.jpg", "pImages/portPops1.jpg", "pImages/portPops2.jpg"]
const slideshowInterval = 3000; // Change image every 3 seconds (3000 milliseconds)

const displayedImage = document.getElementById('displayed-image');
let currentIndex = 0;

function changeImage() {
  if (window.innerWidth < window.innerHeight) {
    imageArr = pImages;
  } else { imageArr = dImages }
  displayedImage.src = imageArr[currentIndex];
  currentIndex = (currentIndex + 1) % imageArr.length;
}

setInterval(changeImage, slideshowInterval);

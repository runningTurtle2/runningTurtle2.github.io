var myImages = [
  "https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg",
  "https://edit.co.uk/uploads/2016/12/Image-2-Alternatives-to-stock-photography-Thinkstock.jpg",
  "https://edit.co.uk/uploads/2016/12/Image-3-Alternatives-to-stock-photography-Thinkstock.jpg",
  "https://edit.co.uk/uploads/2016/12/Image-4-Alternatives-to-stock-photography-New-Old-Stock.jpg",
  "https://edit.co.uk/uploads/2016/12/deer.jpg",
];

var captionImages = ["Amazed", "Thumbs up", "Person with a camera", "Man on the Moon", "Deer"];

var index = 0;

function updateImage() {
  document.getElementById("slideshow").src = myImages[index];
  document.getElementById("slideshow").alt = captionImages[index];
  document.getElementById("caption").textContent = captionImages[index];
}

function next() {
  if (myImages.length == index + 1) index = 0;
  else index++;
  updateImage();
}

function back() {
  if (index === 0) index = myImages.length - 1;
  else index--;

  updateImage();
}

function autoSlide() {
  if (document.getElementById("auto").checked) next();
}

setInterval(autoSlide, 2000); // Next

var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

previousButton.addEventListener("click", back, false);
nextButton.addEventListener("click", next, false);

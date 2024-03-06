// Get the modal
var modal = document.getElementById('lightbox-modal');

// Get the image and insert it inside the modal
var modalImg = document.getElementById('lightbox-image');
var captionText = document.getElementById('caption');
document.querySelectorAll('.image-link').forEach(item => {
  item.addEventListener('click', function(ev) {
    ev.preventDefault();
    modal.style.display = "block";
    modalImg.src = this.href;
    captionText.innerHTML = this.children[0].alt;
  })
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Optional: Close the modal if someone clicks outside of the img
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

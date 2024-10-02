document.addEventListener('DOMContentLoaded', function () {
    const imageItems = document.querySelectorAll('.image-item');
    const popup = document.querySelector('.image-popup');
    const popupImage = document.querySelector('.popup-image');
    const popupDescription = document.querySelector('.popup-description');

    imageItems.forEach(item => {
        item.addEventListener('click', function () {
            const imageUrl = item.querySelector('img').src;
            const description = item.getAttribute('data-description');

            popupImage.src = imageUrl;
            popupDescription.textContent = description;
            popup.classList.add('active');
        });
    });

    popup.addEventListener('click', function () {
        popup.classList.remove('active');
    });
});



 // Function to scroll back to the top of the page
 function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Show/hide back-to-top button based on scroll position
window.onscroll = function() {
    var btn = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};








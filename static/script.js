    function toggleMenu() {
        var menu = document.querySelector('.menu');
        menu.classList.toggle('show-menu');
    }

    function updateFileName(input) {
        const label = document.getElementById('upload-btn');
        const fileName = input.files.length > 0 ? input.files[0].name : 'Choose File';
        label.textContent = fileName;
    }

    function startSimulation() {
        // Redirect to another page
        window.location.href = 'test segp2.html';
        // Replace 'another-page.html' with the actual URL of the page you want to navigate to
    }

    function updateTitleOnScroll() {
        var signInCard = document.getElementById('signInCard');
        var signUpCard = document.getElementById('signUpCard');

        var signInCardTop = signInCard.getBoundingClientRect().top;
        var signUpCardTop = signUpCard.getBoundingClientRect().top;

        if (signInCardTop >= 0 && signInCardTop < window.innerHeight / 2) {
            document.title = 'Login';
        } else if (signUpCardTop >= 0 && signUpCardTop < window.innerHeight / 2) {
            document.title = 'Sign Up';
        }
    }
    
    document.querySelector('.signUp-button-link').addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 800,
            behavior: 'smooth'
        });
        document.title = "Sign Up";
    });

    document.querySelector('.signIn-button-link').addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        document.title = "Login";
    });

    window.addEventListener('scroll', updateTitleOnScroll);

// Function to open the pop-up
function openPopup() {
    document.getElementById("popupContainer").style.display = "block";
}

// Function to close the pop-up
function closePopup() {
    document.getElementById("popupContainer").style.display = "none";
}

function handleScroll() {
    // Get the scroll position
    var scrollPosition = window.scrollY || window.pageYOffset;

    // Fade out the first video (backgroundVideo)
    var backgroundVideo = document.getElementById('backgroundVideo');
    var maxOpacity = 1;
    var minOpacity = 0;
    var opacity = 1 - scrollPosition / 500;

    opacity = Math.min(maxOpacity, Math.max(minOpacity, opacity));
    backgroundVideo.style.opacity = opacity;

    // Gradually appear the second video (backgroundVideo2)
    var backgroundVideo2 = document.getElementById('backgroundVideo2');
    var gradualAppearElement = document.querySelector('.gradual-appear');
    var gradualAppearThreshold = 300; // Adjust this value based on when you want the gradual appear to start

    if (scrollPosition > gradualAppearThreshold) {
        var opacity2 = (scrollPosition - gradualAppearThreshold) / 200; // You can adjust the division value for the fade-in speed
        opacity2 = Math.min(maxOpacity, Math.max(minOpacity, opacity2));

        backgroundVideo2.style.opacity = opacity2;
    }

    // Show/hide the scroll-to-top button
    var scrollToTopButton = document.getElementById("scrollToTop");
    if (scrollPosition > 20) {
        scrollToTopButton.classList.add("show");
    } else {
        scrollToTopButton.classList.remove("show");
    }

    var content2 = document.getElementById('content2');
            var scrollPosition = window.scrollY;

            // Adjust this value based on when you want the fade-in effect to start
            var triggerPosition = 300;

            if (scrollPosition > triggerPosition) {
                content2.classList.add('fade-in');
            } else {
                content2.classList.remove('fade-in');
            }

  var titleForC5 = document.querySelector('.title-for-c5');
  var titleForC5Position = titleForC5.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (titleForC5Position < windowHeight / 1.5) {
    titleForC5.classList.add('appear');
  } else {
    titleForC5.classList.remove('appear');
  }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.onscroll = function () {
    handleScroll();
};



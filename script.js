window.onload = function() {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  };

// ---------------------------------typing animation---------------------------------
var typed = new Typed("#element", {
    strings: [
        "Web Developer",
        "Web Designer",
        "UI Designer",
        "Graphic Designer",
   ],
    typeSpeed: 50,
   });

// ---------------------------------certificates---------------------------------

const certificates = document.querySelectorAll(".certificates img");
    let currentIndex = 0;

    setInterval(() => {
      certificates[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % certificates.length;
      certificates[currentIndex].classList.add("active");
    }, 2000);

// ---------------------------------hire me button---------------------------------
function hireMe() {
    document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });

}

function downloadResume() {
  window.open('Images/Ujjawal Resume.pdf', '_blank');
}

function project1() {
  window.open('https://ujjawal7906.github.io/Calculator/', '_blank');
}
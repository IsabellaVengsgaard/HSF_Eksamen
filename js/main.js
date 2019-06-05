'use strict';

//menu close and open 

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

//script til menusiden mobil hvor der skal slide mere infomation ned når der klikkes
var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function () {
        this.classList.toggle('is-open');
        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            //accordion is open, we need to close it
            content.style.maxHeight = null;

        } else {
            //accordion is closed
            content.style.maxHeight = content.scrollHeight + "px";
        }


        var plusIcon = document.getElementsByClassName('plus');
        var minusIcon = document.getElementsByClassName('minus');

            if (plusIcon.style.display === "none") {
                plusIcon.style.display = "block";
                plusIcon.style.float = "right";
            } else {
                plusIcon.style.display = "none";
            }
    }
}
// headless cms

fetch("http://abigaledesign.dk/wordpress/wp-json/wp/v2/posts?_embed")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    appendPosts(json);
  });

function appendPosts(posts) {
  for (let post of posts) {
    console.log(post);
    document.querySelector("#grid-posts").innerHTML += `
    <article class = "grid-item">
      <h3>${post.title.rendered}</h3>
      <p>${post.content.rendered}</p>
    </article>
    `;
  }
}


// anmeldelser

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



















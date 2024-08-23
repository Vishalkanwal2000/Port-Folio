
//===================================Read More Buttons=========================================================================

let red = document.getElementById("btn1");

red.addEventListener("click", () => {
  if (red.innerHTML === "Read more") {
    red.innerHTML = "Read less";
    red.style.backgroundColor = '#191f36'
    red.style.color = "#fff"
  } else {
    red.innerHTML = "Read more";
    red.style.backgroundColor = '#5982f4'
    red.style.color = "#fff"
  }

});

let second = document.getElementById("btn2");

second.addEventListener("click", () => {
  if (second.innerHTML === "Read more") {
    second.innerHTML = "Read less";
    second.style.backgroundColor = '#191f36'
    second.style.color = "#fff"
  } else {
    second.innerHTML = "Read more";
    second.style.backgroundColor = '#5982f4'
    second.style.color = "#fff"
  }
});

let third = document.getElementById("btn3");


third.addEventListener("click", () => {
  if (third.innerHTML === "Read more") {
    third.innerHTML = "Read less";
    third.style.backgroundColor = '#191f36'
    third.style.color = "#fff"
  } else {
    third.innerHTML = "Read more"
    third.style.backgroundColor = '#5982f4'
    third.style.color = "#fff"
  }
});

let fourth = document.getElementById("btn4");

fourth.addEventListener('click', () => {

  if (fourth.innerHTML === "Read more") {
    fourth.innerHTML = "Read less"
    fourth.style.backgroundColor = '#191f36'
    fourth.style.color = "#fff"
  } else {
    fourth.innerHTML = "Read more"
    fourth.style.backgroundColor = '#5982f4'
    fourth.style.color = "#fff"
  }
})

let five = document.getElementById("btn5");

five.addEventListener('click', () => {

  if (five.innerHTML === "Read more") {
    five.innerHTML = "Read less";
    five.style.backgroundColor = '#191f36';
    five.style.color = "#fff";

  } else {
    five.innerHTML = "Read more";
    five.style.backgroundColor = '#5982f4'
    five.style.color = "#fff"
  }
})
let six = document.getElementById("btn6");

six.addEventListener('click', () => {

  if (six.innerHTML === "Read more") {
    six.innerHTML = "Read less";
    six.style.backgroundColor = '#191f36';
    six.style.color = "#fff";
  } else {
    six.innerHTML = "Read more";
    six.style.backgroundColor = '#5982f4'
    six.style.color = "#fff"
  }
})
let seven = document.getElementById("btn7");

seven.addEventListener('click', () => {

  if (seven.innerHTML === "Read more") {
    seven.innerHTML = "Read less"
    seven.style.backgroundColor = '#191f36'
    seven.style.color = "#fff"
  } else {
    seven.innerHTML = "Read more"
    seven.style.backgroundColor = '#5982f4'
    seven.style.color = "#fff"
  }
})



// Get the menu icon and navbar elements
let menuIcon = document.getElementById("menu-icon");
let navbar = document.getElementById("navbar");

menuIcon.onclick = function () {
  navbar.classList.toggle("active");

  if (navbar.classList.contains("active")) {
    menuIcon.className = "fa-solid fa-xmark";
  } else {
    menuIcon.className = "fa-solid fa-bars";
  }
};

//==============================Scrooll Reveal================

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content,heading", { origin: "top" });
ScrollReveal().reveal(".home-img,.skill-container,.project-box,.contact form", {
  origin: "bottom",
});

ScrollReveal().reveal(".home-content h1,.about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p,.about_content", { origin: "right" });

//============================typed js==========================================

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Web Developer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

//==========================================scroll active=========================================================

// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//   let top = window.scrollY;

//   sections.forEach((sec) => {
//     let offset = sec.offsetTop - 150; // Adjust offset to trigger the change a bit earlier
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((link) => {
//         link.classList.remove("active");
//         document
//           .querySelector("header nav a[href*=" + id + "]")
//           .classList.add("active");
//       });
//     }
//   });

//   let header = document.querySelector("header");
//   header.classList.toggle("sticky", window.scrollY > 100);
// };
 
//==================Read less===================================================



let section=document.querySelectorAll("section")
let navLink=document.querySelectorAll("header nav a")
window.onscroll=()=>{

  section.forEach(sec=>{

  let top=window.scrollY;
  let offset=sec.offsetTop-150;
  let height=sec.offsetHeight;
  let id=sec.getAttribute("id")

  if(top>offset && top<offset + height){

    navLink.forEach(links=>{

      links.classList.remove("active")

      document.querySelector('header nav a[href*='+id+']').classList.add("active");
    })
  }
    
  })
}
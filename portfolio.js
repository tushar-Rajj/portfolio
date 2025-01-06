const span=document.querySelector("span");
  
setInterval(() => {
  span.innerHTML="MERN Developer";
  span.style.color="orange";
  span.style.transform="All 8s ease";
}, 4000);

setInterval(() => {
  span.innerHTML="Frontend Developer";
  span.style.color="red";
  span.style.transform="All 8s ease";
}, 5000);

setInterval(() => {
  span.innerHTML="Backend Developer";
  span.style.color="green";
}, 6000);


const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'})


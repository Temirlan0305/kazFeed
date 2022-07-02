/*----menu burger---------------*/

const menuBurger = document.querySelector('.menu__burger');
if (menuBurger) {
	const headerMenu = document.querySelector('.header-link');
	menuBurger.addEventListener("click", function (e) {
		menuBurger.classList.toggle('_active');
		headerMenu.classList.toggle('_active');
	});
}

$(document).ready(function () {
	$('.slider').slick({
		arrows: false,
		dots: false,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 800,
		easing: 'linear',
		infinite: true,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 800,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: true,
		swipe: true,
		touchThreshold: 10,
		touchMove: true,
		waitForAnimate: false,
		centerMode: false,
		varibleWidth: true,
		rows: 1,
	});

	var slider = $(".slider");
		$(".span-two").text( slider.slick("getSlick").slideCount);
		slider.on("afterChange", function (event, slick, currentSlide) {
			$(".span-one").text(currentSlide + 1);
		});
});

const header = document.querySelector(".header");

window.addEventListener("scroll", function(e) {
	let scrollPos = window.scrollY;
	if(header){
		if(scrollPos > 0) {
			header.classList.add("active");
		} else {
			header.classList.remove("active")
		}
	}
	
});

const checkLink = document.querySelector('.check__body');
const checkForm = document.querySelector('.check__form');

function checkClick() {
	checkForm.classList.toggle('_active');
}
if(checkLink){
checkLink.addEventListener("click", function () {
	checkLink.classList.toggle('_active');
	checkClick();
});
}

let alertt = document.querySelector(".alert--fixed");
    	let alertClose = document.querySelectorAll(".alert--close")
   	for (let item of alertClose ) {
       	item.addEventListener('click', function(event) {
          alertt.classList.remove("alert--active")
          alertt.classList.remove("alert--warning")
          alertt.classList.remove("alert--error")
     })
}

if(header) {
	$(document).ready(function() {
	     $("#phone").mask("+7 (999) 999-99-99");
	});
}

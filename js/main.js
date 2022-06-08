function preloader() {
	$(() => {

		setInterval(() => {

			let p = $('.preloader');
			p.css('opacity', 0);

			setInterval(
				() => p.remove(),
				parseInt(p.css('--duration')) * 1000
			);
		}, 1000);

	});
}
preloader();

const btnPopup = document.querySelector('.popup_form_img');
const formPopup = document.querySelector('.popup_form_wrap');

const togglebtnPopup = function () {
	formPopup.classList.toggle('active');
}

btnPopup.addEventListener('click', function (e) {
	e.stopPropagation();
	togglebtnPopup();
});

const btnMenu = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');

const toggleMenu = function () {

	btnMenu.classList.toggle('active');
	menu.classList.toggle('active');
}

btnMenu.addEventListener('click', function (e) {
	e.stopPropagation();
	toggleMenu();
});

closeBtn.addEventListener('click', function (e) {
	e.stopPropagation();
	toggleMenu();
});

document.addEventListener('click', function (e) {
	const target = e.target;
	const its_menu = target == menu || menu.contains(target);
	const its_btnMenu = target == btnMenu;
	const menu_is_active = menu.classList.contains('active');

	if (!its_menu && !its_btnMenu && menu_is_active) {
		toggleMenu();
	}
});

function backToTop() {
	let button = $('.arrow-btn');

	$(window).on('scroll', () => {
		if ($(this).scrollTop() >= 50) {
			button.fadeIn();
		} else {
			button.fadeOut();
		}
	})

	button.on('click', (e) => {
		e.preventDefault();
		$('html').animate({ scrollTop: 0 }, 1000);
	})
}

backToTop();


$(function () {
	$('.content_slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		responsive: [
			{
				breakpoint: 830,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
		]
	});

	$('.attraction_slider').slick({
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 1210,
				settings: {
					arrows: false,
				}
			},
		]
	});

 	$('.reviews_card_content').slick({
		slidesToShow: 2,
		dots: true,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 1,
					focusOnSelect: true,
				}
			},
			{
				breakpoint: 1100,
				settings: {
					arrows: false,
					slidesToShow: 1,
					focusOnSelect: true,
				}
			},
		]
	});

 	$('.product_form_slider_gallery').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		variableWidth: true,
		infinite: true,
		focusOnSelect: true,
		asNavFor: '.product_form_slider',
	});

	$('.product_form_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.product_form_slider_gallery',
		centerMode: true,
		arrows: false,
		fade: true,
	});

	$('.photos_slider').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 1,
		variableWidth: true,
		arrows: true,
		dots: true,
		responsive: [
			{
				breakpoint: 1220,
				settings: {
					centerMode: true,
					arrows: false,
				}
			},
		]
	});
});

const sliderBtn = document.querySelector('.slider_btn');
const productForm = document.querySelector('.product_form');
const productCloseBtn = document.querySelector('.form_product_content_close_btn');

const toggleproductForm = function () {
	productForm.classList.toggle('active');
}

sliderBtn.addEventListener('click', function (e) {
	e.stopPropagation();
	toggleproductForm();
});

productCloseBtn.addEventListener('click', function (e) {
	e.stopPropagation();
	toggleproductForm();
});

document.addEventListener('click', function (e) {
	const target = e.target;
	const its_Form = target == productForm || productForm.contains(target);
	const its_sliderBtn = target == sliderBtn;
	const menu_is_product = productForm.classList.contains('active');

	if (!its_Form && !its_sliderBtn && menu_is_product) {
		toggleproductForm();
	}
});

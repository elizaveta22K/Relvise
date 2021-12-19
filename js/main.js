$(document).ready(function function_name(argument) {
	$('.header_burger').click(function(event) {
		$('.header_burger,.nav-menu').toggleClass('active');
	});
});

$(document).ready(function function_name(argument) {
	$('.footer_label').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});
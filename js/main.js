$(function () {
	$(window).scroll(function() {
        //Анимация второго экрана
        animateElem('.feature__title', 'animate__fadeInBottomLeft');
        animateElem('.feature__item', 'animate__bounceInUp');

        //Анимация формы
        animateElem('.contacts__title', 'animate__jackInTheBox');
        animateElem('#name', 'animate__rotateInDownLeft');
        animateElem('#email', 'animate__rotateInDownRight');
        animateElem('#phone', 'animate__rotateInUpLeft');
        animateElem('#place', 'animate__rotateInUpRight');
        animateElem('.contacts__form-btn', 'animate__bounceInUp');
	});
})

//В условиях указать куда и какую анимацию(селектор) повесить
function animateElem (elem, animation) {
    $(elem).each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass(animation);
            $(this).css('opacity', '1');
        }
    });
}
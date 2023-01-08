$(function(){

    $('.menuBurger').on('click', function(){

        $('.nav__list').slideToggle(300, function(){

            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
            }

        });

    });

});
$(function(){
    $('.signup-btn').click(function(){
        $('.signUp').removeClass('hide');
        $('.signIn').addClass('hide')
    })

    $('.close-nav').click(function(){
        $('.signUp').addClass('hide');
    })
    $('.btn-login').click(function(){
        $('.signIn').removeClass('hide');
        $('.signUp').addClass('hide');
    })

    $('.close-login').click(function(){
        $('.signIn').addClass('hide');
    })
})

$(function(){
    $('.swap-signup').click(function(){
       $('.signIn').addClass('hide');
         $('.signUp').removeClass('hide');
    })

     $('.swap-login').click(function(){
       $('.signUp').addClass('hide');
         $('.signIn').removeClass('hide');
    })
    
})
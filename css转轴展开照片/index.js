$('.wrapper .content .item').click(function(e){
    $(this).parents().find('.wrapper').addClass('active')
    $(this).addClass('active')
    $(this).find('.title').fadeOut(2500)
})
$('.wrapper .content .item .close').click(function(e){
    e.stopPropagation()
    $(this).parents().find('.wrapper').removeClass('active')
    $(this).parents().find('.item').removeClass('active')
    $(this).siblings('.title').fadeIn(1500)
})
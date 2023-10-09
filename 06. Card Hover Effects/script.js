$(function(){
    // Add a class to change card background color on mouse enter.
    $('.card').on('mouseenter',function(){
        $(this).addClass('selected').siblings().removeClass('selected')
    })
})
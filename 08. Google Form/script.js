$(function(){
    console.log('kkkkk')
    $('.input-field').focusout(function(){
        let inputValue = $(this).val();
        console.log(inputValue)
        if(inputValue == ""){
            $(this).removeClass('has-value')
        }
        else {
            $(this).addClass('has-value')
        }
    })
})
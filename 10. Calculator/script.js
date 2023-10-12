
$(function(){

    // Display numbers and symbols on calculator display-input.
    $('.btn').on('click',function(){
        let value = $(this).val();
        let inputDisplay = $('.calc-display').val();
        inputDisplay = $('.calc-display').val($('.calc-display').val() + value);  
    })

    // Clear calculator display-input value.
    $('.clear').on('click',function(){
        let emptyInputField = $('.calc-display').val();
        emptyInputField = $('.calc-display').val('')
    })
    
    // Execute mathematical operations and display it.
    $('.equal-symbol').on('click',function(){
     let currentValue = $('.calc-display').val();
     currentValue = $('.calc-display').val(eval(currentValue));
     
    })

})


  $((function(){
    $("#color-input").on('change input',function(){
        $('body').css('background-color',$(this).val())
    })
  }))
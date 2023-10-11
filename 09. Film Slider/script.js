$(function(){

    $('.right-arrow').on('click',function(){
      let currentImg = $('.active')
      let nextImg = currentImg.next();
      if(nextImg.length){
        currentImg.removeClass('active');
        nextImg.addClass('active')
      }else {
        $('.image:last-child').removeClass('active')
        $('.image:first-child').addClass('active')
      }
    })

    $('.left-arrow').on('click',function(){
        let currentImg = $('.active')
        let prevImg = currentImg.prev();

        if(prevImg.length){
            currentImg.removeClass('active')
            prevImg.addClass('active')
        }
        else {
            $('.image:first-child').removeClass('active')
            $('.image:last-child').addClass('active')
          }
    })

})
$(function(){
    $('.grid-item').each(function(){
        let itemTitle = $('.grid-item-title');

  // Add a class on mouseenter in the grid-item.

        $(this).on('mouseenter',function(){
          if($(this).data('title')){
            itemTitle.html('<span>'+ $(this).data('title') +'</span>')
            itemTitle.addClass('visible')
          }
        })
 // Change each grid-item-title position depending on mousemove.
            $('body').on('mousemove',function(e){
                itemTitle.css({
                    top :  e.clientY + 25,
                    left : e.clientX - 10,
                })  
            })

// Remove grid-item-title if it's not on the grid-item div.  

            $(this).on('mouseleave',function(){
                itemTitle.removeClass('visible')
              })

    })
})
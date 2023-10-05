

$($('body').on("mousemove", function (e) {
    let cursor = $(".cursor");

    // Add inline style attribute on the (div.cursor) that get triggered when mouse moves on the body.
    // So it's top and left change, depending on the position of the original cursor top and left.
    // -18 => To move the cursor in the middle of (div.cursor), Write the half value of (div.cursor) width and height.

    cursor.attr('style',"top:"+(e.pageY-18)+"px; left:"+(e.pageX-18)+'px;');

  })
);

function constrainIt(num) {
    if (num>1) {
        num = 1;
    } else if (num<0) {
        num = 0;
    }
    return num;
}
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop() + 77;
    var viewportBottom = viewportTop + $(window).height();
    return elementTop <= viewportTop && elementBottom > viewportBottom;
};

function makeDark(pct,dark) {
    return (pct*(dark-1))+1;
}


function getValues(num) {
    var wheight = $(window).height() - 77;
    var topPos = $("figure.full-treatment.treat-"+num)[0].getBoundingClientRect().top;
    var fig = $("figure.full-treatment.treat-"+num)[0].getBoundingClientRect().height;
    var botPos = $("figure.full-treatment.treat-"+num)[0].getBoundingClientRect().bottom;
    var scr = fig-wheight;
    var scrollRange = wheight/2;
    var scrollPercent = constrainIt((topPos*-1)/scrollRange);
    
    return [topPos,fig,botPos,scr,scrollPercent];
}



function doTreat(num) {
    var wheight = $(window).height() - 77;
    var values = getValues(num);
    var topPos = values[0];
    var fig = values[1];
    var botPos = values[2];
    var scr = values[3];
    var scrollPercent = values[4];
    var bright =.9;
    // if top of 2x deep div is at or above viewport top and div bottom is below viewport bottom, fix the photo
    if ($("figure.full-treatment.treat-"+num).isInViewport()) {
      $(".treat-"+num+" .fullphoto").css({"position":"fixed","top":"77px"});
      $(".treat-"+num+" .letter-text,.treat-"+num+" #img2").css({"opacity":scrollPercent});
      $(".treat-"+num+" #img2").css({"filter":"brightness("+makeDark(scrollPercent,bright)+")"});
    } else {
      $(".treat-"+num+" .fullphoto").css({"position":"relative"});
      if (botPos<scr) {
        $(".treat-"+num+" .fullphoto").css({"top":wheight+"px"});
      }
      if (topPos>($(window).scrollTop()+wheight)) {
          $(".treat-"+num+" .letter-text").css({"opacity":0});
      }
    }
    
}

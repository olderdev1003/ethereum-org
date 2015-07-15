$(document).ready(function() {
  $('code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  if(!localStorage.getItem("agreedUpon")){
      $('#agreement').click(function(){
        $(".hidden").removeClass("hidden");
        $('#agreement, .cannot-continue').hide();
        localStorage.setItem("agreedUpon",true);
        window.scrollBy(0,750);
      });    
  } else {
        $(".hidden").removeClass("hidden");
        $('#agreement, .cannot-continue, .short-terms').hide();
  }


});



function isElementInViewport (el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.bottom >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) 
    );
}

function onVisibilityChange (el, callback) {
    return function () {
        /*your code here*/ console.log('visibility: ' + isElementInViewport(el));
        for(var i = 0; i <= 3; i++) {
	        if (isElementInViewport($("div.main-tutorial.part" + i))) {
				$("ul#toc > li:nth-child("+(i+1)+") ul").show(400);
			} else {
				$("ul#toc > li:nth-child("+(i+1)+") ul").hide(200);
			}        	
        }
    }
}


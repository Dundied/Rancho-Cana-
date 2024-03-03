$(document).ready(function(){	

	$(window).scroll(function(){ 
	  var h = $('#home').height();
	  var y = $(window).scrollTop();
	  if( y >= (h - 50) ){
		$('.menu').removeClass('navPos1');
		$('.menu').addClass('navPos2');	
		$('.navFloat').removeClass('floatPos1');
		$('.navFloat').addClass('floatPos2');	   
	  } else {
		$('.menu').removeClass('navPos2');
		$('.menu').addClass('navPos1');	
		$('.navFloat').removeClass('floatPos2');
		$('.navFloat').addClass('floatPos1');	    
	  }
	});


	$('.mobMenu').click(function(){
	if (colapse == 0){
		$(".menu").addClass('menuOpen');
		$(".colapse").addClass('colapseOpen')				
		colapse = 1;
	}else if (colapse == 1) {
		$(".menu").removeClass('menuOpen');
		$(".colapse").removeClass('colapseOpen')
		colapse = 0;
	}else{}
								
	});
	
	/*$('.homeMobile').click(function(){	
		$(".menuMobile").fadeOut();
		colapse = 0;								
	});*/
    
}); 
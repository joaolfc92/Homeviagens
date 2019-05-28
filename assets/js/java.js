$('.slider-principal').slick({

	dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight:true,
  autoplay: true,
  autoplaySpeed: 2000


});	


function toggleMenu(){
	var menu = document.getElementById("menu");
	if(menu.style.display == "none"){
		menu.style.display = "block";
	}else{
		menu.style.display = "none";
	}
}


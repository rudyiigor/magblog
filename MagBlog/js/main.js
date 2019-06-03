 $(document).ready(function(){
	 $('.flexslider').flexslider({
	 animation: "slide",
	 controlNav: "thumbnails"
  });
  $(function(){
    $(".fashion").click(function(){ // отлавливаем нажатие на ссылку
      $('.after-fashion').css({display:'block'});
      $('.after-cinema, .after-television').css({display:'none'});
      $(".cinema_con, .television_con").css({display:'none'});
        $(".fashion_con").css({display: 'block'}); // задаем стили
    });
  });
  $(function(){
    $(".cinema").click(function(){ // отлавливаем нажатие на ссылку
      $('.after-cinema').css({display:'block'});
      $('.after-television, .after-fashion').css({display:'none'});
      $(".television_con, .fashion_con").css({display:'none'});
        $(".cinema_con").css({display: 'block'}); // задаем стили
    });
  });
  $(function(){
    $(".television").click(function(){ // отлавливаем нажатие на ссылку
      $('.after-television').css({display:'block'});
      $('.after-fashion,.after-cinema').css({display:'none'});
      $(".fashion_con, .cinema_con").css({display:'none'});
        $(".television_con").css({display: 'block'}); // задаем стили
    });
  });
 });

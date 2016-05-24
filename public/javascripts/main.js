 $(document).ready(function(){
      $('.slider').slider({full_width: true});
      $('.slider li:even>div').addClass('center-align');
      $('.slider li:odd>div').addClass('right-align');
      $('.slider').slider('start');
       $(".button-collapse").sideNav();
    });
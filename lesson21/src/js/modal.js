$(document).ready(function(){
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');
  button.on('click', function(){
    modal.addClass('modal_active');
  });
  close.on('click', function(){
    modal.removeClass('modal_active');
  });
});

$(document).ready(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('#up-button').fadeIn();
      } else {
          $('#up-button').fadeOut();
      }
      });
        
      $('#up-button').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
  });

});
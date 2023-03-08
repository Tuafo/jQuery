
$(document).ready(function () {

  $(".menu_dropdown_item").hide();
  $(".menu_dropdown").hover(function () {
    $(this).parent().children().filter('.menu_dropdown_item').toggle();
  })
  
})

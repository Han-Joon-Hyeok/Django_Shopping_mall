$(document).ready(function() {

  $(".menu-list-item").each(function(){
    $(this).hover(function() {
      $(this).find("div").stop().slideDown(300);
    }, function() {
      $(this).find("div").stop().slideUp(300);
    });
  });

  $(".search-box").hover(function() {
    $(this).find("form").stop().slideDown(300);
  }, function() {
    $(this).find("form").stop().slideUp(300);
  });

  $(".mobile-menu > button").click(function() {
    $(".mobile-menu-box").slideToggle(300);
  });

  $(".mobile-menu-list-item button").click(function() {
    $(this).next().slideToggle(300);
  });
});
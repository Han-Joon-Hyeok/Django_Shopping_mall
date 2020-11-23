$(document).ready(function() {

  // 옵션 카테고리 클릭하여 열고 닫기
	var $options = $(".option-title");
	
	console.log($options);
	
	$options.each(function() {
		$(this).click(function() {
      if ($(this).hasClass("open")) {
        $(this).removeClass("open");
        $(this).parent().find("div").css("display", "none");
      } else {
        $(this).addClass("open");
        $(this).parent().find("div").css("display", "block");
      };
		});
  });
  
  // 상품 이미지 hover => Add to cart 버튼 나타나게 하기

  var $btns = $(".add-cart");

  $btns.each(function() {
    // 이미지 hover
    $(this).parent().hover(function() {
      $(this).find("div").animate({bottom: "0"}, "300ms");
    }, function() {
      $(this).find("div").animate({bottom: "-40px"}, "fast");
    });

  });

});
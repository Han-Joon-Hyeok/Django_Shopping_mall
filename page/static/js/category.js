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

  var $cartBtns = $(".add-cart");

  $cartBtns.each(function() {
    // 이미지 hover
    $(this).parent().hover(function() {
      $(this).find(".add-cart").animate({bottom: "0"}, "300ms");
    }, function() {
      $(this).find(".add-cart").animate({bottom: "-40px"}, "fast");
    });

  });

  // 위시리스트 추가 여부 묻기

  var $wishBtns = $(".add-wishlist");

  $wishBtns.each(function() {
    $(this).click(function() {
      var cancelWish = confirm("위시리스트에 이 상품을 등록하시겠습니까?");
      if (cancelWish) {
        // 위시리스트 등록 처리
        alert("위시리스트에 등록되었습니다.");
        $(this).find("button").addClass("added");
      };
    });
  });

});
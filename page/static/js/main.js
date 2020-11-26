$(document).ready(function() {

  // Banner

  // 메인 배너
  var $banner = $(".banner").find("ul");
  var $bannerWidth;
  var $bannerHeight;
  var $bannerLength;
  var rollingId;
  var elementHeight;
  var currentImage = 1;

  // 베스트 상품 배너
  var $bestProduct = $(".best-products").find("ul");
  var $bestWidth;
  var $bestHeight;
  var $bestLength;
  var currentBestProduct = 1;

  // mouseover시 타이머 정지,
  // mouseout시 타이머 다시 실행

  $(".banner").mouseover(function() {
    clearInterval(rollingId);
  });

  $(".banner").mouseout(function() {
    rollingId = setInterval(function() { rollingStart(); }, 5000);
  });

  $(".prev").click(function() {
    $banner.animate({left: "0px"}, 1000);
    currentImage = 1;
  });

  $(".next").click(function() {
    $banner.animate({left: - $bannerWidth + "px"}, 1000);
  });

  $(".best-prev").click(function() {
    $bestProduct.animate({left: "0px"}, 1000);
    $(".best-prev").css("background-color", "#F9B61E");
    $(".best-next").css("background-color", "#fff");
    currentBestProduct = 1;
  });

  $(".best-next").click(function() {
    $bestProduct.animate({left: - $bestWidth*3 + "px"}, 1000);
    $(".best-prev").css("background-color", "#fff");
    $(".best-next").css("background-color", "#F9B61E");
    currentBestProduct = 2;
  });

  // 메인 배너 자동으로 슬라이드시키기

  rollingId = setInterval(function() { rollingStart(); }, 5000);
  
  function rollingStart() {
    if (currentImage == 1) {
      $banner.animate({left: -$bannerWidth + "px"}, 1000);
      currentImage = 2;
    }
    else {
      $banner.animate({left: "0px"}, 1000);
      currentImage = 1;
    };
  }

  // 배너 크기 변경

  elementHeight = setInterval(function() { changeHeight(); }, 10);

  function changeHeight() {
    $bannerWidth = $banner.children().outerWidth();
    $bannerHeight = $banner.children().outerHeight();
    $bannerLength = $banner.children().length;
    $banner.css("width", $bannerWidth * $bannerLength + "px");
    $banner.css("height", $bannerHeight + "px");
    $(".banner").css("height", $bannerHeight);

    $bestWidth = $bestProduct.children().outerWidth();
    $bestHeight = $bestProduct.children().outerHeight();
    $bestLength = $bestProduct.children().length;
    $bestProduct.css("width", $bestWidth * $bestLength + "px");
    $bestProduct.css("height", $bestHeight + "px");
    $(".best-products").css("height", $bestHeight);
  }

  // 중간 이미지 hover시 장바구니 버튼 나타나게 하기

  var $mdCartBtns = $(".md-add-cart");

  $mdCartBtns.each(function() {
    $(this).parent().hover(function() {
      $(this).find(".md-add-cart").fadeIn("fast");
    }, function() {
      $(this).find(".md-add-cart").fadeOut("fast");
    });
    
    // 클릭시 추가
    $(this).click(function() {
      var addCart = confirm("장바구니에 추가하시겠습니까?");
      if (addCart) {
        alert("장바구니에 추가되었습니다");
      }
    });
  });

  // 위시리스트 추가, 삭제

  var $wishBtns = $(".wish-btn");

  $wishBtns.each(function() {
    $(this).click(function() {
      console.log("실행");
      if ($(this).hasClass("added") == false) {
        var addWish = confirm("위시리스트에 이 상품을 등록하시겠습니까?");
        if (addWish) {
          // 위시리스트 등록 처리
          alert("위시리스트에 등록되었습니다.");
          $(this).addClass("added");
          console.log("추가");
        }
      } else {
        var cancelWish = confirm("위시리스트에서 이 상품을 삭제하시겠습니까?");
        if (cancelWish) {
          alert("위시리스트에서 삭제되었습니다.");
          $(this).removeClass("added");
        }
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

    // 클릭시 추가
    $(this).click(function() {
      var addCart = confirm("장바구니에 추가하시겠습니까?");
      if (addCart) {
        alert("장바구니에 추가되었습니다");
      }
    });

  });

}); 
$(document).ready(function() {

  // Banner

  var $banner = $(".banner").find("ul");
  var $bannerWidth;
  var $bannerHeight;
  var $bannerLength;
  var rollingId;
  var elementHeight;
  var currentImage = 1;
  var $bestProduct = $(".best-products").find("ul");
  var $bestWidth;
  var $bestHeight;
  var $bestLength;
  var currentBestProduct = 1;

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

}); 
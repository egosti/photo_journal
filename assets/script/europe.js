$(document).ready(function() {

  $(window).scroll(function() {
    console.log("hi");
    // var height = $(window).scrollTop();
    // // if (height == 0) {
    // //   $(".photo").hide();
    // // }
    // if (height == 100) {
    //   // $(".photo").show();
    //   alert("hi");
    // }
  });


  $(".photo").hover(function() {
    $(".pic").css("opacity", "0.6");
    $(".caption").css("display", "block");
  }, function() {
    $(".pic").css("opacity", "1");
    $(".caption").css("display", "none");
  });

})

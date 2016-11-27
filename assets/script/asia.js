$(document).ready(function() {

  $("#verona, #croatia, #fish, #gelato, #risotto, #pizza, #3, #4, #5, #6, #7, #8").hide();

  $(window).scroll(function() {
    var currScroll = $(window).scrollTop();
    console.log("current scroll: " + currScroll);
    if (currScroll < 490) {
      $("#salzburg, #prague, #1, #2").fadeIn(1000);
      $("#verona, #croatia, #3, #4").fadeOut(1000);
    }
    if (currScroll >= 490 && currScroll < 840) {
      $("#verona, #croatia, #3, #4").fadeIn(1000);
    }
    if (currScroll >= 840) {
      $("#salzburg, #prague, #1, #2").fadeOut(1000);
    }
    if (currScroll >= 1140 && currScroll < 1670) {
      $("#fish, #gelato, #5, #6").fadeIn(1000);
    }
    if (currScroll >= 1430) {
      $("#verona, #croatia, #3, #4").fadeOut(1000);
    }
    if (currScroll >= 1670) {
      $("#risotto, #pizza, #7, #8").fadeIn(1000);
    }
    if (currScroll >= 2000) {
      $("#fish, #gelato, #5, #6").fadeOut(1000);
    }
  });

  $("#salzburg, #salzburg_cap").hover(function() {
    $("#salzburg").css("opacity", "0.6");
    $("#salzburg_cap").css("display", "block");
  }, function() {
    $("#salzburg").css("opacity", "1");
    $("#salzburg_cap").css("display", "none");
  });

  $("#prague, #prague_cap").hover(function() {
    $("#prague").css("opacity", "0.6");
    $("#prague_cap").css("display", "block");
  }, function() {
    $("#prague").css("opacity", "1");
    $("#prague_cap").css("display", "none");
  });

  $("#verona, #verona_cap").hover(function() {
    $("#verona").css("opacity", "0.6");
    $("#verona_cap").css("display", "block");
  }, function() {
    $("#verona").css("opacity", "1");
    $("#verona_cap").css("display", "none");
  });

  $("#croatia, #croatia_cap").hover(function() {
    $("#croatia").css("opacity", "0.6");
    $("#croatia_cap").css("display", "block");
  }, function() {
    $("#croatia").css("opacity", "1");
    $("#croatia_cap").css("display", "none");
  });

  $("#fish, #fish_cap").hover(function() {
    $("#fish").css("opacity", "0.6");
    $("#fish_cap").css("display", "block");
  }, function() {
    $("#fish").css("opacity", "1");
    $("#fish_cap").css("display", "none");
  });

  $("#gelato, #gelato_cap").hover(function() {
    $("#gelato").css("opacity", "0.6");
    $("#gelato_cap").css("display", "block");
  }, function() {
    $("#gelato").css("opacity", "1");
    $("#gelato_cap").css("display", "none");
  });

  $("#risotto, #risotto_cap").hover(function() {
    $("#risotto").css("opacity", "0.6");
    $("#risotto_cap").css("display", "block");
  }, function() {
    $("#risotto").css("opacity", "1");
    $("#risotto_cap").css("display", "none");
  });

  $("#pizza, #pizza_cap").hover(function() {
    $("#pizza").css("opacity", "0.6");
    $("#pizza_cap").css("display", "block");
  }, function() {
    $("#pizza").css("opacity", "1");
    $("#pizza_cap").css("display", "none");
  });

})

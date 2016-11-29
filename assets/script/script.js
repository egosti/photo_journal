$(document).ready(function() {

  $("#name, #travel_journal, #usa, #europe, #asia").hide();

  $("#name").delay(500).fadeIn(1000);

  $("#travel_journal").delay(1000).fadeIn(1000);

  $("#usa").delay(1500).fadeIn(1000);

  $("#europe").delay(2000).fadeIn(1000);

  $("#asia").delay(2500).fadeIn(1000);

  $("#name").click(function() {
    if ($("#name").hasClass("eg-active") == true) {
      $("#name").removeClass("eg-active");
    }
    else {
      $("#name").addClass("eg-active");
    }
  });

})

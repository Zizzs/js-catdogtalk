$(document).ready(function() {
  $("button#dogbutton").click(function() {
    $("#doggif").fadeIn();
    $("ul#dogul").prepend("<li>Woof!</li>");
    $("ul#catul").prepend("<li>I'm a cat!</li>");
  });

  $("button#catbutton").click(function() {
    $("#kittygif").fadeIn();
    $("ul#catul").prepend("<li>Meow!</li>");
    $("ul#dogul").prepend("<li>Stfu cat!</li>");
  });
});

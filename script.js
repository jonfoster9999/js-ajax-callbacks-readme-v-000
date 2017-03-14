$(document).on('ready', function(){
  $.get("sentences.html", function(response){
    $('#sentences').html(response);
  });
});

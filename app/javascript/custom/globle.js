$(function(){

    console.log("hellsdsdo")
    function scroll_bottom() {
        console.log('bef');
        if ($('#messages').length > 0) {
            $('#messages').scrollTop($('#messages')[0].scrollHeight);
          }
      }
    scroll_bottom();


})


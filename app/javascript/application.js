// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "popper"
import "bootstrap"
import "jquery"
import "semantic-ui"
import "custom/globle"
import "channels"




$(function(){




    // function scroll_bottom() {
    //     console.log('bef');
    //     if ($('#messages').length > 0) {
    //         $('#messages').scrollTop($('#messages')[0].scrollHeight);
    //       }
    //   }
    // scroll_bottom();

   //function submit_message() {
    //    $("#message_body").on('keyDown', function(e){
    // alert('ddd')

    //    })

       $("input").keypress(function(e){  
        if (e.keyCode == 13) {
            $('button').click();
            e.target.value = "";
          };
        
    });  
  // }
  // submit_message();

    $(document).ready(function(){
        console.log('sssdddd');
        $('.ui.dropdown').dropdown();
   });

  


   $('.message .close').on('click', function() {
       console.log('sss');
    $(this).closest('.message').transition('fade');
  });
})

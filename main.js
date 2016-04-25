// media query
$(document).ready(function(){
var mq = window.matchMedia('(max-width: 700px)');
if (mq.matches) {
      // If screen size width is under 700px
      // nav animations
     $(".hamburger").click(function(){
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });

     $(".hamburger").click(function(){
        if (!$(".navigation").hasClass("active")){ 
          $(".navigation").addClass("active");
        } else{
          $(".navigation").removeClass("active");
        }  
     });
    
}
else {
    // if screen size is wider than 700px
    $(".scroll").click(function(event){
         event.preventDefault();
         
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height();
         }else{
              dest=$(this.hash).offset().top;
         }
         //go to destination
         $('html,body').animate({scrollTop:dest}, 1000,'swing');
     });

     // nav animations
     $(".hamburger").click(function(){
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });

     $(".hamburger").click(function(){
        if (!$(".navigation").hasClass("active")){ 
          $(".navigation").addClass("active");
        } else{
          $(".navigation").removeClass("active");
        }  
     });
    // Fadding in the title on page load
    var titleStart = setTimeout(titleFade, 700);
    var aboutStart = setTimeout(aboutFade, 2100);
    var arrowStart = setTimeout(arrowFade, 3500);
    function titleFade(){
      $("#title").addClass("visible");
    };
    function aboutFade(){
      $("#about").addClass("visible");
    };
    function arrowFade(){
      $(".downarrow").addClass("visible");
    };

    // Fading in portfolio section based on scroll position
    $(window).scroll(function(){
        var j = $(window).scrollTop();
        // Calculate the scroll position
        console.log(j);

        if(j>145) {
            // Once the scroll location reaches 145 start animation
            $(".portfolioSection").addClass("visible");
            // Portfolio headline

        }if(j>285){
            $(".first").addClass("visible");
            // First row of portfolio pieces

            
        }if(j>500){
          $(".second").addClass("visible");
            // second row of portfolio pieces
        
        }if(j>1250){
            // about me section becomes visible
            $(".about_me").addClass("visible");
        
        }if(j>1430){
            $(".devbutton").addClass("visible");
            setTimeout(function() {
            $(".design").addClass('visible');
            }, 1000);
            setTimeout(function() {
            $(".library").addClass('visible');
            }, 2000);
        };

     });

    // Lightbox trigger function

    $('.lightbox_trigger').click(function(e) {
    
        e.preventDefault();
        var image_href = $(this).attr('href');

        // if light box exists statement

        if ($('#lightbox').length > 0) {
            // if lightbox exists change the innerhtml to the src of the image clicked
        $('#content').html('<img src="' + image_href + '" />');
        $('#lightbox').show(1000);
        $("#wrapper").addClass('blur');

        } else { 
        // if lightbox does not exist create the lightbox html to be inserted
        var lightbox = 
        '<div id="lightbox">' +
            '<p id="lightbox_close">Click to close</p>' +
            '<div id="content">' + 
                '<img src="' + image_href +'" />' +
            '</div>' +  
        '</div>';
            
        //insert lightbox HTML into page
        $('body').append(lightbox);
        $("#wrapper").addClass('blur');
        }
        
        $("#lightbox").on('click', function() {
        $("#wrapper").removeClass('blur');
        $('#lightbox').hide(1000);
        });
    }); 




};
});
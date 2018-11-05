$(document).ready(function(){
  $('#andyIntro').hide();
  $('.navs').hide();

// Function to start the narrative trip
    $('#start').click(function(){
      $('.landingPage').animate({
          opacity:0
      }, 650, function(){
        $('#andyIntro').fadeIn({
          left:"50px"},20);

          // Start to type the intro texts
              $('#text').typeIt({
                 startDelay: 500,
                 autoStart:false,
                 speed: 50,
                 strings: ["Welcome! I'm Andy, a senior designer.",
                         "Have you ever been curious about how designers choose color for their works?",
                         "Simple as it looks like, color is a multifaceted topic that has been talked among designers, scientists, and psychologists.",
                         "Let's start a color tour right here, right now!"]
                 }).next().show(80);
        });
      });


// Function to trigger different color sections
    $('#next').click(function(){
        $('#andyIntro').animate({
          opacity:0
        }, 650, function(){
          $('.navs').fadeIn({
            left:"50px"},20);
          });
        });

// Function to theory typing
    $('#next').click(function(){
      $('#text1').typeIt({
          autoStart: false,
          startDelay: 1000,
          speed: 28,
          loop:false,
          backDelay: 200,
          strings: ["Above is a color wheel, you’ve likely seen it in a school art class, or at least are familiar with its stripped-down form: the primary colors of red, yellow, and blue.",
                    "The color wheel is all about mixing colors.",
                    "Mix the primary or base colors red, yellow, and blue, and you get the secondary colors on the color wheel: orange, green, and violet. ",
                    "Mix those with a primary color, and you get the third level of the color wheel, tertiary colors."],
     })
     .tiPause(800)
     .tiEmpty()
     .tiPause(800)
     .tiType("Color can also be identified by a hexadecimal value, or hex code, a six-digit, three-byte combination of numbers and/or letters (often preceded by #) when designing for the web.")
     .tiBreak()
     .tiPause(800)
     .tiType("The bytes represent the red, green and blue components of the color. One byte represents a number in the range 00 to FF, or 0 to 255 in decimal notation.")
     .tiBreak()
     .tiPause(800)
     .tiType("Common colors and their Hex values: White (#FFFFFF), Black (#000000), Red (#FF0000), Yellow (#FFFF00), Blue (#0000FF).")
     .tiPause(2000)
     .tiEmpty()
     .tiPause(500)
     .tiType("Let’s take a quick look at some color-related terms that will help you understand the different types of colors you might be using as you work on design projects.")
     .tiPause(500)
     .tiEmpty()
     .tiPause(500)
     .tiType("The hue is somewhat synonymous to what we refer to as colors.")
     .tiBreak()
     .tiPause(800)
     .tiType("Red, green, blue, yellow, and orange are a few examples of different hues.")
     .tiPause(500)
     .tiType(" Different hues have different wavelengths in the spectrum.")
     .tiPause(2800)
     .tiEmpty()
     .tiPause(2000)
     .tiType("The value is a measurement of the brightness of a color. The brighter a color is, the higher is its value and the more light it emits.")
     .tiBreak()
     .tiPause(500)
     .tiType("For instance, a vivid yellow is brighter than dark blue, therefore its value is higher than that of the blue.")
     .tiPause(800)
     .tiType(" A good way to see the difference in the values of colors is to look at the corresponding grey scale version.")
     .tiPause(5000)
     .tiEmpty()
     .tiPause(850)
     .tiType("The saturation can also be called a color's intensity. It is a measurement of how different from pure grey the color is.")
     .tiPause(700)
     .tiBreak()
     .tiType("Saturation is not really a matter of light and dark, but rather how pale or strong the color is.")
     .tiPause(500)
     .tiType(" The perceived saturation of a color is not constant, but it varies depending on the surroundings and what light the color is seen in.")
     .tiPause(2500)
     .tiEmpty()
     .tiPause(2200)
     .tiType("Tint and shade are terms to describe how a color varies from its original hue.")
     .tiPause(500)
     .tiType(" If white is added, the lighter version of the color is called a tint of the color.")
     .tiPause(500)
     .tiType(" On the other hand, if black is added, the darker version of the color is called a shade of the color.")
     .tiPause(3000)
     .tiEmpty()
     .tiPause(1000)
     .tiType("Isn't that interesting?")
     .tiPause(500)
     .tiBreak()
     .tiType("Next, let's learn about the Color Psychology!")



// Autoplay theory slideshow
       $('#slideshow > div:gt(0)').hide();
       setInterval(function(){
         $('#slideshow > div:first')
           .fadeOut(500)
           .next()
           .fadeIn(500)
           .end()
           .appendTo('#slideshow');
       }, 17000)
  });


  // Animation to fadeIn fadeOut the arrow button on theory section
  setInterval(function(){
    $('#next1').fadeIn(2000).delay(500).fadeOut(1000).delay(500);
  }, 500);


  $('#next1').click(function(){
      $('#theory').animate({
        opacity:0
      }, 650, function(){
       $('#h-psychology').fadeIn(1000);
       $('#next2').fadeIn(1000);
       $('#colorboxes').fadeIn(1000);
       $('#h-psychology').mouseenter(function(){
          $('#note').show();
       }).mouseleave(function(){
         $('#note').hide();
       });
        });
    });


    $('#next2').click(function(){
        $('#psychology').animate({
          opacity:0
        }, 650, function(){
         $('#h-space').fadeIn(1000);
         $('#next3').fadeIn(1000);
         $('.spaces').fadeIn(1000);
         $('#h-psychology').unbind('mouseenter mouseleave');
         $('.spacetext').fadeIn(1500);
         $('#psychology').hide();
          });
      });


      $('#next3').click(function(){
          $('#space').animate({
            opacity:0
          }, 650, function(){
           $('spaces').hide();
           $('spacetext').hide();
           $('#andyIntro').hide();
           $('.navs').hide();
           $('#andy-end').fadeIn(1000);
           $('#text-end').fadeIn(1000);
         });
     });

      $('#next3').click(function(){
          $('#text-end').typeIt({
              autoStart: true,
              startDelay: 1500,
              speed: 50,
              loop:false,
              backDelay: 200,
              strings: "Alright, that's your color tour today!"
        })
        .tiPause(600)
        .tiBreak()
        .tiType("I hope you are having fun,")
        .tiPause(400)
        .tiBreak()
        .tiType("and I'll see you next time!")
        .tiPause(800)
        .tiType(" :D")
});



// Click different colors thow their colornotes
$('.colors').click(function(){
  var idtosrc = 'img/' + this.id +'note' + '.png';
  $('#psytext').attr('src', idtosrc).show();
});



});

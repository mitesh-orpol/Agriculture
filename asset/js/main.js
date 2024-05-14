/*------------------------------------------------------------------------------*/
/* Fixed-header
/*------------------------------------------------------------------------------*/


$(window).on("scroll", function() {
  if (matchMedia('only screen and (min-width: 1200px)').matches) {
      if ($(window).scrollTop() >= 50) {
          $('.header').addClass('fixed-header');
          $('.navbar').addClass('scrolled-navbar');
      } else {
          $('.header').removeClass('fixed-header');
          $('.navbar').removeClass('scrolled-navbar');
      }
  }
});


// FAQ hide and show
$(".box").click(function(){
    $(".ans").hide();
});
$(".qa1").click(function(){
    $(".ans1").toggle();
});
$(".qa2").click(function(){
    $(".ans2").toggle();
});
$(".qa3").click(function(){
    $(".ans3").toggle();
});
$(".qa4").click(function(){
    $(".ans4").toggle();
});



// product hide and show
$(".option").click(function(){
  $(".a-product").hide();
});
$(".showall").click(function(){
  // $(".showall").css({"background": "#0B3D2C","padding": "10px 20px","text-align": "center", "color": "#fff","border-radius": "20px"});
  $(".a-product").show();
});
$(".insecticides").click(function(){
  // $(".insecticides").css({"background": "#0B3D2C","padding": "10px 20px","text-align": "center", "color": "#fff","border-radius": "20px"});
    $(".insecticides-info").show();
});
$(".herbicides").click(function(){
    $(".herbicides-info").toggle();
});
$(".pgr").click(function(){
    $(".pgr-info").toggle();
});
$(".comming").click(function(){
    $(".comming-info").toggle();
});



  








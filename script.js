
$( document ).ready(function() {
  //===============subscribe-toggle==============================
 $("#togglelink").click(function(){
      $(this).find('img').toggle();
      var srch=$(".search-wrapper").css("display");
      if(srch=="none"){
        $(".search-wrapper").css("opacity",1);
        $(".search-wrapper").css("display","block");

      }
      else{
        $(".search-wrapper").css("opacity",0);
        $(".search-wrapper").css("display","none");
      }
 });

 //===============Mobile-view NavBar==============================
 $("#nav-icon").click(function(){
      $(this).toggleClass("change");
      if(($("#mobile-nav").css("display")) != "none"){
        $("#mobile-nav").hide();   
        $("#mobile-nav").removeClass("mobile");
        $(".main-content-wrapper").show();
      }   
      else{
        $("#mobile-nav").show();
        $("#mobile-nav").addClass("mobile");
        $("#mobile-nav").css("height",screen.height);
        $(".main-content-wrapper").hide();
      }
 })
 //===============Footer-Share-Link==============================
 $("#share-button").click(function(){
      var share_disp=$(".share-dropdown").css("display");
      if(share_disp=="none"){
        $(".share-dropdown").css("display","block");
      }
      else{
        $(".share-dropdown").css("display","none");
      }
 })
 //===============Navbar/Footer Scroll Code==============================
    $('.navbar .nav-items a[href^="#"]').click(function(e){
        e.preventDefault();
        var target =this.hash;
        var $target=$(target);
        $('html,body').animate({
          'scrollTop':$target.offset().top
        },1000,'swing',function(){
          window.location.hash=target;
        })
});
$('.footer-navbar .footer-nav-1 a[href^="#"]').click(function(e){
        e.preventDefault();
        var target =this.hash;
        var $target=$(target);
        $('html,body').animate({
          'scrollTop':$target.offset().top
        },1000,'swing',function(){
          window.location.hash=target;
        })
});

//===============Freebies Section Like Code==============================
$("#like-icon-1").one('click',function(){
        $(this).find('img').toggle();
        var count=$("#like-count-1").html();
        $("#like-count-1").html(parseInt(count)+1);

      });
      $("#like-icon-2").one('click',function(){
        $(this).find('img').toggle();
        var count=$("#like-count-2").html();
        $("#like-count-2").html(parseInt(count)+1);

      });
      $("#like-icon-3").one('click',function(){
        $(this).find('img').toggle();
        var count=$("#like-count-3").html();
        $("#like-count-3").html(parseInt(count)+1);

      });
      $("#like-icon-4").one('click',function(){
        $(this).find('img').toggle();
        var count=$("#like-count-4").html();
        $("#like-count-4").html(parseInt(count)+1);

      });
});
/*==============================Carousal Slider Code============================================*/
var slideIndex = 1;
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) 
  {
      slideIndex = 1;
  }    
  if (n < 1) {
      slideIndex = slides.length;
    }
  for (i = 0; i < slides.length; i++)
  {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) 
  {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/*==============================Progress Bar============================================*/
function progressBar(val){
        var bar1=document.getElementById("bar1-90");
        var bar2=document.getElementById("bar2-95");
        var bar3=document.getElementById("bar3-80");
        var bar4=document.getElementById("bar4-90");
        bar1.value=val;
        bar2.value=val;
        bar3.value=val;
        bar4.value=val;
        val++;
        var sim=setTimeout("progressBar("+val+")",20);
        if(val==80){
          bar1.value=90;
          bar2.value=95;
          bar3.value=80;
          bar4.value=90;
          clearTimeout(sim);
        }
}
    var amountLoaded=0;
    progressBar(amountLoaded);
/*==============================Awards Counter============================================*/
function counter1(val){
      var finalval=document.getElementById("num1");
      finalval.innerHTML=val;
      val++;
      var sim=setTimeout("counter1("+val+")",80);
      if(val==24){
        finalval.innerHTML=val;
        clearTimeout(sim);
      }
}
    var initval1=0;
    counter1(initval1);

function counter2(val){
      var finalval=document.getElementById("num2");
      finalval.innerHTML=val;
      val++;
      var sim=setTimeout("counter2("+val+")",2);
      if(val==341){
        finalval.innerHTML=val;
        clearTimeout(sim);
      }
}
    var initval2=0;
    counter2(initval2);

function counter3(val){
      var finalval=document.getElementById("num3");
      finalval.innerHTML=val;
      val++;
      var sim=setTimeout("counter3("+val+")",40);
      if(val==43){
        finalval.innerHTML=val;
        clearTimeout(sim);
      }
}
    var initval3=0;
    counter3(initval3);
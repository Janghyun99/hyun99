$("document").ready(function(){
  document.getElementsByTagName("video")[0].playbackRate=0.4
  $(".indicator ul li").eq(0).addClass("on")
  $(".nav ul li").eq(0).addClass("on")
  $(".section.work .work-content .number ul li").eq(0).addClass("on")
  $(".design-content .machine .button ul li").eq(0).addClass("on")
  $(".design-content .machine .button ul li #light").eq(0).addClass("on")
  // $(".design-content .content-wrap .folder ul li").eq(0).addClass("on")
        let i = 0;
        let count = 0;
          gsap.registerPlugin(ScrollTrigger);
          gsap.timeline({
          scrollTrigger: {
          trigger: ".title-text",
          scrub: true,
          pin: true,
          start: "center center",
          end: "+=4000",
          ease: "power2"
        }
      })
  .to(".title1", 1 , {y: 0})
  .to(".title1", 1 , {y: 10, opacity:0})
  .to(".title1", 1 , {y: 150})
  // .to(".title2", 1 , {y: -5,opacity:0})
  .to(".title2", 1 , {y: -70,opacity:1})
  // .to(".title2, .logo p", 1 , {y:10,opacity:0})
  // .to(".title2, .logo p", 1 , {y: 80})
  .to(".title2", 1 , {y: -70,opacity:0})
  .to(".title3", 1 , {y: -110,opacity:1})
  .to(".title3", 1 , {y: -110,opacity:0})
          
  $(".nav ul li").click(function(){
    let i = $(this).index()
      $(".nav ul li").removeClass("on").eq(i).addClass("on")
      // alert()
  })
  $(".indicator ul li").click(function(){
    let i = $(this).index()
      $(".indicator ul li").removeClass("on").eq(i).addClass("on")
  })
  $(".section.work .work-content .number ul li").click(function(){
  let i = $(this).index()
    $(".section.work .work-content .number ul li").removeClass("on").eq(i).addClass("on")
  })
  $(".chat-bot").click(function(){
    $(".chat-bot .bot-content").toggleClass("on")
  })
  $(".message a").click(function(){
    $(".message").addClass("on")
  })
  const swiper = new Swiper(".main-slide",{
    loop: true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
      return '<span class="' + className + '">0' + (index + 1) + "</span>";
      }
    },
    slidesPerView: 1,
    effect: "fade",
    autoplay:{
      delay: 3000
    }
  })
  const design_slide = new Swiper(".design-slide",{
    loop:true,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination-1",
      clickable:true
    }
  })

  $(window).scroll(function(){
    let pos = $(window).scrollTop()
    // console.log(pos)
    if(pos < 4795){
      $(".indicator ul li").eq(0).addClass("on")
      $(".nav ul li").eq(0).addClass("on")
    }
    if(pos >= 4795){
      $(".nav ul li").eq(0).removeClass("on")
      $(".nav ul li").eq(1).addClass("on")
      $(".indicator ul li").eq(0).removeClass("on")
      $(".indicator ul li").eq(1).addClass("on")
    }else{
      $(".nav ul li").eq(1).removeClass("on")
      $(".indicator ul li").eq(1).removeClass("on")
    }
    if(pos >= 5900){
      $(".nav ul li").eq(1).removeClass("on")
      $(".indicator ul li").eq(1).removeClass("on")
      $(".nav ul li").eq(3).addClass("on")
      $(".indicator ul li").eq(2).addClass("on")
    }else{
      $(".nav ul li").eq(3).removeClass("on")
      $(".indicator ul li").eq(2).removeClass("on")
    }
    if(pos >= 7900){
      $(".nav ul li").eq(3).removeClass("on")
      $(".indicator ul li").eq(2).removeClass("on")
      $(".nav ul li").eq(4).addClass("on")
      $(".indicator ul li:nth-child(4)").addClass("on")
    }else{
      $(".nav ul li").eq(4).removeClass("on")
      $(".indicator ul li:nth-child(4)").removeClass("on")
    }
    if(pos > 4000){
      $(".nav").addClass("on")
    }else{
      $(".nav").removeClass("on")
    }
    // if(pos >= 8200){
    //   $("design-content > p").addClass("on")
    // }
  })
  $(".indicator ul li").click(function(){
    let i = $(this).index()
    console.log(i)
    $(".indicator ul li").eq(0).click(function(){
      $("html,body").stop().animate({
        scrollTop: 0
      }, 1500)
    })
    $(".indicator ul li").eq(1).click(function(){
      $("html,body").stop().animate({
        scrollTop: 5057
      }, 1500)
    })
    $(".indicator ul li").eq(2).click(function(){
      $("html,body").stop().animate({
        scrollTop: 6140
      }, 1500)
    })
    $(".indicator ul li:nth-child(3) ul li").eq(1).click(function(){
      $("html,body").stop().animate({
        scrollTop: 7300
      }, 1500)
    })
    $(".indicator ul li:nth-child(4)").click(function(){
      $("html,body").stop().animate({
        scrollTop: 8300
      }, 1500)
    })
    // $(".indicator ul li:nth-child(3) ul li").eq(0).click(function(){
    //   $("html,body").stop().animate({
    //     scrollTop: 11140
    //   }, 1500)
    // })
  })
  $(".about-btn").click(function(){
    $("html,body").stop().animate({
      scrollTop: 5057
    }, 1500)
    return false;
  })

  $(".nav ul li").click(function(){
    let i = $(this).index()
    $(".nav ul li").eq(0).click(function(){
      $("html,body").stop().animate({
        scrollTop: 0
      }, 1500)
      return false;
    })
    $(".nav ul li").eq(1).click(function(){
      $("html,body").stop().animate({
        scrollTop: 5057
      }, 1500)
      return false;
    })
    $(".nav ul li").eq(3).click(function(){
      $("html,body").stop().animate({
        scrollTop: 6140
      }, 1500)
      return false;
    })
    $(".nav ul li").eq(4).click(function(){
      $("html,body").stop().animate({
        scrollTop: 8300
      }, 1500)
      return false;
    })
  })
  $(".mobile .mobile-btn ul li").click(function(){
    let i = $(this).index();
    console.log(i)
    if(count >= 0){
      count++;
      if(count == 1){
        $("html, body").css("overflow", "hidden")
      }
      if(count == 2){
        $("html, body").css("overflow", "hidden visible")
      }
      if(count > 1){
        count = 0;
      }
    }
    $(".mobile .mobile-menu").toggleClass("on")
    $(".mobile .mobile-btn ul li").toggleClass("on")
  })
  $(".section.contact .contact-btn").click(function(){
    $(".window").addClass("on")
    $("html, body").css("overflow", "hidden")
  })
  $(".window .content-btn").click(function(){
    alert("현재 이용하실 수 없습니다.")
  })
  $(".window .content-x-btn").click(function(){
    $(".window").removeClass("on")
    $("html, body").css("overflow", "hidden visible")
  })

  $(".design-content .content-wrap .machine .button ul li").click(function(){
    let i = $(this).index()
      $(".design-content .content-wrap .machine .button ul li").removeClass("on").eq(i).addClass("on")
      $(".design-content .content-wrap .folder ul li").eq(i).toggleClass("on")
      $(".design-content .content-wrap .machine .button ul li #light").removeClass("on").eq(i).addClass("on")
      // $(".design-content .content-wrap .folder ul li").removeClass("on").eq(i).addClass("on")
      // $(".design-content .content-wrap .machine .button ul li").eq(i).toggleClass("on")
      return false;
  })

  const $list = $(".design-content .machine .button ul li")

  const $img = $(".design-content .machine .big-box img")

  let content_img = [
    "http://via.placeholder.com/400/red",
    "http://via.placeholder.com/400/w12",
    "http://via.placeholder.com/400/q64",
    "http://via.placeholder.com/400/t52",
    "http://via.placeholder.com/400/x35",
  ]

  $list.click(function(){
    let list_index = $(this).index();
    $img.attr("src", content_img[list_index])
    return false;
  })

  let slide_num = 0;
  $(".design-content .content-wrap .machine .button ul li").click(function(){
    $(".design-content .content-wrap .folder ul li").eq(slide_num).stop().animate({
      left: "50%",
      opacity: 0,
      zIndex : "2"
    })
    slide_num = $(this).index();
    // console.log(slide_num)
    // alert(slide_num)
    $(".design-content .content-wrap .folder ul li").eq(slide_num).css("left","50%").stop().animate({
      left: "-220px",
      opacity: 1,
      zIndex : "1"
    })
  })
  $(".section.about .skill > p").click(function(){
    if(count >= 0){
      count++;
      $(".section.about .skill ul li").addClass("on")
    }if(count == 1){
      $(".section.about .skill ul li").removeClass("on")
    }if(count > 1){
      count = 0;
    }
  })
})
$("document").ready(function(){

  document.getElementsByTagName("video")[0].playbackRate=0.7
  $(".indicator ul li").eq(0).addClass("on")
  $(".nav ul li").eq(0).addClass("on")
  $(".section.work .work-content .number ul li").eq(0).addClass("on")
        let i = 0;
        let count = 0;
          gsap.registerPlugin(ScrollTrigger);
          gsap.timeline({
          scrollTrigger: {
          trigger: ".title-text",
          scrub: true,
          pin: true,
          start: "center center",
          end: "+=9000",
          ease: "power2"
        }
      })
  .to(".title1", 1 , {y: 0})
  .to(".title1", 1 , {y: 10, opacity:0})
  .to(".title1", 1 , {y: 150})
  // .to(".title2", 1 , {y: -5,opacity:0})
  .to(".title2", 1 , {y: -110,opacity:1})
  // .to(".title2, .logo p", 1 , {y:10,opacity:0})
  // .to(".title2, .logo p", 1 , {y: 80})
  .to(".title2", 1 , {y: -100,opacity:0})
  .to(".title3", 1 , {y: -150,opacity:1})
  .to(".title3", 1 , {y: -100,opacity:0})
  .to(".title4", 1 , {y: -190, opacity:1})
  .to(".title4", 1 , {y: -100, opacity:0})
          
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

  $(window).scroll(function(){
    let pos = $(window).scrollTop()
    // console.log(pos)
    if(pos < 9795){
      $(".indicator ul li").eq(0).addClass("on")
      $(".nav ul li").eq(0).addClass("on")
    }
    if(pos >= 9795){
      $(".nav ul li").eq(0).removeClass("on")
      $(".nav ul li").eq(1).addClass("on")
      $(".indicator ul li").eq(0).removeClass("on")
      $(".indicator ul li").eq(1).addClass("on")
    }else{
      $(".nav ul li").eq(1).removeClass("on")
      $(".indicator ul li").eq(1).removeClass("on")
    }
    if(pos >= 10900){
      $(".nav ul li").eq(1).removeClass("on")
      $(".indicator ul li").eq(1).removeClass("on")
      $(".nav ul li").eq(3).addClass("on")
      $(".indicator ul li").eq(2).addClass("on")
    }else{
      $(".nav ul li").eq(3).removeClass("on")
      $(".indicator ul li").eq(2).removeClass("on")
    }
    if(pos >= 12000){
      $(".nav ul li").eq(3).removeClass("on")
      $(".indicator ul li").eq(2).removeClass("on")
      $(".nav ul li").eq(4).addClass("on")
      $(".indicator ul li:nth-child(4)").addClass("on")
    }else{
      $(".nav ul li").eq(4).removeClass("on")
      $(".indicator ul li:nth-child(4)").removeClass("on")
    }
  })
  $(".indicator ul li").click(function(){
    let i = $(this).index()
    console.log(i)
    $(".indicator ul li").eq(0).click(function(){
      $("html,body").stop().animate({
        scrollTop: 8890
      }, 1500)
    })
    $(".indicator ul li").eq(1).click(function(){
      $("html,body").stop().animate({
        scrollTop: 10057
      }, 1500)
    })
    $(".indicator ul li").eq(2).click(function(){
      $("html,body").stop().animate({
        scrollTop: 11140
      }, 1500)
    })
    $(".indicator ul li:nth-child(4)").click(function(){
      $("html,body").stop().animate({
        scrollTop: 12250
      }, 1500)
    })
    // $(".indicator ul li:nth-child(3) ul li").eq(0).click(function(){
    //   $("html,body").stop().animate({
    //     scrollTop: 11140
    //   }, 1500)
    // })
  })

  $(".nav ul li").click(function(){
    let i = $(this).index()
    $(".nav ul li").eq(0).click(function(){
      $("html,body").stop().animate({
        scrollTop: 8900
      }, 1500)
    })
    $(".nav ul li").eq(1).click(function(){
      $("html,body").stop().animate({
        scrollTop: 10057
      }, 1500)
    })
    $(".nav ul li").eq(3).click(function(){
      $("html,body").stop().animate({
        scrollTop: 11140
      }, 1500)
    })
    $(".nav ul li").eq(4).click(function(){
      $("html,body").stop().animate({
        scrollTop: 12250
      }, 1500)
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
  const $list = $(".design-content .content-wrap .right-content ul li")
  const $img = $(".design-content .content-wrap .left-content img")

  let content_img = [
    "http://via.placeholder.com/150/red",
    "http://via.placeholder.com/150/t12",
    "http://via.placeholder.com/150/w16",
    "http://via.placeholder.com/150/92w",
    "http://via.placeholder.com/150/u72",
  ]

  $list.click(function(){
    // 클릭할 당시 현재의 인덱스 값을 변수명에 임시로 저장한다.
    let list_index = $(this).index();

    $img.attr("src", content_img[list_index])
    return false;
  })
})
$("document").ready(function(){
  document.getElementsByTagName("video")[0].playbackRate=0.4
  $(".indicator ul li").eq(0).addClass("on")
  $(".nav ul li").eq(0).addClass("on")
  $(".section.work .work-content .number ul li").eq(0).addClass("on")
  $(".design-content .button ul li").eq(0).addClass("on")
  $(".design-content .button ul li #light").eq(0).addClass("on")
  $(".design-content .exp ul li").eq(0).addClass("on")
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
          end: "+=3000",
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
    if(pos < 3795){
      $(".indicator ul li").eq(0).addClass("on")
      $(".nav ul li").eq(0).addClass("on")
      $()
    }
    if(pos >= 3795){
      $(".nav ul li").eq(0).removeClass("on")
      $(".nav ul li").eq(1).addClass("on")
      $(".indicator ul li").eq(0).removeClass("on")
      $(".indicator ul li").eq(1).addClass("on")
    }else{
      $(".nav ul li").eq(1).removeClass("on")
      $(".indicator ul li").eq(1).removeClass("on")
    }
    if(pos >= 4900){
      $(".nav ul li").eq(1).removeClass("on")
      $(".indicator ul li").eq(1).removeClass("on")
      $(".nav ul li").eq(3).addClass("on")
      $(".indicator ul li").eq(2).addClass("on")
    }else{
      $(".nav ul li").eq(3).removeClass("on")
      $(".indicator ul li").eq(2).removeClass("on")
    }
    if(pos >= 6900){
      $(".nav ul li").eq(3).removeClass("on")
      $(".indicator ul li").eq(2).removeClass("on")
      $(".nav ul li").eq(4).addClass("on")
      $(".indicator ul li:nth-child(4)").addClass("on")
    }else{
      $(".nav ul li").eq(4).removeClass("on")
      $(".indicator ul li:nth-child(4)").removeClass("on")
    }
    if(pos > 3000){
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
        scrollTop: 4057
      }, 1500)
    })
    $(".indicator ul li").eq(2).click(function(){
      $("html,body").stop().animate({
        scrollTop: 5140
      }, 1500)
    })
    $(".indicator ul li:nth-child(3) ul li").eq(1).click(function(){
      $("html,body").stop().animate({
        scrollTop: 6300
      }, 1500)
    })
    $(".indicator ul li:nth-child(4)").click(function(){
      $("html,body").stop().animate({
        scrollTop: 7300
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
      scrollTop: 4057
    }, 5500)
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
        scrollTop: 4057
      }, 1500)
      return false;
    })
    $(".nav ul li").eq(3).click(function(){
      $("html,body").stop().animate({
        scrollTop: 5140
      }, 1500)
      return false;
    })
    $(".nav ul li").eq(4).click(function(){
      $("html,body").stop().animate({
        scrollTop: 7300
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

  $(".design-content .button ul li").click(function(){
    let i = $(this).index()
      $(".design-content .button ul li").removeClass("on").eq(i).addClass("on")
      $(".design-content .button ul li #light").removeClass("on").eq(i).addClass("on")
      $(".design-content .exp ul li").removeClass("on").eq(i).addClass("on")
      return false;
  })

  const $list = $(".design-content .button ul li");

  const $img = $(".design-content .design-item .big-box img")

  let content_img = [
    "images/event-page-1.jpg",
    "images/poster.png",
    "http://via.placeholder.com/400/t52"
  ]
  $list.click(function(){
    // 클릭할 당시 현재의 인덱스 값을 변수명에 임시로 저장한다.
    let list_index = $(this).index();

    $img.attr("src", content_img[list_index])
  })
  $(".section.about .skill > p:nth-child(1)").click(function(){
    if(count >= 0){
      count++;
    }if(count == 1){
      $(".section.about .skill ul li").addClass("on")
    }if(count ==2){
      $(".section.about .skill ul li").removeClass("on")
    }if(count > 2){
      count=0;
    }
  })

  $(".section.about .about-hobby ul li").click(function(){
    let k = $(this).index()
    $(".section.about .about-hobby .hobby-text ul li").removeClass("on").eq(k).addClass("on")
  })
  $(".detail-btn").click(function(){
    $(".detail").slideDown()
    $(".detail .detail-content").slideDown()
    return false;
  })
  $(".detail").click(function(){
    $(".detail").slideUp()
    $(".detail .detail-content").slideUp()
  })
})
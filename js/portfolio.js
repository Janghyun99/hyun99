$("document").ready(function(){
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
    .to(".title2", 1 , {y: -100,opacity:1})
    .to(".title2, .logo p", 1 , {y:10,opacity:0})
    .to(".title2, .logo p", 1 , {y: 80})
    .to(".title2", 1 , {y: -90,opacity:0})
    .to(".logo img", 1 , {y:-100})
    .to(".title3", 1 , {y: -100,opacity:1})
    .to(".title3", 1 , {y: -100,opacity:0})

    $(".menu ul li").click(function(){
      let i = $(this).index()
      $(".menu ul li").removeClass("on").eq(i).addClass("on")
    })
    $(".window-content a").click(function(){
      $(".window").fadeOut().fadeTo(10, 1)
      $(".window-content").fadeOut()
  })
  $(".nav .menu ul:nth-child(2) li").click(function(){
    $(".mobile").toggleClass("on")
    $(".nav .menu ul:nth-child(2) li").addClass("on")
    let i = $(this).index();
    console.log(i)
    if(count >= 0){
      count++;
      if(count > 1){
        count = 0;
      }
    }if(count == 0){
      $(".nav .menu ul:nth-child(2) li").removeClass("on")
    }
  })
})
// Badges
const badgeEl = document.querySelector('.badges');
const toTopEl = document.querySelector('#to-top');

// 요소에 속성 값을 미리 설정
gsap.set(toTopEl, {
  x: 100
});


// Scoll 이벤트 발생시 처리
/* 
  1) window객체는 브라우저에 출력되는 화면 자체를 의미합니다.
  2) lodash cdn 으로 검색 후 연결하여 사용
    - lodash : 
      - 데이터를 정렬/필터/색인할 수 있게 도와주는 오픈소스로 배열, 숫자, 객체, 문자열 등으로 작업할 때 번거로움을 없애고 쉽게 다룰 수 있게끔 하는 데 사용. 
      - _.(변수) 이런식으로 작성할 경우 lodash wrapper로 변수를 감싸게 되면서 해당 변수에 대한 chaining을 시작합니다.
      - _ 라는 기호를 이용해서 사용하기 때문에 명칭 또한 lodash가 된 것이죠.
      - 브라우저에서 지원하지 않는 성능이 보장되어있는 다양한 메소드를 가지고 있음.
      - 퍼포먼스 측면에서 native보다 더 나은 성능을 가짐.
      - npm이나 기타 패키지 매니저를 통해 쉽게 사용 가능.
      -.throttle(함수, 시간) <= lodash에서 제공하는 함수로 함수의 실행되는 간격을 조절할 수 있음! 스크롤이벤트 발생 처리시 많이 사용하는 함수.        
*/
window.addEventListener('scroll', _.throttle(function(){
  // console.log("scroll!");
  console.log(window.scrollY);      

  if(window.scrollY > 500){
    //배지 숨기기
    // badgeEl.style.display = "none";

    // gsap.to(요소, 지속시간, {옵션})
    gsap.to(badgeEl, .6, {opacity: 0, display: 'none'});

    // 버튼 보이기
    gsap.to(toTopEl , .2, {
      x: 0
    });
  }else{
    //배지 보이기
    // badgeEl.style.display = "block";
    gsap.to(badgeEl, .6, {opacity: 1, display: 'block'});

    // 버튼 숨기기
    gsap.to(toTopEl , .2, {
      x: 100
    });
  }

  // 포인트 : display속성에 'none', 'block'으로만 처리하면 처리 전/후 상태에 중간값이 없으므로 자연스러운 전환 효과를 줄 수 없습니다. 그래서 부드러운 전환 처리를 위해  'opacity'를 함께 처리해 줍니다! 

}, 300));    /* 300 <=  0.3s 의미로 0.3초 마다 실행됨! */


// Top Button
toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0    //  <= 'scrollTo' 옵션은 'ScrollTo' 플러그인이 연결되어 있어야 동작!
  });
});


// Mainview
const fadeEls = document.querySelectorAll('.mainview .fade-in');

fadeEls.forEach(function(fadeEl, index){
  // gsap.to(요소, 지속시간, {옵션})
  gsap.to(fadeEl, 1, {opacity: 1, delay: (index + 1) * .7});  // 0.7, 1.4, 2.1, 2.8
});


// Notice
const swiper1 = new Swiper('.notice-line .swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  autoplay: true    // 기본값은 0.5초 마다 슬라이드 됨!
});


const swiper2 = new Swiper('.promotion .swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,       // 한번에 보여줄 슬라이드 갯수
  spaceBetween: 10,       // 슬라이드 사이 여백
  centeredSlides: 'true', // 1번 슬라이드가 가운데 보이기
  loop: true,             // 슬라이드 무한 반복해서 보이기
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: 'true'
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});


const swiper3 = new Swiper('.awards .swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 5,       // 한번에 보여줄 슬라이드 갯수
  spaceBetween: 30,       // 슬라이드 사이 여백
  loop: true,             // 슬라이드 무한 반복해서 보이기
  autoplay: {
    deley: 1000,
    pauseOnMouseEnter: true     // 슬라이드에 진입시 일시정지
  },   
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


// Promotion Toggle
const promotionToggleBtn = document.querySelector('.inner .toggle-promotion');
const promotionEl = document.querySelector('.notice .promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;   // toggle 처리 :  부정연산자를 통해 지속적으로 변수의 값을 반대로 반환처리가 됩니다!

  if(isHidePromotion){
    // 숨김 처리
    promotionEl.classList.add('hide');
  }else{
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});


// Animation Img
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// GSAP Easing -  https://greensock.com/docs/v2/Easing
// function floatingObject(selector){
//   gsap.to(selector, 1, {
//     y: 20,
//     repeat: -1,
//     yoyo: true,
//     ease: Power1.easeInOuteaseInOut,
//     delay: 3
//   });
// }
// floatingObject('.floating');

function floatingObject(selector, delay, size){
  gsap.to(
    selector,           // 선택자
    random(1.5, 2.5),   // 애니메이션 동작시간
    {                   // 옵션
      y: size,
      repeat: -1,       // 무한 반복 처리
      yoyo: true,       // 이전 상태로 되돌리기
      ease: Power1.easeInOuteaseInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// ScrollMagic - 스크롤 위치 계산
const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl){
  new ScrollMagic.Scene({
    triggerElement: spyEl,  // 감시할 요소 지정
    triggerHook: .8         // 트리거가 발생되는 뷰포트 지점
  })
  .setClassToggle(spyEl ,'show')
  // .addIndicators({
    //   name: 'Scene',
    //   colorTrigger: 'green',
    //   colorStart: 'red',
    //   colorEnd: 'red'
    // })
    .addTo(new ScrollMagic.Controller());
  })
  

  
  


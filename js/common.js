  /* *****************************************   Header   ***************************************** */
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');


// Search
searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
})


/* *****************************************   Footer   ***************************************** */
// Copyright - 자동 연도 계산 처리
const thisYear = document.querySelector('.this-year');

thisYear.innerText = new Date().getFullYear();    // 올해 연도 반환
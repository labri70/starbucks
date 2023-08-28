// 1. 유튜브 API를 통해 유튜브 영상을 제어하기 위해 아래처럼 설정합니다.
/* 유의사항 :
  'onYouTubePlayerAPIReady' 함수 이름은 'Youtube IFrame Player API'에서 사용하는 이름이기 때문에 다르게 지정하면 동작하지 않습니다!
  그리고 함수는 전역(Global) 등록해야 합니다!
*/

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
// 참고) 스타벅스광고 비디오 - https://www.youtube.com/watch?v=dl1IkOkPblw  
/* 유튜브 API 참조문서 
  - https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=ko#Parameters
  - https://developers.google.com/youtube/player_parameters?hl=ko
*/

function onYouTubeIframeAPIReady() {
  // 'player' => <div id="player"></div>
  new YT.Player('player', {
    videoId: 'dl1IkOkPblw',       // 최초 재생할 유튜브 영상 ID
    playerVars: {                 // 영상을 재생하기 위한 옵션 설정
      autoplay: true,             // 자동 재생 유무
      loop: true,                 // 반복 재생 유무
      playlist: 'dl1IkOkPblw'     // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function(event){   // 영상이 준비 되었을 실행할 함수
        event.target.mute()       // 음소거   <= playerVars에서 옵션으로 제공하지않기 때문에 이벤트 발생시 함수로 처리
      }
    }
  });
}


// License: Public Domain

!function(){
  'use strict';
  
  // 天鳳のウィンドウサイズ
  var TARGET_WIDTH  = 728;
  var TARGET_HEIGHT = 620;
  
  window.addEventListener('resize', function F (e) {
    // 設定値と実測値の差を求める
    var diffWidth  = TARGET_WIDTH  - window.innerWidth;
    var diffHeight = TARGET_HEIGHT - window.innerHeight;
    
    // 再度リサイズを行う
    window.removeEventListener('resize', F, false);
    window.resizeTo(TARGET_WIDTH + diffWidth, TARGET_HEIGHT + diffHeight);
  }, false);
  
  // 一回試しにリサイズする
  window.resizeTo(TARGET_WIDTH, TARGET_HEIGHT);
}();
var music = document.getElementById('music');
var audio= document.getElementsByTagName('audio')[0];
var page1 = document.getElementById('page1');
var page2 = document.getElementById('page2');
var page3 = document.getElementById('page3');

// 当音乐播放完停止的时候，自动停止光盘旋转效果
audio.addEventListener('ended',function() {
	music.setAttribute('class','');
})
// 点击音乐图标，暂停播放
music.addEventListener('touchstart',function(event) {
	if(audio.paused) {
		audio.play();
		this.setAttribute('class','play');   //点击后动画回到初始位置了
		// this.style.animationPlayState = 'running';  //兼容性不好

	} else{
		audio.pause();
		this.setAttribute('class','');
		// this.style.animationPlayState = 'paused'; 
	}
},false);

// 点击 翻页效果
page1.addEventListener('touchstart',function(event) {
	page1.style.display="none";
	page2.style.display="block";
	page3.style.display="block";
	page3.style.top = "100%";

	setTimeout(function() {
		page2.setAttribute('class', 'page fadeOut');
		page3.setAttribute('class', 'page fadeIn');
	},5500);
},false);
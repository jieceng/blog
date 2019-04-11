$(function(){
	// 导航效果
	var navTime = 800;//导航切换的时间
	$('.nav').hover(
		function(){
			$(this).animate({
				left: 0
			},navTime);
			$('.container').animate({
				left: 200,
				transform: 'rotate(30deg)'
			},navTime);
		},
		function(){
			$(this).animate({
				left: -190
			},navTime)
			$('.container').animate({
				left: -10,
				transform: 'rotate(0deg)'
			},navTime)
		}
	)
	
	// 樱花效果
	 $('.cherry').Cherry_Blossoms({
	    is_Cherry:true,//是否生成樱花
	    image_min:10,//花瓣最小宽度和高度
	    image_max:50,//花瓣最大宽度和高度
	    time_min:10000,//花瓣最快下坠时间
	    time_max:20000,//花瓣最慢下坠时间
	    interval:500//花瓣生成时间间隔
	})
})
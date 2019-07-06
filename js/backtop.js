function WeixinTop(){
	this.init();
}
WeixinTop.prototype = {
	constructor: WeixinTop,
	init: function(){		
		this._initBackTop();
	},	
	_initBackTop: function(){
		var $backTop = this.$backTop = $('<div class="cbbfixed">'+
						'<a class="weixin cbbtn"">'+
							'<span class="weixin-icon"></span><div></div>'+
						'</a>'+
						'<a class="gotop cbbtn">'+
							'<span class="up-icon"></span>'+
						'</a>'+
					'</div>');
		$('body').append($backTop);
		
		$backTop.click(function(){
			$("html, body").animate({
				scrollTop: 0
			}, 120);
		});
		var timmer = null;
		$(window).bind("scroll",function() {
            var d = $(document).scrollTop(),
            e = $(window).height();
            0 < d ? $backTop.css("bottom", "70px") : $backTop.css("bottom", "-90px");
			clearTimeout(timmer);
			timmer = setTimeout(function() {
                clearTimeout(timmer)
            },100);
	   });
	}
}
var WeixinTop = new WeixinTop();
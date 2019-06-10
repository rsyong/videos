//var API="http://lyg.goluckin.com/index.php/api/";
var API="https://liveroom.xueerqin.net/index.php";
(function () {
    //适配移动端rem
    var newRem = function () {
        var html = document.documentElement;
        var ClientWidth = html.getBoundingClientRect().width;
        html.style.fontSize = ClientWidth / 108 + 'px';
    };
    window.addEventListener('resize', newRem, false);
    newRem();
    
    
    function flashChecker() {
	        var hasFlash = 0;         //是否安装了flash
	        var flashVersion = 0; //flash版本
	        var isIE = /*@cc_on!@*/0;      //是否IE浏览器
	        if (isIE) {
	            var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
	            if (swf) {
	                hasFlash = 1;
	                VSwf = swf.GetVariable("$version");
	                flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0]);
	            }
	        } else {
	            if (navigator.plugins && navigator.plugins.length > 0) {
	                var swf = navigator.plugins["Shockwave Flash"];
	                if (swf) {
	                    hasFlash = 1;
	                    var words = swf.description.split(" ");
	                    for (var i = 0; i < words.length; ++i) {
	                        if (isNaN(parseInt(words[i]))) continue;
	                        flashVersion = parseInt(words[i]);
	                    }
	                }
	            }
	        }
	        return {f: hasFlash, v: flashVersion};
	    }
	
	    var fls = flashChecker();
	    var s = "";
	    if (fls.f) {
	    	$(".openFlash").hide();
	    }
	    else {
	    	$(".openFlash").show();
	    }
})();
function getLocalTime(nS) {     
   return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
}
function getCookie(cname){
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
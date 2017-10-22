
/**/
function start(obj,json,fn) {
	clearInterval(obj.xxx);	
	
	obj.xxx = setInterval(function () {
		var flag = true;
		/*if(obj.alt != "blue"){
			alert(obj.alt);
		}
		*/
		for(var attr in json){	
			if (attr == "opacity" || attr == "filter"){
				var news=parseFloat(getStyle(obj,attr));	
				if(news != json[attr]){
					flag = false;	
					if(attr == "opacity"){
						var speed=(json[attr] - news)/10;
						if(speed<0&&speed>-0.01){
							obj.style[attr] = json[attr];
						}else if(Math.abs(speed) <0.005){							
							obj.style[attr] = json[attr];
						}else{
							obj.style[attr] = news+speed;				
						}	
					}
				}				
			}else{
				var news=parseInt(getStyle(obj,attr));
				if(news != json[attr]){
					flag = false;		
					var speed=(json[attr] - news)/10;
					speed=speed>0?Math.ceil(speed):Math.floor(speed);
					obj.style[attr] = news+speed+"px";
				}	
			}
		}
		if(flag){
			clearInterval(obj.xxx);
			if(fn){							
				fn();
			}
		}	
	},20);
}
	
function getStyle(obj,attr) {
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,false)[attr];
	}
}

var EventUtil = {
	addEvent:function(obj,type,fn){
		if(obj.addEventListener){
			obj.addEventListener(type,fn,false);
		}else if(obj.attachEvent){
			obj.attachEvent("on" + type,fn);
		}else{
			obj["on" + type] = fn;
		}
	},
	removeEvent:function(obj,type,fn){
		if(obj.removeEventListener){
			obj.removeEventListener(type,fn,false);
		}else if(obj.detachEvent){
			obj.detachEvent("on"+type,fn);
		}else{
			obj["on"+type] = null;
		}
	},

}
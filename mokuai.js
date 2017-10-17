		
		/**/
		function start(obj,json,fn) {
			clearInterval(obj.xxx);	
			
			obj.xxx = setInterval(function () {
				var flag = true;
				for(var attr in json){
					var news=parseInt(getStyle(obj,attr));
					if(news != json[attr]){
						flag = false;	
 					}
					var speed=(json[attr] - news)/10;
					speed=speed>0?Math.ceil(speed):Math.floor(speed);
					obj.style[attr] = news+speed+"px";
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
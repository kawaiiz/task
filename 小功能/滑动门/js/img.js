// JavaScript Document

	var box=document.getElementById('a');
	var imgs=box.getElementsByTagName('img');
	var imgwidth=imgs[0].offsetWidth;
	var exposewidth=100;
	var boxwidth=imgwidth+(imgs.length-1)*exposewidth;
	box.style.width=boxwidth +'px';
	function a(){
		for(var i=1,len=imgs.length;i<len;i++)
			{
				imgs[i].style.left=parseInt(imgwidth)+(i-1)*exposewidth+'px';
			}	
	}
	a();
	var translate=imgwidth-exposewidth;
    for(var i=0,len=imgs.length;i<len;i++)
		{
			(function(i){
				imgs[i].onmouseover=function(){
					a();
					for(var j=1;j<=i;j++){
					imgs[j].style.left=parseInt(imgs[j].style.left,10)-translate+'px';
							}
					}
				}
			)(i)
			
		}
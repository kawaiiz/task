// JavaScript Documen		

	
var a=document.getElementById("big");
	var n=0;

	function inin(obj)
	{	
		
		var b=document.getElementById("shuru").value;
	 	if(b&&!isNaN(b))
			{
				if(b>=10&&b<=100)
					{
					if(n<60)
						{
							var div=document.createElement("div");
						//	div.innerHTML=document.getElementById("shuru").value;	
							div.style.height=document.getElementById("shuru").value+"px";
							div.style.display="inline-block";
							div.style.backgroundColor="red";
							div.style.padding="0px 10px";
							div.style.marginLeft="5px";
							n++;
							if(obj.innerHTML=="右侧入")
								{
								a.appendChild(div);
								}
	 						else
								{
  								a.insertBefore(div,a.childNodes[0]);
								}
						}
					else
						{
							alert("个数超过！");
						}
					}
				else
					{
						alert("输入范围内数字！");
					}
			}
	 	else
			{
				alert("请输入数值！");
			}	
	}
	function out(obj)
	{//alert(a.appendChild.length);
	if(a.childNodes.length!=0)
		{
		if(obj.innerHTML=="右侧出")
			{
				var length=a.childNodes.length-1;
				a.removeChild(a.childNodes[length]);
			}	
		else
			{
				a.removeChild(a.childNodes[0]);
			}
		}
	else
		{
			alert("没有元素删除！");
		}
	}
	
	function sort(){
		var child=a.childNodes;
		var t;
		for(var i=child.length-1;i>0;i--)
		{
			for(var j=0;j<i;j++)
				{
					
					if(child[j].style.height>child[j+1].style.height){
						
						t=child[j].style.height;
						child[j].style.height=child[j+1].style.height;
						child[j+1].style.height=t;
						/*alert(t);*/
					}
				}
		}
	}


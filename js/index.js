let img = document.getElementsByTagName("img");
let pic = document.getElementById("pic");
let length = img.length;
//计算每2个相邻的图片的度数
let deg = 360/length;
for(let i=11;i>=0;i--)
//当页面加载完成后执行
window.onload = function(){
	//for遍历图片
	for(let i = 0;i < img.length;i++){
		//每张图片旋转deg*i的度数和translateZ 向前移动的像素
		img[i].style.transform = "rotateY("+deg*i+"deg) translateZ(450px)";
	    //过度1.5s 从0deg到旋转的度数,(length - i):从大到小开始过度
		let num = (length-i)*0.1;
		img[i].style.transition = "1s " +num+'s' ; 
	}	
}
let newX,newY,lastX,lastY,getY,getX,rotX = -20,rotY = 0;
	document.onmousedown = function(e){
		  //第一次点击就是旧位置的值
		  lastX = e.clientX;
		  lastY = e.clientY;	
		this.onmousemove = function(e){
		  //鼠标移动的最后不动的时候就是新位置的值
		  newX = e.clientX;	
		  newY = e.clientY;	
		  //新位置的值 - 旧位置的值 = 移动的差值
		  getX = newX-lastX
		  getY = newY-lastY;
		  //差值累加形成一个新的度数
		  rotX -= getY*0.2;
		  rotY += getX*0.2;
		  
		  pic.style.transform = "rotateX("+rotX+"deg) rotateY("+rotY+"deg)";
		  //当新位置的值用完时,会变成旧位置的值
		  lastX = newX;
		  lastY = newY;
		}
		this.onmouseup = function(){
			this.onmousemove=null;
		}
		
	}

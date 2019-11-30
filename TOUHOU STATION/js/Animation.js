// JavaScript Document
function startMove(obj, json, fnEnd)
{
	clearInterval(obj.timer);
	
    obj.timer = setInterval(function(){
        for(var attr in json){
            var target = json[attr];
            if(attr == "opacity")
                var cur = parseFloat(getStyle(obj, attr))*100;
            else
                var cur = parseInt(getStyle(obj, attr));

            var speed = (target - cur)/6;
			
            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

            if(cur == target){
                clearInterval(obj.timer);
                console.log(obj + "---" + attr+ " to " +target+ " is over ");
                if(fnEnd)fnEnd();
            }else{
                if(attr == "opacity"){
                    obj.style.opacity = (cur + speed)/100;
                    obj.style.filter = "alpha(opacity:"+(cur+speed)+")";
                }
                else
                    obj.style[attr] = (cur + speed) + "px";
            }
        }
    }, 30)
}
function getStyle(obj, attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj, false)[attr];
    }
}

var timer  = null;

function backTop(){
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn(){
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(oTop > 0){
			
			var speed = (document.documentElement.scrollTop-document.body.scrollTop)/13;
			
            document.body.scrollTop = document.documentElement.scrollTop = oTop - speed;
            timer = requestAnimationFrame(fn);
        }else
		{
            cancelAnimationFrame(timer);
        }    
    });
}
function show(idx){
	var intro_text = document.getElementsByClassName('content_text');		
	document.getElementsByClassName('content_text').innerHTML=text[idx];

	showDiv(idx+1);
};
function showDiv(str){
	var divs = [];
	var name = 'content' + str;	
	for(var i = 1; i <= 4; i++) {
		divs[i] = document.getElementById('content' + i);
		divs[i].style.display = "none";
	}
	document.getElementById(name).style.display = "block";               
}
function displayMenu(){
	var oDiv = document.getElementById('account_menu');
	
	var target = 80;
	
	startMove(oDiv, {top:target});
}
function hideMenu(){
	var oDiv = document.getElementById('account_menu');
	
	var target = -260;
	
	startMove(oDiv, {top:target});
}
function Switch()//实现登录注册页的互换
{
	var oDiv = document.getElementById('login_form');
	var oPW = document.getElementById('PW');
	var oCPW = document.getElementById('CPW');
	
	if(document.getElementById('title').innerHTML == '登 入')
	{
		document.getElementById('title').innerHTML = '注 册';
		document.getElementById('login_form').style.background = 'rgba(147,216,255,1.00)';
		document.getElementById('login_form').style.boxShadow = '6px 6px 15px 1px rgba(40,71,88,0.6)';
		document.getElementById('CPW').style.display = 'block';
		document.getElementById('body').style.background = 'rgba(111,181,220,1.00)';
		document.getElementById('end').style.background = 'rgba(111,181,220,1.00)';
		document.getElementById('login_background').style.background = 'url("img/login_background3.jpg")';
		document.getElementById('reg').style.background = 'url("img/失败.jpg")';
		document.getElementById('reg').style.backgroundSize = '120px 120px';
		document.getElementById('reg').style.backgroundPosition = 'center';
		document.getElementById('login_background').style.backgroundColor = 'white';
		document.getElementById('login_background').style.backgroundRepeat = 'no-repeat';
		document.getElementById('login_background').style.backgroundPosition = 'center';

		startMove(oDiv,{height:650});
		startMove(oPW,{top:-20});
		startMove(oCPW,{top:290});	
	}
	else
	{
		document.getElementById('title').innerHTML = '登 入';
		document.getElementById('login_form').style.background = 'rgba(247,170,170,1.00)';
		document.getElementById('login_form').style.boxShadow = '6px 6px 15px 1px rgba(124,50,50,0.79);';
		document.getElementById('body').style.background = 'rgba(213,68,70,1.00)';
		document.getElementById('end').style.background = 'rgba(213,68,70,1.00)';
		document.getElementById('login_background').style.background = 'url("img/login_background1.jpg")';
		document.getElementById('reg').style.background = 'url("img/增加.jpg")';
		document.getElementById('reg').style.backgroundSize = '120px 120px';
		document.getElementById('reg').style.backgroundPosition = 'center';
		document.getElementById('login_background').style.backgroundColor = 'white';
		document.getElementById('login_background').style.backgroundRepeat = 'no-repeat';
		document.getElementById('login_background').style.backgroundPosition = 'center';

		startMove(oDiv,{height:450});
		startMove(oPW,{top:0});
		startMove(oCPW,{top:210});
		
		document.getElementById('CPW').style.display = 'none';
	}
}
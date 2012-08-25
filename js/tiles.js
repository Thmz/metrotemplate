/*TILES*/
tiles = function(){ /*Insert your own tiles here*/

	tileTitleText(0,0,0,2,1,'#789600','about','What is it?','This is a framework or template to create websites based on the Windows 8 Metro UI style.','');
	tileLive(0,2,0,1,1,"#C33","","<span style='font-size:34px;'>Live tile</span>","","","","",3000,"Live tiles","Scrolling tile pages","SEO optimizations","Slideshow tiles","Admin Control panel",'noClick');
	
	/*tileTitleText(0,0,1,2,0.5,'','','<span style="font-size:24px;">Clean & Sleek</span>','<span style="font-size:13px;">content-based layout</span>','noClick greenTile');
	tileTitleText(0,0,1.5,2,0.5,'','','<span style="font-size:24px;">Easy configuration</span>','<span style="font-size:13px;">create tiles with just a single line of code</span>','noClick orangeTile');
	tileTitleText(0,1,2,2,0.5,'','','<span style="font-size:24px;">Customisable</span>','<span style="font-size:13px;">Commented & easy-to-understand coding</span>','alignRight noClick redTile');
	tileTitleText(0,1,2.5,2,0.5,'','','<span style="font-size:24px;">SEO optimized</span>','<span style="font-size:13px;">So Mr Google will find your pages</span>','alignRight noClick darkBlueTile');
	tileTitleText(0,0,2,1,1,'','','<span style="font-size:24px;">Browsers</span>','<span style="font-size:13px;">IE 7, 8 & 9 , Chrome, Firefox, Opera, Safari...</span>','noClick blueTile');
	tileTitleText(0,0,3,2,0.5,'','','<span style="font-size:24px;">The latest techniques</span>','<span style="font-size:13px;">CSS3, jQuery,... for a smooth expierence</span>','noClick lightBlueTile');
	*/
	tileSlideshow(0,0,1,1,1,'','','',3000,'img/bg/img1.png','img/bg/img2.jpg','img/bg/img3.jpg','','','noClick');
	tileTitleText(0,1,1,2,1,'#F90','features','Features','Easy content managing, automatic tile positioning, many types of tiles (slideshow, livetiles...), SEO optimized...','blueTile');

	
	/*Download */
	tileTitleTextImage(1,0,0,2,1,'#F60','',"It's free","v2.1.0  (13/08/2012)","img/icons/download_s.png",50,10,5,'');
	tileTitleText(1,0,1,1,1,'#F90',"changelog","<span style='font-size:23px;'>Changelog <br>Upgrade<br> Bugs</span>","","orangeTile");
	tileTitleText(1,0,2,1,1,'#C33',"terms of use","<span style='font-size:20px;'>Copyright <br> & <br> Terms of use</span>","","darkBlueTile");
	tileTitleText(1,1,1,1,1,'#789600',"donate","Donate","","lightBlueTile");
	
	
	/*Help*/
//	tileTitleText(3,0,0,2,1,'green','tutorial','Tutorials','Getting started, plugins, extra features...');
	tileLive(2,0,0,2,1,'#C33','tutorial','Tutorials','','','','',3000,'Getting started','Plugins','Extra features','Tricks','','orangeTile');
	tileCustom(2,1,1,1,1,"#F60",'forum/',"<img src='img/icons/textbubble.png' height='59' width='72' style='margin-left:28px;margin-top:16px;'/><div id='title' style='margin-left:20px'>Forum</div>",'darkBlueTile');
	tileImageSlider(2,2,0,1,1,"#789600","Contact","img/icons/contact.png",scale*0.7,"<span style='font-size:30px; padding-left:5px;'>Contact</span>",0.5,"lightBlueTile");
	tileCustom(2,0,1,1,1,"#F90",'Fixes',"<div id='title' style='font-size:50px; margin-top:-8px;'>Fixes</div>",'redTile');
}

/*Tile Templates */
tileTitleText = function(group,x,y,width,height,bg,linkPage,title,text,optClass){ /* Tile with only a title and description */
	tileContent += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+((y*scaleSpace)+45)+"px; margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+(width*scaleSpace-tileSpace)+"px; height:"+(height*scaleSpace-tileSpace)+"px; \
	background:"+bg+";'>\
	<div id='title'>"+title+"</div>\
	<div id='desc'>"+text+"</div>\
	</a>");
}
tileImage = function(group,x,y,bg,linkPage,img,imgSize,optClass){ /* Tile with only an image */
	tileContent += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+((y*scaleSpace)+45)+"px;margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+scale+"px; height:"+scale+"px; \
	background:"+bg+";'>\
	<img src='"+img+"' height="+imgSize+" width="+imgSize+" \
	style='margin-left: "+(scale-imgSize)*0.5+"px; margin-top: "+(scale-imgSize)*0.5+"px'/>\
	</a>");
}
tileImageAdvanced = function(group,x,y,width,height,bg,linkPage,img,imgSizeWidth,imgSizeHeight,optClass){
	drawHeight = (imgSizeWidth*scaleSpace-tileSpace)
	drawWidth = (imgSizeHeight*scaleSpace-tileSpace)
	tileContent += ("<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+((y*scaleSpace)+45)+"px ;margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+(width*scaleSpace-tileSpace)+"px; height:"+(height*scaleSpace-tileSpace)+"px; \
	background:"+bg+";'>\
	<img src='"+img+"' width="+drawWidth+" height="+drawHeight+" \
	style='margin-left: "+((scaleSpace*width-tileSpace-drawWidth)*0.5)+"px; \
	margin-top: "+((scaleSpace*height-tileSpace-drawHeight)*0.5)+"px'/></a>");
}
tileTitleTextImage = function(group,x,y,width,height,bg,linkPage,title,text,img,imgSize,imgToTop,imgToLeft,optClass){ // Tile with an image on the left side, a title, and a description, width is always 2
	tileContent += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+((y*scaleSpace)+45)+"px;margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+(width*scaleSpace-tileSpace)+"px; height:"+(height*scaleSpace-tileSpace)+"px; \
	background:"+bg+";'>\
	<img style='float:left; margin-top:"+imgToTop+"px;margin-left:"+imgToLeft+"px;' src='"+img+"' height="+imgSize+" width="+imgSize+"/> \
	<div id='title' style='margin-left:"+(imgSize+5+imgToLeft)+"px;'>"+title+"</div>\
	<div id='desc' style='margin-left:"+(imgSize+6+imgToLeft)+"px;'>"+text+"</div>\
	</a>");
}
tileLive = function(group,x,y,width,height,bg,linkPage,title,img,imgSize,imgToTop,imgToLeft,speed,text1,text2,text3,text4,text5,optClass){
	var id= "livetile_"+(group+''+x+''+y).replace(/\./g,'_')
	if(img!=''){
		imgInsert = "<img style='float:left; margin-top:"+imgToTop+"px;margin-left:"+imgToLeft+"px;' src='"+img+"' height="+imgSize+" width="+imgSize+"/>"
	}else{
		imgInsert = '';
		imgSize = 0;
		imgToLeft = 0;
	}
	tileContent += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+((y*scaleSpace)+45)+"px; margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+(width*scaleSpace-tileSpace)+"px; height:"+(height*scaleSpace-tileSpace)+"px; \
	background:"+bg+";'>\
	"+imgInsert+"\
	<div id='title' style='margin-left:"+(imgSize+5+imgToLeft)+"px;'>"+title+"</div>\
	<div class='livetile' style='margin-left:"+(imgSize+10+imgToLeft)+"px;' id='"+id+"' >"+text1+"</div>\
	</a>");
	setTimeout(function(){newLiveTile(id,group,new Array(text1,text2,text3,text4,text5),speed,0)},1500); // init this tile
}
tileImageSlider = function(group,x,y,width,height,bg,linkPage,img,imgsize, text,slideDistance,optClass){
	tileContent += ("<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+" tileImageSlider' id='"+slideDistance+" ' style=' \
	margin-top:"+((y*scaleSpace)+45)+"px;margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+(width*scaleSpace-tileSpace)+"px; height:"+(height*scaleSpace-tileSpace)+"px; \
	background:"+bg+"'>\
	<div class='tileSliderWrapper' style='position:absolute;'>\
	<div style='width: "+(width*scaleSpace-tileSpace)+"px; height:"+(height*scaleSpace-tileSpace)+"px;'>\
	<img src='"+img+"' height="+imgsize+" width="+imgsize+" style='margin-left: "+((width*scaleSpace-imgsize-tileSpace)*0.5)+"px; margin-top: "+((height*scaleSpace-imgsize-tileSpace)*0.5)+"px'/>\
	</div>\
	<div id='tileSliderText'>"+text+"</div>\
	</div>\
	</a>");
	$(document).on("mouseover",'.tileImageSlider',function(){
		$(this).find(".tileSliderWrapper").stop().animate({"margin-top":-$(this).height()*$(this).attr("id")},250,"linear");
	});
	$(document).on("mouseleave",'.tileImageSlider',function(){
		$(this).find(".tileSliderWrapper").stop().animate({'margin-top':0},300,"linear");
	});
}
tileSlideshow = function(group,x,y,width,height,bg,linkPage,title,speed,path1,path2,path3,path4,path5,optClass){
	var sid="slideshow_"+(group+''+x+''+y).replace(/\./g,'_')
	tileContent += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+((y*scaleSpace)+45)+"px; margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+(width*(scaleSpace)-tileSpace)+"px; height:"+(height*(scaleSpace)-tileSpace)+"px; \
	background:"+bg+";'>\
	<div class='tileSlideshowTitle'>"+title+"</div>\
	<img class='tileSlideshowImageBack' id='"+sid+"_back' src='"+path1+"'>\
	<img class='tileSlideshowImage' id='"+sid+"' src='"+path1+"' >\
	</a>");
	var images = [path1, path2, path3, path4, path5];
	setTimeout(function(){
		$.each(images, function (i, val) {$('<img/>').attr('src', val)})//start prechaching images;
		newSlideshow(sid,group,images,speed,1)
	},2000); // init this tile	
}
tileCustom = function(group,x,y,width,height,bg,linkPage,content,optClass){ // make your own tiles
	tileContent += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+((y*scaleSpace)+45)+"px;margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+(width*scaleSpace-tileSpace)+"px; height:"+(height*scaleSpace-tileSpace)+"px; \
	background:"+bg+";'>\
	"+content+"\
	</a>");
}
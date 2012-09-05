if(browser<11 || $.browser.opera){
	$(document).on("mouseenter",".tileFlip",function(){
		$(this).find(".flipFront, .tileLabelWrapper").stop().fadeOut(500);
	}).on("mouseleave",".tileFlip",function(){
		$(this).find(".flipFront, .tileLabelWrapper").fadeIn(500);
	})
}else{
	$(document).on("mouseenter",".tileFlip",function(){
		clearTimeout(timers["tileFlipTimer"]);
		$(this).addClass("tileFlipped");
	}).on("mouseleave",".tileFlip",function(){
		timers["tileFlipTimer"] = setTimeout(function(){$(".tileFlipped").removeClass("tileFlipped")},600);
	})
}
tileFlip = function(group,x,y,width,height,bg,linkPage,img,content,labelSettings,optClass){ // make your own tiles
	if(labelSettings!='' && labelSettings[0] != ''){
		var label=labelSettings[0];
		var labelcolor=labelSettings[1];
		var desc=labelSettings[2];
		var labelText = (label!='') ? "<div class='tileLabel bottom' style='border-bottom-color:"+labelcolor+";'>"+label+"</div>" : '';
		var labelDescText = (desc!='') ? "<div class='tileLabelDesc'>"+desc+"</div>" : '';
		var labelTotal = "<div class='tileLabelWrapper bottom'>"+labelText+" "+labelDescText+"</div>";
	}else{
		var labelTotal = '';
	}
	$page.content += (
	"<a "+makeLink(linkPage)+" class='tileFlip tile group"+group+" "+optClass+"' style=' \
	margin-top:"+((y*$tile.scalespacing)+45)+"px;margin-left:"+(x*$tile.scalespacing+group*$group.spacing)+"px; \
	width: "+(width*$tile.scalespacing-$tile.spacing)+"px; height:"+(height*$tile.scalespacing-$tile.spacing)+"px;'>\
	<div class='flipContainer' style='border:1px solid "+bg+";'>\
		<div class='flipFront'><img src='"+img+"' style='width: "+(width*$tile.scalespacing-$tile.spacing)+"px; height:"+(height*$tile.scalespacing-$tile.spacing)+"px;'></div>\
		<div class='flipBack' style='background:"+bg+";'>"+content+"</div>\
	"+labelTotal+"\
	</div>\
	</a>");
}
$(document).on("mouseenter",".tileHoverEffectRight",function(){
	$(this).children('img').stop().animate({"margin-left":-$(this).width()*0.4},400);
}).on("mouseleave",".tileHoverEffectRight",function(){
	$(this).children('img').stop().animate({"margin-left":0},400);
})
tileHoverEffectRight = function(group,x,y,width,height,bg,linkPage,image,content,labelSettings,optClass){ // make your own tiles
	if(labelSettings!='' && labelSettings[0] != ''){
		var label=labelSettings[0];
		var labelcolor=labelSettings[1];
		var labelposition=labelSettings[2];
		if(labelposition=='top'){
			var labelText ="<div class='tileLabelWrapper top' style='border-top-color:"+labelcolor+";'><div class='tileLabel top' >"+label+"</div></div>";
		}else{
			var labelText ="<div class='tileLabelWrapper bottom'><div class='tileLabel bottom' style='border-bottom-color:"+labelcolor+";'>"+label+"</div></div>";
		}
	}else{
		labelText='';
	}
	$page.content += (
	"<a "+makeLink(linkPage)+" class='tileHoverEffectRight tile group"+group+" "+optClass+"' style=' \
	margin-top:"+((y*$tile.scalespacing)+45)+"px;margin-left:"+(x*$tile.scalespacing+group*$group.spacing)+"px; \
	width: "+(width*$tile.scalespacing-$tile.spacing)+"px; height:"+(height*$tile.scalespacing-$tile.spacing)+"px; \
	background:"+bg+";'>\
	<div class='view-back'>\
	"+content+"\
	</div>\
	<img src='"+image+"'/>\
	"+labelText+"\
	</a>");
}
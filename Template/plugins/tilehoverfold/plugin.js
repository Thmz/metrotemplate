$.plugin($afterTilesAppend,{
	tileHoverEffectFold:function(){
		if(browser>9 && !$.browser.opera && !mobile){ // if notIE
		$(".tileHoverEffectFold").each( function() {
          		var $item 	= $( this ),
					img		= $item.children( 'img' ).attr( 'src' ),
					struct	= '<div class="slice s1">';
						struct	+='<div class="slice s2">';
							struct	+='<div class="slice s3">';
								struct	+='<div class="slice s4">';
								struct	+='</div>';
							struct	+='</div>';
						struct	+='</div>';
					struct	+='</div>';
					
				var $struct = $( struct );
				$item.children('img').remove().end().append( $struct ).find( 'div.slice' ).css( 'background-image', 'url(' + img + ')' ).prepend( $( '<span class="overlay" ></span>' ) );
        	});  
		}else{
			$(".tileHoverEffectFold").css("overflow","hidden");
		}
	}
});
$.plugin($onSiteLoad,{
	tileHoverEffectFold:function(){
		if(browser>9 && !$.browser.opera && !mobile){ // if notIE
			$(document).on("mouseenter",".tileHoverEffectFold",function(){
				$item = $(this)
				$item.addClass("tileHoverEffectFoldHover");
				for(i=2;i<5;i++){
					$item.find(".s"+i).addClass("s"+i+"n");
				}
			}).on("mouseleave",".tileHoverEffectFold",function(){
				$item = $(this)
				for(i=2;i<5;i++){
					$item.find(".s"+i).removeClass("s"+i+"n");
				}
				setTimeout(function(){$(".tileHoverEffectFoldHover").removeClass("tileHoverEffectFoldHover")},201);
			})
		}else{
			$(document).on("mouseenter",".tileHoverEffectFold",function(){
				$(this).children('img').stop().animate({"margin-left":-$(this).width()*0.4},500);
			}).on("mouseleave",".tileHoverEffectFold",function(){
				$(this).children('img').stop().animate({"margin-left":0},500);
			})
		}
	}
});
tileHoverEffectFold = function(group,x,y,width,height,bg,linkPage,image,content,labelSettings,optClass){ // make your own tiles
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
	"<a "+makeLink(linkPage)+" class='tileHoverEffectFold tile group"+group+" "+optClass+"' style=' \
	margin-top:"+((y*$tile.scalespacing)+45)+"px;margin-left:"+(x*$tile.scalespacing+group*$group.spacing)+"px; \
	width: "+(width*$tile.scalespacing-$tile.spacing)+"px; height:"+(height*$tile.scalespacing-$tile.spacing)+"px; \
	background:"+bg+";'>\
	<div class='view-back'>\
	"+content+"\
	</div>\
	<img src='"+image+"' />\
	"+labelText+"\
	</a>");
}

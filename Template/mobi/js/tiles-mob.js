$tile.scale = 145 // size of tiles to match the full width of the screen LEAVE IT LIKE THIS
$group.spacingMob = new Array(0,5,10); // defines the vertical space between the headers in tiles, each array index is a tilegroup, so you can specify different spaces for the different groups.
tilesMobile = function(){
	/* ADD YOUR TILES FOR MOBILE VERSION HERE!!! The best way to do this is to copy the tiles from your main function, and modify their position.
	 Tile template functions (the part below) from the normal tiles.js works on both version so should'nt be copied. (for example, you can just use tileTitleText() here, without modifications)
	 Also, the pages of your normal website will be used.  */
	
	/* READ THE TUTORIAL AT METRO-WEBDESIGN.INFO */
	tileTitleText(0,0,0,2,1,'#789600','external:http://metro-webdesign.info','Welcome','Thanks for downloading the template.<p> Please read the tutorial at <br> <strong>http://metro-webdesign.info</strong> when you start!',['','',''],'');
	tileLive(0,0,1,1,1,"#C33","","Live tile","","","","",3000,["Welcome","Be Creative","And make it yours","Change the tiles...","..the tile config is just an example"],['','',''],"noClick");

	tileFlip(0,1,1,1,1,"#F60","Typography","img/bg/img1.png","<h5 class='white'>Click here</h5>to see the typography",['Typography','#F60',''],'');
	tileTitleTextImage(0,0,2,2,1,"#F90","","Another tile","This example demonstrates the usage of the tiles. It is not suited for direct use, please adapt the tiles types, positions and colors to your style.","img/icons/box_info.png",50,5,2,['','',''],'noClick');
	
	tileImageSlider(0,0,3,2,1,'#854C8F','Terms of service','img/bg/img_300x145.jpg',1,"<h4 class='white'>Terms of Use! Must read!</h4>",0.4,['Must read','#854C8F','top'],'');

	tileLive(0,0,4,2,1,"#3B659C","Slider Example","Another live tile","img/icons/box_hint.png",50,2,5,6000,['With an image','As example'],['Click for slider page','#789600','bottom'],'');
	
	/*GROUP 2 */
	tileHoverEffectFold(1,0,0,2,1,"#F60","Images 1","img/bg/img_300x145.jpg","Some text",['','',''],'');
	tileHoverEffectLeft(1,0,2,2,1,"#F90","Images 2","img/bg/img_300x145.jpg","Another effect",['Hover me!','#3B659C','top'],'');
	tileHoverEffectRight(1,0,3,2,1,"#3B659C","","img/bg/img_300x145.jpg","Another effect",['Hover me!','#F90','bottom'],'noClick');
	
	tileImg(1,0,1,1,1,"#F60","Images 3","img/bg/img_square.jpg",1,1,['Image, hover','#789600','bottom','Some description',true],'');
	tileImg(1,1,1,1,1,"#F90","","img/bg/img_square.jpg",1,1,['Test','#F90','top','Label at top',true],'noClick');
	tileImg(1,0,4,1,1,"#C33","","img/bg/img_square.jpg",1,1,['Another','#C33','bottom','Some description',false],'noClick');
	
	/*GROUP 3 */
	/*Fadeslide and fliphorizontal are effects, other options are 'fade','flipvertical'*/
	tileSlideshow(2,0,0,2,2,"","",5000,true,"fadeslide",["img/bg/img1.png","img/bg/img2.jpg","img/bg/img3.jpg"],['Slideshow','#789600','top'],'noClick');
	tileSlideshow(2,0,2,1,1,"","",2500,false,"fliphorizontal",["img/bg/img1.png","img/bg/img2.jpg","img/bg/img3.jpg"],['','',''],'noClick');
	
	tileToMain(2,0,3,2,1,"#F90","","");
	tileCopyright(2,1,4,1,0.5,"Thomas Verelst","noClick");
}

tileToMain = function(group,x,y,width,height,bg,optClass){ // makes a tile that redirects to our main site (in case someone needs the main site)
	$page.content += (
	"<a href='index.php' class='tile group"+group+" "+optClass+"' \
	onClick='javascript:if(!confirm(\"Are you sure you want to go to the main site?\")){return false;}else{setCookie(\"desktop\",1,7);}'\
	style=' \
	margin-top:"+((y*$tile.scalespacing)+45)+"px;margin-left:"+(x*$tile.scalespacing+group*$group.spacing)+"px; \
	width: "+(width*$tile.scalespacing-$tile.spacing)+"px; height:"+(height*$tile.scalespacing-$tile.spacing)+"px; \
	background:"+bg+";'>\
	<div class='tileTitle'>Welcome to our mobile site</div>\
	<div class='tileDesc' style='margin-top:10px;'>Click here to go to our desktop site</div>\
	</a>");
}
tileCopyright = function(group,x,y,width,height,text,optClass){ // makes a tile that redirects to our main site (in case someone needs the main site)
	$page.content += (
	"<a class='tile group"+group+" "+optClass+"' \
	style=' \
	margin-top:"+((y*$tile.scalespacing)+45)+"px;margin-left:"+(x*$tile.scalespacing+group*$group.spacing)+"px; \
	width: "+(width*$tile.scalespacing-$tile.spacing)+"px; height:"+(height*$tile.scalespacing-$tile.spacing)+"px;' \>\
	<div id='copyrightTileDesc'>© "+text+"</div>\
	</a>");
}


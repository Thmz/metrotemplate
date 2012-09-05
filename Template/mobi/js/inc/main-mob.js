/* METRO UI TEMPLATE
/* Copyright 2012 Thomas Verelst, http://metro-webdesign.info*/

$show={
	prepareHomePage:function(){ /*Fade out*/
		$("#subNav,#footer").stop().fadeOut($page.hideSpeed)
		$("#content").fadeOut($page.hideSpeed,function(){
			$page.current = "home";
			$show.homePage();
		});	
	},
	homePage : function(){/*Show the homepage with tiles */
		$("#subNav,#footer").hide()
		window.scrollTo(0, 0);//to top
		if(($group.current = inArray($group.titles,$hashed.part.addSpaces())) == -1){
			$group.current = 0;
		}
		document.title = siteTitle+' | '+siteTitleHome;
		
		$("#content").html($page.content).fadeIn(300);// place our new content and be sure it will be shown
		$events.afterTilesAppend();
		$(".tile").each(function(){
			var n = Math.floor($(this).css("margin-left").replace("px","")/$group.spacing);
			var spacing = 0;
			$(this).css("margin-left","-="+n*$group.spacing).css("margin-top","+="+($group.spacingMob[n]+n*0.5)*$tile.scalespacing);
		});
		
		$(".tile").fadeIn(700,function(){
			$events.afterTilesShow();
		});
		if(createNoJS=='true'){
			setTimeout(function(){
				$.post('mobi/create-no-js.php',{data:$("#content").html()},function(r){
					if(r!="yes"){
						$("#headerWrapper").prepend("<div class='box-warning margin-t-0 margin-b-0' style='font-size:11px;'>Rebuilding NoJS-version failed: "+r);
					}
				});
			},1000);	
		}
		if(iOS){
			$.fx.off=true;
		}
	},	
	/*Will be called when NOT the homepage will be shown */
	page : function(){
		$("body").scrollTop(0);
		$content = $("div#content");
		$content.html("<img src='themes/"+theme+"/img/loader.gif' height='24' width='24'/>").fadeIn(1000);;
		var page, hashReq = $hashed.current.addSpaces()
		if((page = realArrayIndex(pageLink,hashReq)) != -1){//if the page is in the pagelink array
			url = pageLink[page];//get the url
		}else{//else not found
			url = hashReq.toLowerCase()+".php";//a try
		}
		$.ajax("pages/"+url).success(function(newContent,textStatus){
			$content.stop().fadeOut(50,function(){
				$content.html(newContent);					
				if(window.location.hash.indexOf("&show_all") == -1){
					$("div.sliderContent").hide();	   
				}else{
					$("div.sliderContent").show();
					$("img.sliderImage")
					.attr("src","img/arrows/arrowRight.png")
					.css("transform","rotate(90deg)")
		    		.css("-moz-transform","rotate(90deg)")
				   	.css("-webkit-transform","rotate(90deg)")
				   	.css("-o-transform","rotate(90deg)")
					.css("-ms-transform","rotate(90deg)")
				}
				
				$content.fadeIn(500);
				$subNav.make();
				$("#subNav,#footer").stop().fadeIn(450);
				document.title = page+" | "+siteTitle;
				$(window).resize();
				$events.afterSubPageLoad();
			});
		}).error(function(){
			page = "Page not Found";
			document.title = page+" | "+siteTitle;
			$content.html("<h2 style='margin-top:0px;'>We're sorry :(</h2>the page you're looking for is not found.").show(400);
		})	
		$(window).resize();
	}
}
/*If the window hash changes, we must call another page */
$(window).hashchange(function(){ 
	$.fx.off=false;
	hash =  window.location.hash.replace("!","").replace("#","").replace("/","");
	var hashedParts = hash.split("&"); 
	$hashed.current = hashedParts[0] //get the hash for the page
	if(hashedParts.length>1){
		$hashed.part = hashedParts[1];
	}else{
		$hashed.part = '';
	}
	if($hashed.current == '' && typeof hashedParts[1] != 'undefined' &&  $page.current != '' &&  $page.current == 'home'){ //was it just a tilegroup switching?
		var requestedGroup = inArray($group.titles,hashedParts[1].addSpaces()); // which tilegroup do you want to go?
		if(requestedGroup == $group.current){ // ohw, we are already on that tilegroup, but we'll reload it to not confuse the visitor
			$show.prepareHomePage();
		}else{
			goTileGroup(requestedGroup);
		}
	}else{		
		if($hashed.current == "home" || !$hashed.current || $hashed.current == ""){ // if user wants to go home		
			$show.prepareHomePage();
		}else{
			$("#content").fadeOut($page.hideSpeed,function(){
				$page.current = $hashed.current;
				$show.page($hashed.current);	
			});
		}
	}
	$events.onHashChange();
});

/*Everything's done, Start the layouting! */
$(document).ready(function(){
	$events.beforeSiteLoad();
	
	/*Create the tile content */ 
	$page.content='';
	tilesMobile(); // get our tiles into the content			
	
	for(i=0;i<$group.count;i++){ 
		var name = $group.titles[i];
		$page.content += "<a class='groupTitle' style='margin-top:"+($group.spacingMob[i]+i*0.5)*$tile.scalespacing+"px;'><h3>"+name+"</h3></a>"; /* Add the group title of tileGroups */
		
	}	
	if((/iphone|ipod|ipad/i.test(navigator.userAgent.toLowerCase()))){
		$("body").css("overflow-x","hidden").css("overflow-y","visible");
	}
	
	/*Load the requested page */
	$(window).hashchange();	
	
	setCookie("desktop",0);
	$events.onSiteLoad();
});

function setCookie(c_name,value,exdays){var exdate=new Date();exdate.setDate(exdate.getDate() + exdays);var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());document.cookie=c_name + "=" + c_value;}
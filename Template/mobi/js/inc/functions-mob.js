/* METRO UI TEMPLATE
/* Copyright 2012 Thomas Verelst, http://metro-webdesign.info

/* Init some handy vars */
$group.count = $group.titles.length;
$tile.scalespacing = $tile.scale+$tile.spacing;
scrolling = false; // did we just scroll?
$page.current = ''; // just init
$group.current = -1;
$hashed.parts = '';
mobile=true;

/*// disable animations on iOS because it makes the page bump UNCOMMENT THE CODE BELOW IF YOU HAVE THESE BUMP PROBLEMS*/
iOS = (/iphone|ipod|ipad/i.test(navigator.userAgent.toLowerCase()));
if(iOS){
	$.fx.off=true;
}

/*Replace spaces by hyphens. ( - ) */
String.prototype.stripSpaces = function(){ return this.replace(/\s/g,"_")}
/*Replace hyphens by spaces */
String.prototype.addSpaces = function(){ return this.replace(/_/g," ")}
/*Case insensitive array search and returns the place of that search in the array */
inArray = function(array,index){var i=array.length;while (i--){if(array[i].toLowerCase()==index.toLowerCase()){return i;}}return -1;}
/* Returns the case sensitive index after a case insensitive search */
realArrayIndex = function(array,index){for(var i in array){if(i.toLowerCase() == index.toLowerCase()){return i;}}return -1;}

/* Init the tile-pages move functions */
goTileGroup = function(n){
	scrolling = true;
	if(n<0){n=0};
    $("html, body").animate({scrollTop:n*$group.spacing+30},500,function(){
		$group.current = n;	
		document.title = siteTitle+" | "+$group.titles[n];
		scrolling = false;
	});
}

/*Fired when clicked on any link*/
$(document).on("click","a",function(){
	if(this.href==window.location.href){ // if we're already on the page the user wants to go
		$(window).hashchange(); // just refresh page
	};
});

/* Generates the subnav- menu, makes sub-Navigation items */
$subNav = {
	/* Generates the subnav- menu, makes sub-Navigation items */
	make: function(){
		var items = '';
		for(var i in menuLink){
			var l = makeLink(menuLink[i]);
			items += "<a style='background-color:"+menuColor[i]+";' id='subNavI"+menuLink[i].toLowerCase().replace("&","A9M8").stripSpaces()+"' "+l+">"+i+"</a>";
		}
		$("#subNav").html(items);
		$subNav.setCurrent();
	},
	/* highlights current sub-navigation-item */
	setCurrent: function(){
		$("#subNavI"+$hashed.current.toLowerCase().replace("&","A9M8").stripSpaces()).addClass("subNavItemActive");
	}
}

/* Used to manually select the highlighted menu */
$mainNav = {
	setCurrent: function(w){},
	set: function(w){}
}

/* To make valid links */
makeLink = function(lp){
	var t = '';
	if(lp.substr(0,9) == 'external:'){
		t="target='_blank' ";
		lp = lp.substr(9);
	}
	if(lp.substr(0,9) == 'gotolink:'){
		return t+"href='"+lp.substr(9)+"'";
	}
	if(lp==''){
		return '';
	}
	if(lp.substr(0,7) == "http://" ||
	   lp.substr(0,8) == "https://" ||
	   lp.substr(0,1) == "/" ||
	   lp.substr(0,1) == "#" ||
	   lp[lp.length-1] == "/")
	{
		return t+"href='"+lp+"'";
	}
	var page = realArrayIndex(pageLink,lp);
	return t+"href='mobile.php?p="+pageLink[page]+"' onClick=\"window.location.href='#!/"+lp.stripSpaces()+"';return false;\"";	
}
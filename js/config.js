/* METRO UI TEMPLATE
/* Copyright 2012 Thomas Verelst, http://metro-webdesign.info

/*GENERAL SETTINGS VARS */
scale = 145; //Size of tiles 
tileSpace = 10; //Space between tiles
tileGroupSpace = 700 //Space between the first elements of groups of tiles on the homepage.
tileGroupTitles = new Array('Home','Download','Help');
hideMenu = true; //hide menu when going to the tile page (after a page had been visited, for coding reasons), if you want to show always (so also in the beginning, remove the css line in main.css "display:none;" from element #nav (line 126)

hideSpeed = 400; //how fast should the content fade out when switching pages

jQuery.fx.interval=25; // Smoothness of effects, higher = less smooth & less CPU utilization. Too low can be choppy!

/*PAGES information: EVERY page on your site that must be opened with the framework must be included here, see tutorial for more information */
pageLink= new Array(); /* the index of pageLink MUST be the pagename (like it will be shown in the titlebar)*/
pageLink['About'] = 'about.php';
pageLink['Changelog'] = 'changelog.php';
pageLink['Features'] = 'features.php';
pageLink['Tutorial'] = 'tutorial.php';
pageLink['FAQ'] = 'faq.php';
pageLink['Contact'] = 'contact.php';
pageLink['Terms of Use'] = 'termsofuse.php';
pageLink['Donate'] = 'donate.php';
pageLink['Fixes'] = 'fixes.php';

/* MENU BAR Information: The index of this array is the name like it will be shown in the menu, 
the value of the array is the pageLink where it should go to, case-insensitive 
OR the absolute link, like http://google.com*/
menuLink = new Array(); 
menuLink['Home'] = "&home";
menuLink['Features'] = "&features";
menuLink['Download'] = "&download";
menuLink['Help'] =  "&help";
menuLink['Donate'] = 'Donate';
menuLink['Forum'] =  "forum/";

menuColor = new Array();
menuColor['Home'] = "#336699";
menuColor['Features'] = "#669900";
menuColor['Download'] = "#cc3333";
menuColor['Help'] =  "#FF6600";
menuColor['Donate'] = "#3399cc"
menuColor['Forum'] =  "#666699";

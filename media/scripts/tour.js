// JavaScript Document
jQuery(function($) {
var tour = new Tour();
  tour.addStep({
    element: "#header",
    placement: "bottom",
    title: "Welcome to the Shaastra Website Tour!",
    content: "This short tour will make you familiar with the website"
  });
  tour.addStep({
    element: "#icons",
    placement: "right",
    title: "Mainsite icons",
    content: "Links to the respective contents of the main site"
  });  
  tour.addStep({
    element: "#social",
    placement: "left",
    title: "Connect with Shaastra!",
    content: "Connect with Shaastra on social platforms"
  });
  tour.addStep({
    element: "#footer",
    placement: "top",
    title: "Tabs",
    content: "Click or move over the tabs" 
	      + "<br/>to view their contents"
  });
  tour.addStep({
    element: "#tab1",
    placement: "top",
    title: "Tabs",
    content: "Click to make the menu stay"+"<br/>Click again to close the menu"
  });
  
   tour.addStep({
    element: "#tab3",
    placement: "top",
    title: "Tabs",
    content: "When another tab is clicked and you move over this tab"+" the respective menu pops up"+"<br/>Move out and the clicked menu reappears"
  });
  

tour.start();
});
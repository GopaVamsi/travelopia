function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
  }
function showmore(){
  var showmoredata=document.getElementById("showmoredata");
  var showmore1=document.getElementById("showmore1")
  var showmoredata1=document.getElementById("showmoredata1")
  if(showmoredata.innerHTML.trim().length==" "){
    showmoredata.innerHTML="Stretching from the countries of the former USSR to the Atlantic islands of Iceland and Greenland, Europe is one of the planet’s most beautifully diverse regions on the planet. Explore a new culture, delve into ancient ruins, or make new friends on an action-packed adventure: our trips to Europe let you see and experience it all.<br>"
    showmoredata1.innerHTML="Start building your dream trip, with our expert local guides, and choose by destination or type of activity. Whether you want to travel to  Italy, Spain, Croatia, Portugal or Greece, each country or region has its own unique offering, and is sure to be an incredible adventure."
    showmore1.innerHTML="showless  &#8593"
  }
  else{
    showmoredata.innerHTML="";
    showmoredata1.innerHTML=""
    showmore1.innerHTML="showmore  &#8595"
  }
}
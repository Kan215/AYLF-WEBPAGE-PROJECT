document.addEventListener("DOMContentLoaded", function() {
  var menuIcon = document.getElementById("menu-icon");
  var popupFrame = document.createElement("div");
  popupFrame.className = "popup-frame";
  popupFrame.innerHTML = `
  
    <div class="close" id="framecontainer" style="margin: 0%; left=4%">
        <a href="joblist.html"><i class="fa fa-newspaper-o" aria-hidden="true">News</i></a><br></br>
        <i class="fa fa-forumbee" aria-hidden="true">forum</i><br></br>
        <i class="fa fa-calendar" aria-hidden="true">Calendar</i><br></br>
        <i class="fa fa-history" aria-hidden="true">History</i></br>
         
    </div>
  `;
  document.body.appendChild(popupFrame);

  menuIcon.addEventListener("click", function() {
    popupFrame.style.display = "block";
  });
  popupFrame.querySelector(".close").addEventListener("click", function() {
    popupFrame.style.display = "none";
  });
});
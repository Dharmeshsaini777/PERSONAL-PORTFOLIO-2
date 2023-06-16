var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    //these above two for loop is used to remove the content when we click on the icon

    event.currentTarget.classList.add("active-link") //used to display color under line when we click on the icons 

    document.getElementById(tabname).classList.add("active-tab")    //it is used to show experience nd education when we click on that

}


 //onclick event on menuicon 
 var sidemenu= document.getElementById("sidemenu");

 function openmenu(){
  sidemenu.style.right="0";
 }
 function closemenu(){
  sidemenu.style.right="-200px";
 }


 //linking contact form to google sheets
 //tjhis below code was taken from github link introduced in the video time:1:52:00
 
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyXWpFEyCmtMpQ4l4agdxT58g2NVa1EhG2030XlF02XBxgmUMY_GlCSQPwZ4-Ey1oa_nQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent succesfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })




const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector("nav");
if(menuBtn){menuBtn.addEventListener("click",()=>nav.classList.toggle("open"))}
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit",function(e){
  e.preventDefault();
  alert("धन्यवाद! आपका संदेश प्राप्त हुआ। वास्तविक ईमेल/WhatsApp सेवा जोड़ने के बाद संदेश सीधे आपकी संस्था तक भेजा जा सकता है।");
  this.reset();
});

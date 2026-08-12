const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector("#nav");
if(menuBtn){
  menuBtn.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded",open);
    menuBtn.textContent=open?"✕":"☰";
  });
}
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>{
  nav.classList.remove("open");
  menuBtn?.setAttribute("aria-expanded","false");
  if(menuBtn) menuBtn.textContent="☰";
}));

document.getElementById("year").textContent=new Date().getFullYear();

document.getElementById("contactForm")?.addEventListener("submit",(e)=>{
  e.preventDefault();
  const form=e.currentTarget;
  const name=form.querySelector("input").value.trim();
  const message=form.querySelector("textarea").value.trim();
  const text=`Hello Sath Chale Ham Foundation,%0A%0AName: ${encodeURIComponent(name)}%0AMessage: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/917011893028?text=${text}`,"_blank");
});

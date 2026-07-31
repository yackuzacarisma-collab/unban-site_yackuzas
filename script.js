// =========================
// LORD DÉMON YACKUZA
// =========================

// Loader
window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        },1000);

    },3000);

});


// Effet machine à écrire

const texte =

"Le pouvoir corrompt... Et l'obscurité consume...\nUnbanned by Lord Démon Yackuza";

let i = 0;

function machineAEcrire(){

    if(i < texte.length){

        document.getElementById("typing").innerHTML += texte.charAt(i);

        i++;

        setTimeout(machineAEcrire,55);

    }

}

machineAEcrire();


// Apparition des sections

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach((section)=>{

section.style.opacity="0";

section.style.transform="translateY(80px)";

section.style.transition="1.2s";

observer.observe(section);

});


// Halo qui suit la souris

const halo = document.createElement("div");

halo.style.position="fixed";
halo.style.width="250px";
halo.style.height="250px";
halo.style.borderRadius="50%";
halo.style.pointerEvents="none";
halo.style.background="radial-gradient(circle, rgba(255,0,0,.15), transparent 70%)";
halo.style.filter="blur(25px)";
halo.style.zIndex="1";

document.body.appendChild(halo);

document.addEventListener("mousemove",(e)=>{

halo.style.left=(e.clientX-125)+"px";

halo.style.top=(e.clientY-125)+"px";

});

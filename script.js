const navSlide=() =>{
    const burger= document.querySelector('.burger');
    const nav= document.querySelector('.nav-links');
    const navLinks= document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach(( link, index)=>{
            if(link.style.animation){
                link.style.animation='';
            }else
        {
                link.style.animation=`navLinkFade 0.5s ease forwards ${index / 5+0}s`
    console.log(index /5);
            }
        });
        // burger Aimation
        burger.classList.toggle('toggle');
    });
}

navSlide();

// document.addEventListener("DOMContentLoaded",()=>{
//     const rows=document.querySelectorAll("tr[data-href]");
//     rows.forEach(row=>{
//         row.addEventListener("click",()=>{
//             windows.location.href = row.dataset.href;
//         });
//     });
// });

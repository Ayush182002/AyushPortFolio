let sections= document.querySelectorAll('section')
let navlinks= document.querySelectorAll('header nav a')

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height= sec.offsetHeight;
        let id=sec.getAttribute('id');

        

    })
}
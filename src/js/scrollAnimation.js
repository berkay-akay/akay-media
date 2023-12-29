// Code für ScrollAnimations einbinden

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        // Falls Animation immer getriggert werden soll: 
        // else {
        //     entry.target.classList.remove('show');
        // }
    })
});

const hiddenElements = document.querySelectorAll('.hide, .hide-left, .hide-right');
hiddenElements.forEach((el) => {
    observer.observe(el)
});


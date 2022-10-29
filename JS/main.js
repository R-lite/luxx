// Reveal more navigation items on main navigation hover 

const primaryNav = document.querySelectorAll('.primary-nav');
const hiddenNav = document.querySelectorAll('.extend');

primaryNav.forEach(item => {
    item.addEventListener('mouseover', () => {
        let [,type] = item.classList;
        if ('buy' == type){
            hiddenNav[0].classList.remove('hide');
            hiddenNav[1].classList.add('hide');
            hiddenNav[1].classList.add('hide');
        }else if ('sell' == type){
            hiddenNav[1].classList.remove('hide');
            hiddenNav[0].classList.add('hide');
            hiddenNav[2].classList.add('hide');
        }
        else{
            hiddenNav[2].classList.remove('hide');
            hiddenNav[0].classList.add('hide');
            hiddenNav[1].classList.add('hide');
        }
    })
})

// primaryNav.forEach(item => {
//     item.addEventListener('mouseleave',() => {
//         setTimeout(() => {
//             let [,type] = item.classList;
//             if ('buy' == type){
//                 hiddenNav[0].classList.add('hide');
//             }else if ('sell' == type){
//                 hiddenNav[1].classList.add('hide');
//             }
//             else{
//                 hiddenNav[2].classList.add('hide');
//             }
//         }, 300);
//     })
// })

hiddenNav.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.remove('hide')
    })
})

hiddenNav.forEach(item => {
    item.addEventListener('mouseleave',() => {
        setTimeout(() => {
            item.classList.add('hide')
        }, 300);
    })
})

// Reveal more content on value cards
const eventArrow = document.querySelectorAll('.dropdown');

eventArrow.forEach(item => {
    item.addEventListener('click', ()=>{
        let getClassList = item.parentNode.classList;
        let [,expandCondition] = getClassList;
        if ('more-content' == expandCondition){
            item.parentNode.classList.remove('more-content');
            item.classList.add('rotate');
        }else{
            item.parentNode.classList.add('more-content');
            item.classList.remove('rotate');
        }
    })
})
// Bouton Choisir l'ordre de tri

// const dropdownstri = document.querySelectorAll('.tributton');

// dropdownstri.forEach(dropdown => {
//     const selecttri = dropdown.querySelector('.selecttri');
//     const carettri = dropdown.querySelector('.carettri');
//     const menutri = dropdown.querySelector('.listetri');
//     const optionstri = dropdown.querySelectorAll('.listetri li');
//     const selectedtri = dropdown.querySelector('.selectedtri');

//     selecttri.addEventListener('click', () => {
//         selecttri.classList.toggle('selecttri-clicked');
//         carettri.classList.toggle('carettri-rotate');
//         menutri.classList.toggle('listetri-open');
//     });

//     optionstri.forEach(option => {
//         option.addEventListener('click', () => {
//             selectedtri.innerText = option.innerText;
//             selecttri.classList.remove('selecttri-clicked');
//             carettri.classList.remove('carettri-rotate');
//             menutri.classList.remove('listetri-open');
//             optionstri.forEach(option => {
//                 option.classList.remove('active');
//             });
//             option.classList.add('active');
//         });
//     });

//     window.addEventListener("click", e => {
//         const size = dropdown.getBoundingClientRect();
//         if(
//             e.clientX < size.left ||
//             e.clientX > size.right ||
//             e.clientY < size.top ||
//             e.clientY > size.bottom
//         ) {
//             selecttri.classList.remove('selecttri-clicked');
//             carettri.classList.remove('carettri-rotate');
//             menutri.classList.remove('menutri-open');
//         }
//     });
// });

const scrollBtn = document.querySelector('.scroll-button1');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollBtn.classList.add('active');
    } else {
        scrollBtn.classList.remove('active');
    }
});
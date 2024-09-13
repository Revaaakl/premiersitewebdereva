// Bouton Choisir une date

const dropdowns = document.querySelectorAll('.dropdowndate');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.listedate');
    const options = dropdown.querySelectorAll('.listedate li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('listedate-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('listedate-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });

    window.addEventListener("click", e => {
        const size = dropdown.getBoundingClientRect();
        if(
            e.clientX < size.left ||
            e.clientX > size.right ||
            e.clientY < size.top ||
            e.clientY > size.bottom
        ) {
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
        }
    });
});

// Section Galerie photo

const images = [...document.querySelectorAll('.image')];

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0;

images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
})

const updateImage = (i) => {
    let path = `./Img/3Galerie/${i+1}.jpg`;
    largeImage.src = path;
    imageIndex.innerHTML = `${i+1}`;
    index = i;
}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () => {
    if(index > 0){
        updateImage(index - 1);
    }
});

rightArrow.addEventListener('click', () => {
    if(index < images.length - 1){
        updateImage(index + 1);
    }
});

document.addEventListener('keydown', function(e) {
    if(index > 0){
        if(e.key === 'ArrowLeft'){
            updateImage(index - 1);
        }
    }
});

document.addEventListener('keydown', function(e) {
    if(index < images.length - 1){
        if(e.key === 'ArrowRight'){
            updateImage(index + 1);
        }
    }
});

let startX, walk,
    sLenght = images.lenght,
    rotate = 0,
    transition = 1000;

    largeImage.addEventListener('touchstart', e => {
        startX = Math.ceil(e.touches[0].clientX);
    });

    largeImage.addEventListener('touchmove', e => {
        walk = Math.ceil(e.touches[0].clientX) - startX;
        largeImage.style.transition = `${transition*0}ms linear`;
        largeImage.style.transform = `translate(-50%,-50%) rotate(${degree + (walk/20)}deg)`;
        walkEndPos = walk;
    });

    largeImage.addEventListener('touchend', e => {
        endPos = Math.ceil(e.changedTouches[0].clientX + walk);
        largeImage.style.transition = `${transition/2}ms ease-in-out`;

        if (endPos < startX) {
            if (index < images.length - 1) {
                updateImage(index + 1);
            } 
        }

        if (endPos > startX) {
            if (index > 0) {
                updateImage(index - 1);
            } 
        }
    });
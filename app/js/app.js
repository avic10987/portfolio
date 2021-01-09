
const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header')
const dropdown = document.querySelector('.header__dropdown')

const closeHamburger = () => {
    console.log('burger closedd')

    //change header class
    header.classList.remove('open')
    
    //fade out dropdown
    dropdown.classList.remove('fade-in');
    dropdown.classList.add('fade-out');
}

const openHamburger = () => {
    //change header class
    console.log('burger opened')
    header.classList.add('open')

    //fade in dropdown
    dropdown.classList.remove('fade-out')
    dropdown.classList.add('fade-in')
}


btnHamburger.addEventListener('click', function(){
    console.log('burger clickedd');

    if(header.classList.contains('open')){
        closeHamburger();
    } else {
        openHamburger();        
    }
})



const dropdownLinks = document.querySelectorAll(".dropdownLink")

dropdownLinks.forEach((link) => { //close hamburger menu when link is clicked
    link.addEventListener('click', () => {
        closeHamburger()
    })

})

const humburger = document.querySelector('.hamburger-wrapper')
const navigation = document.querySelector('.navigation-list')
const closeButton = document.querySelector('.button-close')
const navigationLink = document.querySelectorAll('.navigation-link')

function showAdaptiveMenu() {
    navigation.classList.add('show-menu')
    document.body.style.overflowY = 'hidden'
}

function hiddenAdaptiveMenu() {
    navigation.classList.remove('show-menu')
    document.body.style.overflowY = 'scroll'
}

navigationLink.forEach(item => {
    item.addEventListener('click', hiddenAdaptiveMenu)
})

humburger.addEventListener('click', showAdaptiveMenu)
closeButton.addEventListener('click', hiddenAdaptiveMenu)
window.addEventListener('resize', hiddenAdaptiveMenu)
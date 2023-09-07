const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML =
    '<img src="img/bg.jpg" alt="" />'
    title.innerHTML = 
    'Lorem ipsum dolor'
    

    excerpt.innerHTML = 
    'Lorem ipsum dolor sit amet consectetur Quisquam, quidem'

    profile_img.innerHTML = 
    '<img src="img/profile.jpg" alt="" />';
    
    name.innerHTML = 'Jhon Deo'
    date.innerHTML = 'Oct 06, 2021'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bgs_text.forEach((bg) => bg.classList.remove('animated-bg-text'))

}

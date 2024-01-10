const btnExplore = document.querySelector('.btn-explore')
const bodyContent = document.querySelector('.body-content')
const header = document.querySelector('header')
const nav = document.querySelector('.nav-bar')
const topNav = document.querySelector('.top-links')
const footer = document.querySelector('footer')
const topLinks = document.querySelectorAll('.top-links li')
const techList = document.querySelector('.pro-list')
const bars = document.querySelector('.bars')
const containers = document.querySelectorAll('.body-content .container')
const yearFoot = document.querySelector('.foot-contain span')

const techs = ['html', 'css', 'javascript', 'jquery', 'react', 'php', 'mysql', 'firebase']

techs.forEach(tech => {
  const html = `<li>${tech}</li>`
  techList.insertAdjacentHTML('beforeend', html)
})

bars.addEventListener('click', () => {
  topNav.classList.toggle('hidden')
})
btnExplore.addEventListener('click', e => {

  bodyContent.classList.remove('hidden')
  bodyContent.scrollIntoView({behavior: 'smooth'})
  bodyContent.classList.add('body__active')
  footer.classList.remove('hidden')
})

topNav.addEventListener('click', e => {
  e.preventDefault()
  if (e.target.closest('LI')) {
    const target = e.target.closest('LI').querySelector('a')
    target.classList.add('link__active')
    const id = target.getAttribute('href')
    bodyContent.classList.remove('hidden')
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
    bodyContent.classList.add('body__active')
    bodyContent.classList.add('body__active')
    footer.classList.remove('hidden')
  }
})

const navHeight = nav.getBoundingClientRect().height

const stickyNav = (entries) => {
  const [entry] = entries
  if (!entry.isIntersecting) {
    nav.classList.add('nav-sticky')
  } else {
    nav.classList.remove('nav-sticky')
  }
}
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
})
headerObserver.observe(header)

const months =  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
const now = new Date()
const year = now.getFullYear()
const day = String(now.getDate()).padStart(2,0)
const i =now.getMonth() + 1
const month=months[i]
yearFoot.textContent += year
nav.querySelector('.date').textContent += `${day} -${month} -${year}`



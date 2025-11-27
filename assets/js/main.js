document.addEventListener('DOMContentLoaded', () => {
  console.log('main.js loaded & DOM ready')

  /*=============== SHOW MENU ===============*/
  const navMenu = document.getElementById('nav-menu')
  const navToggle = document.getElementById('nav-toggle')
  const navClose = document.getElementById('nav-close')

  // Show menu
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
    })
  }

  // Hide menu
  if (navClose && navMenu) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
    })
  }

  /*=============== REMOVE MENU MOBILE ===============*/
  const navLink = document.querySelectorAll('.nav__link')

  const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction))

  /*=============== ADD BLUR TO HEADER ===============*/
  const scrollHeader = () => {
    const header = document.getElementById('header')
    if (!header) return

    if (window.scrollY >= 50) {
      header.classList.add('scroll-header')
    } else {
      header.classList.remove('scroll-header')
    }
  }
  window.addEventListener('scroll', scrollHeader)

  /*=============== EMAIL JS (DUMMY HANDLER) ===============*/
  const contactForm = document.getElementById('contact-form')
  const contactMessage = document.getElementById('contact-message')

  const sendEmail = (e) => {
    e.preventDefault()

    if (!contactForm || !contactMessage) return

    contactMessage.textContent = 'Message sent successfully ✅'

    setTimeout(() => {
      contactMessage.textContent = ''
    }, 5000)

    contactForm.reset()
  }

  if (contactForm) {
    contactForm.addEventListener('submit', sendEmail)
  }

  /*=============== SHOW SCROLL UP ===============*/ 
  const scrollUp = () => {
    const scrollUpEl = document.getElementById('scroll-up')
    if (!scrollUpEl) return

    if (window.scrollY >= 350) {
      scrollUpEl.classList.add('show-scroll')
    } else {
      scrollUpEl.classList.remove('show-scroll')
    }
  }
  window.addEventListener('scroll', scrollUp)

  /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
  const sections = document.querySelectorAll('section[id]')
      
  const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 58
      const sectionId = current.getAttribute('id')
      const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

      if (sectionsClass) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          sectionsClass.classList.add('active-link')
        } else {
          sectionsClass.classList.remove('active-link')
        }
      }
    })
  }
  window.addEventListener('scroll', scrollActive)

  /*=============== DARK LIGHT THEME (SIMPLE VERSION) ===============*/ 
  const themeButton = document.getElementById('theme-button')
  const darkTheme = 'dark-theme'

  if (themeButton) {
    console.log('theme button found:', themeButton)

    themeButton.addEventListener('click', () => {
      document.body.classList.toggle(darkTheme)
      console.log('click theme button, body class:', document.body.className)
    })
  } else {
    console.warn('theme button NOT found')
  }

  /*=============== SCROLL REVEAL ANIMATION ===============*/
  if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
    })

    sr.reveal(`.home__data`)
    sr.reveal(`.home__image`, { delay: 600 })
    sr.reveal(`.home__social`, { delay: 600 })
    sr.reveal(`.about__image, .contact__info`)
    sr.reveal(`.about__data, .contact__form`, { origin: 'left' })
    sr.reveal(
      `.skills__content:nth-child(1), .services__card:nth-child(1), .projects__card:nth-child(1)`,
      { origin: 'right' }
    )
    sr.reveal(
      `.skills__content:nth-child(2), .services__card:nth-child(2), .projects__card:nth-child(2)`
    )
    sr.reveal(
      `.skills__content:nth-child(3), .services__card:nth-child(3), .projects__card:nth-child(3)`,
      { origin: 'left' }
    )
  }
})

document.addEventListener("DOMContentLoaded", () => {
  // Código para o menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const navLinks = document.querySelector(".nav-links")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active")
      menuToggle.classList.toggle("active")
    })
  }

  // Fechar menu ao clicar em um link
  const navItems = document.querySelectorAll(".nav-links a")
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active")
        menuToggle.classList.remove("active")
      }
    })
  })

  // Adiciona efeito de scroll suave para todos os links internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        // Calcula a posição considerando o header fixo
        const headerHeight = document.querySelector("header").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Logo depois de "DOMContentLoaded", antes de usar faqItems.forEach:
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const icon = item.querySelector(".faq-icon")

    item.querySelector(".faq-question").addEventListener("click", () => {
      // Fecha todos os outros items, se quiser efeito "acordeão" exclusivo:
      faqItems.forEach((i) => {
        if (i !== item) {
          i.classList.remove("active")
          const iIcon = i.querySelector(".faq-icon")
          if (iIcon) iIcon.textContent = "+"
        }
      })

      // Alterna o estado do item atual
      item.classList.toggle("active")

      // Ajusta o ícone + ou -
      if (item.classList.contains("active")) {
        icon.textContent = "-"
      } else {
        icon.textContent = "+"
      }
    })
  })

  // Adiciona animação aos elementos quando eles entram na viewport
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".problem-text-item, .method-image, .benefits_img_container, .product-image-container, .about-text",
    )

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  // Inicializa os elementos como invisíveis se não estiverem na classe problem-text-item
  document
    .querySelectorAll(".method-image, .benefits_img_container, .product-image-container, .about-text")
    .forEach((element) => {
      if (!element.classList.contains("problem-text-item")) {
        element.style.opacity = "0"
        element.style.transform = "translateY(20px)"
        element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
      }
    })

  // Executa a função quando a página carrega e quando o usuário rola
  window.addEventListener("load", animateOnScroll)
  window.addEventListener("scroll", animateOnScroll)

  // Adiciona efeito de header reduzido ao rolar
  const header = document.querySelector("header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.padding = "10px 30px"
    } else {
      header.style.padding = "20px 30px"
    }
  })
})
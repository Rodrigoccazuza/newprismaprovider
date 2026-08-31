const aboutImageStyle = document.createElement('style')
aboutImageStyle.id = 'about-image-gradient-tweaks'
aboutImageStyle.textContent = `
  /* Desktop: stronger diagonal fade from bottom-left toward top-right */
  .about-statement__image:after {
    background:
      linear-gradient(34deg, rgba(3,4,5,.98) 0%, rgba(3,4,5,.92) 24%, rgba(3,4,5,.68) 46%, rgba(3,4,5,.26) 70%, rgba(3,4,5,.04) 100%) !important;
  }

  @media (max-width: 720px) {
    /* Mobile: move the image upward and strengthen the bottom-to-top fade */
    .about-statement img {
      transform: translateY(-20%);
      height: 125%;
    }

    .about-statement__image:after {
      background: linear-gradient(0deg, rgba(3,4,5,.99) 0%, rgba(3,4,5,.96) 24%, rgba(3,4,5,.82) 46%, rgba(3,4,5,.42) 68%, rgba(3,4,5,.08) 100%) !important;
    }
  }
`
document.head.appendChild(aboutImageStyle)

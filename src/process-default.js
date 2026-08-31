const processStyle = document.createElement('style')
processStyle.id = 'process-default-state'
processStyle.textContent = `
  /* How it works: the former section-hover state is now the permanent state. */
  .process-line,
  .process-line:hover {
    border-color: rgba(255,255,255,.62) !important;
    background: linear-gradient(145deg,rgba(244,247,249,.17),rgba(160,168,177,.11) 45%,rgba(224,229,233,.14)) !important;
    backdrop-filter: blur(26px) saturate(.9) !important;
    -webkit-backdrop-filter: blur(26px) saturate(.9) !important;
    box-shadow: inset 0 1px rgba(255,255,255,.52), inset 0 -1px rgba(90,98,107,.2), 0 28px 72px rgba(0,0,0,.46) !important;
    transform: none !important;
  }

  .process-line:before,
  .process-line:hover:before {
    opacity: 1 !important;
  }

  .process-line .process-step,
  .process-line:hover .process-step,
  .process-line .process-step:hover {
    padding-inline: 24px !important;
    border-bottom-color: rgba(255,255,255,.17) !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  .process-line .process-step h3,
  .process-line:hover .process-step h3,
  .process-line .process-step:hover h3 {
    color: #f7f8f9 !important;
  }

  .process-line .process-step p,
  .process-line:hover .process-step p,
  .process-line .process-step:hover p {
    color: #b9bec5 !important;
  }

  .process-line .process-step small,
  .process-line:hover .process-step small,
  .process-line .process-step:hover small {
    color: #d7dbe0 !important;
  }

  .process-line .process-step > span,
  .process-line .process-step:hover > span {
    transform: none !important;
  }

  @media (max-width: 720px) {
    .process-line .process-step,
    .process-line:hover .process-step,
    .process-line .process-step:hover {
      padding-inline: 14px !important;
    }
  }
`
document.head.appendChild(processStyle)

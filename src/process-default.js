const processStyle = document.createElement('style')
processStyle.id = 'process-default-state'
processStyle.textContent = `
  /* How it works: former section-hover state is now the permanent default. */
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
  .process-line:hover .process-step {
    padding-inline: 24px !important;
    border-bottom-color: rgba(255,255,255,.17) !important;
    background: transparent !important;
    box-shadow: none !important;
  }

  .process-line .process-step h3 { color: #f7f8f9 !important; }
  .process-line .process-step p { color: #b9bec5 !important; }
  .process-line .process-step small { color: #d7dbe0 !important; }

  /* Preserve the original per-line hover interaction. */
  .process-line .process-step:hover {
    background: linear-gradient(90deg,rgba(255,255,255,.12),rgba(255,255,255,.035)) !important;
    box-shadow: inset 3px 0 rgba(193,255,114,.7) !important;
  }

  .process-line .process-step:hover > span {
    color: #0a0c0e !important;
    border-color: rgba(255,255,255,.8) !important;
    background: linear-gradient(145deg,#f4f6f8,#afb6be) !important;
    box-shadow: inset 0 1px #fff,0 8px 20px #0005 !important;
    transform: scale(1.08) !important;
  }

  .process-line .process-step:hover .process-step__icon i {
    transform: scale(1.06) !important;
  }

  @media (max-width: 720px) {
    .process-line .process-step,
    .process-line:hover .process-step {
      padding-inline: 14px !important;
    }
  }
`
document.head.appendChild(processStyle)

const NativeMutationObserver = window.MutationObserver

if (NativeMutationObserver && !window.__prismaLanguageObserverGuard) {
  const instances = []

  class TrackedMutationObserver extends NativeMutationObserver {
    constructor(callback) {
      super(callback)
      instances.push(this)
    }
  }

  window.__prismaLanguageObserverGuard = {
    NativeMutationObserver,
    instances
  }

  window.MutationObserver = TrackedMutationObserver
}

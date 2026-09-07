import { test } from 'node:test'
import assert from 'node:assert/strict'
import vm from 'node:vm'
import fs from 'node:fs'

const source = fs.readFileSync(new URL('../src/process-timeline.js', import.meta.url), 'utf8')
function setup(reduced = false) {
  const bounds = [{ top: 180, height: 42 }, { top: 493, height: 42 }, { top: 1030, height: 42 }]
  const styles = {}
  const rail = { style: {} }
  const steps = bounds.map(rect => ({ querySelector: () => ({ getBoundingClientRect: () => rect }), classList: { add() {} } }))
  const timeline = { dataset: {}, querySelectorAll: () => steps, querySelector: () => rail, getBoundingClientRect: () => ({ top: 100 }), style: { setProperty: (k, v) => { styles[k] = v } } }
  let resize, reveal
  vm.runInNewContext(source, {
    document: { readyState: 'complete', querySelector: () => timeline, fonts: { ready: Promise.resolve() } },
    window: { matchMedia: () => ({ matches: reduced }), addEventListener() {} },
    ResizeObserver: class { constructor(fn) { resize = fn } observe() {} },
    IntersectionObserver: class { constructor(fn) { reveal = fn } observe() {} unobserve() {} },
  })
  return { bounds, rail, styles, steps, resize, reveal }
}
test('rail ends at the final node with unequal translated card heights', () => {
  const state = setup()
  assert.equal(Number.parseFloat(state.rail.style.top) + Number.parseFloat(state.rail.style.height), 951)
  assert.equal(state.rail.style.bottom, 'auto')
  state.bounds[2].top = 1530
  state.resize()
  assert.equal(Number.parseFloat(state.rail.style.top) + Number.parseFloat(state.rail.style.height), 1451)
  state.reveal([{ target: state.steps[2], isIntersecting: true }])
  assert.equal(state.styles['--process-progress'], '100%')
})
test('reduced motion reveals the complete bounded rail', () => {
  const state = setup(true)
  assert.equal(state.styles['--process-progress'], '100%')
  assert.equal(state.rail.style.height, '850px')
})

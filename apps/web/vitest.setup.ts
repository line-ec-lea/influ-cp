import { cleanup } from "@testing-library/react"
import { afterEach, vi } from "vitest"

class ResizeObserverMock {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}

if (typeof globalThis.ResizeObserver === "undefined") {
  // eslint-disable-next-line functional/immutable-data -- jsdom polyfill: Radix UI primitives require ResizeObserver at module load time.
  ;(
    globalThis as unknown as { ResizeObserver: typeof ResizeObserver }
  ).ResizeObserver = ResizeObserverMock as unknown as typeof ResizeObserver
}

if (typeof window !== "undefined") {
  type PointerCapableElement = HTMLElement & {
    hasPointerCapture: () => boolean
    releasePointerCapture: () => void
    scrollIntoView: () => void
  }
  const proto = window.HTMLElement.prototype as unknown as PointerCapableElement
  // eslint-disable-next-line functional/immutable-data -- jsdom polyfill: Radix Pointer events require these on HTMLElement.
  proto.hasPointerCapture = () => false
  // eslint-disable-next-line functional/immutable-data -- jsdom polyfill
  proto.releasePointerCapture = () => undefined
  // eslint-disable-next-line functional/immutable-data -- jsdom polyfill
  proto.scrollIntoView = () => undefined
}

afterEach(() => {
  cleanup()
})

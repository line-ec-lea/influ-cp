import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import OurPerformancePage from "./page"

describe("Our Performance page", () => {
  it("ページタイトルが描画される", () => {
    render(<OurPerformancePage />)
    expect(
      screen.getByRole("heading", { level: 1, name: "会社実績" }),
    ).toBeTruthy()
  })

  it("実績エントリが少なくとも10件描画される", () => {
    render(<OurPerformancePage />)
    const items = screen.getAllByRole("listitem")
    expect(items.length).toBeGreaterThanOrEqual(10)
  })
})

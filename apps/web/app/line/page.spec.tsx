import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import LinePage from "./page"

describe("LINE page", () => {
  it("ページタイトルが描画される", () => {
    render(<LinePage />)
    expect(
      screen.getByRole("heading", { level: 1, name: "INFLUのLINEビジネス" }),
    ).toBeTruthy()
  })

  it("POINT 01〜07 が描画される", () => {
    render(<LinePage />)
    expect(screen.getByText("POINT 01")).toBeTruthy()
    expect(screen.getByText("POINT 07")).toBeTruthy()
  })
})

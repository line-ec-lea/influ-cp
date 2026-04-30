import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import Home from "./page"

describe("Home page", () => {
  it("ヒーローのCTAリンクが描画される", () => {
    render(<Home />)
    expect(screen.getByRole("link", { name: "お問い合わせ" })).toBeTruthy()
    expect(screen.getByRole("link", { name: "サービスを見る" })).toBeTruthy()
  })

  it("3つのサービスカードが表示される", () => {
    render(<Home />)
    expect(
      screen.getByRole("heading", { level: 3, name: "プロモーション" }),
    ).toBeTruthy()
    expect(
      screen.getByRole("heading", { level: 3, name: "スクール運営" }),
    ).toBeTruthy()
    expect(
      screen.getByRole("heading", { level: 3, name: "WEBマーケティング" }),
    ).toBeTruthy()
  })

  it("INFLUの強みセクションが描画される", () => {
    render(<Home />)
    expect(screen.getByRole("heading", { name: "INFLUの強み" })).toBeTruthy()
  })
})

import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import ServicePage from "./page"

describe("Service page", () => {
  it("ページタイトルが描画される", () => {
    render(<ServicePage />)
    expect(
      screen.getByRole("heading", { level: 1, name: "INFLUのサービス" }),
    ).toBeTruthy()
  })

  it("3サービスの見出しが描画される", () => {
    render(<ServicePage />)
    expect(screen.getByRole("heading", { name: "プロモーション" })).toBeTruthy()
    expect(screen.getByRole("heading", { name: "スクール運営" })).toBeTruthy()
    expect(
      screen.getByRole("heading", { name: "WEBマーケティング" }),
    ).toBeTruthy()
  })
})

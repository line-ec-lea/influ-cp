import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import ContactPage from "./page"

describe("Contact page", () => {
  it("ページタイトルが描画される", () => {
    render(<ContactPage />)
    expect(
      screen.getByRole("heading", { level: 1, name: "お問い合わせ" }),
    ).toBeTruthy()
  })

  it("送信ボタンが描画される", () => {
    render(<ContactPage />)
    expect(screen.getByRole("button", { name: "送信する" })).toBeTruthy()
  })

  it("メールアドレス入力欄が描画される", () => {
    render(<ContactPage />)
    expect(screen.getByLabelText(/E-mail/)).toBeTruthy()
  })
})

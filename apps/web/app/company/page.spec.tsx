import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import CompanyPage from "./page"

describe("Company page", () => {
  it("ページタイトルが描画される", () => {
    render(<CompanyPage />)
    expect(
      screen.getByRole("heading", { level: 1, name: "会社概要" }),
    ).toBeTruthy()
  })

  it("企業情報テーブルに会社名が描画される", () => {
    render(<CompanyPage />)
    expect(screen.getByText("株式会社INFLU")).toBeTruthy()
  })

  it("代表挨拶セクションが描画される", () => {
    render(<CompanyPage />)
    expect(screen.getByRole("heading", { name: "代表挨拶" })).toBeTruthy()
  })
})

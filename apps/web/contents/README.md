# contents/

`https://influhp.com/` の再構築用に抽出した、ページごとのコンテンツ・構造ドラフトを格納する。

## ディレクトリ構成

```
contents/
├── README.md            # 本ファイル
├── sitemap.md           # サイトマップ（URL ↔ ファイル対応）
├── pages/               # ページ別 Markdown
│   ├── home.md
│   ├── service.md
│   ├── line.md
│   ├── company.md
│   ├── our-performance.md
│   └── contact.md
└── design/
    └── design-spec.md   # デザイントークン / レイアウト方針
```

## 運用ルール

- 各 `.md` の冒頭 frontmatter で `path` / `source` / `meta_title` を保持。
- 元サイトの本文は **構造（見出し・要点・項目）** をベースに格納している。
  ピクセル/コピー双方の最終確定値は、ブランドガイド / Figma / 実機スクリーンショット計測で上書きする。
- 追加ページ（BLOG 詳細・実績詳細など）が必要になった時点で `pages/` 配下に追加。

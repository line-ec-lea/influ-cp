---
title: デザイン仕様（influhp.com 観測ベース・ドラフト）
source: https://influhp.com/
status: draft（実装着手前にスクリーンショット計測 or ブランドガイドで確定する）
generated: 2026-04-30
---

# デザイン仕様 (Design Spec)

> 本ドキュメントは `https://influhp.com/` を観測してまとめたデザインシステムのドラフト。
> 1px 精度のピクセルパーフェクト再現が要件のため、実装前に以下を確定する想定:
>
> 1. クライアントからのブランドガイド / Figma 支給
> 2. もしくは PC / SP の実機スクリーンショットを取得し、配色・タイポ・余白を計測

## 1. カラートークン（観測ベース・要確定）

| トークン | 用途 | 想定値 |
|----------|------|--------|
| `--color-bg` | 背景 | `#FFFFFF` |
| `--color-bg-muted` | セクション交互背景 | `#F5F7FA` 付近 |
| `--color-fg` | 本文テキスト | `#1A1A1A` 付近 |
| `--color-fg-muted` | 補助テキスト | `#666666` 付近 |
| `--color-primary` | アクセント / ボタン | 濃紺〜ブルー系（要計測） |
| `--color-primary-fg` | プライマリ文字 | `#FFFFFF` |
| `--color-accent` | LINE 系 CTA | LINE グリーン `#06C755` |
| `--color-border` | 罫線 | `#E5E7EB` 付近 |

> アクセントカラーは元サイトのリンク色 / ボタンの実機スクリーンショット計測で確定する。

## 2. タイポグラフィ

| トークン | 想定値 | 備考 |
|----------|--------|------|
| `--font-jp` | "Noto Sans JP", "Hiragino Sans", "Yu Gothic", sans-serif | 本文・見出し共通 |
| `--font-en` | "Inter", "Helvetica Neue", Arial, sans-serif | 英字見出し / ナビ |
| `--font-base` | 16px | body |
| `--leading-base` | 1.7〜1.8 | 日本語可読性 |

### 見出しスケール（暫定）

| 要素 | PC | SP |
|------|-----|-----|
| h1 / Hero | 40〜56px | 28〜32px |
| h2 | 32〜40px | 24〜28px |
| h3 | 22〜26px | 18〜20px |

## 3. レイアウト / グリッド

| 項目 | 値 |
|------|----|
| コンテナ最大幅 | 1200px（推定） |
| 左右パディング (PC) | 24〜40px |
| 左右パディング (SP) | 16〜20px |
| セクション縦余白 (PC) | 80〜120px |
| セクション縦余白 (SP) | 48〜64px |

## 4. ブレークポイント

| 名称 | 値 |
|------|----|
| sp | `< 768px` |
| tablet | `768px〜1024px` |
| pc | `≥ 1024px` |

> 元サイトに `slide_sp.jpg` / `promotion_image_sp.png` 等 SP 専用画像あり。
> SP 切り替えは概ね 768px と推定。

## 5. ヘッダー

- 配置: 上部固定 or スクロール追従（要確認）
- 高さ: PC 80〜96px / SP 56〜64px（推定）
- 構成: ロゴ（左）／グローバルナビ（右）／CONTACT ボタン（右端）
- SP: ハンバーガーメニュー → ドロワー

## 6. ボタン

| バリエーション | 用途 | スタイル想定 |
|-----------------|------|--------------|
| `primary` | 主要 CTA（CONTACT） | 角丸 4〜8px / padding 14px 32px / hover で濃色 |
| `outline` | サブ CTA（詳細を見る） | 1px solid primary / 透過背景 |
| `tel` | 電話番号 | 電話アイコン + 大きめサイズ |
| `line` | LINE CTA | LINE グリーン背景 + LINE アイコン |

## 7. セクションパターン

トップページに頻出するブロック:

1. **Hero スライダー**: 全幅画像 + キャッチコピーオーバーレイ
2. **3 カラム カード**: サービス紹介・強み紹介
3. **左右交互レイアウト**: 画像 ↔ テキスト
4. **アイコン付き POINT リスト**: LINE ページの `POINT01〜07`
5. **記事リスト**: BLOG / お知らせ（日付＋タイトル＋アイキャッチ）
6. **CTA 帯**: TEL / LINE / MAIL の 3 列ボタン

## 8. アニメーション

- スクロール時のフェードイン（`AOS` 等を想定）
- スライダー（`Swiper` を想定）

## 9. アセット運用（再構築方針）

- 画像はクライアントから再支給を受け `apps/web/public/` 配下へ配置
- 元サイトの画像を直接転用する場合は別途権利確認
- アイコンは Lucide / Heroicons など OSS 系を採用予定

## 10. 実装スタック整合

- Framework: Next.js (App Router) — `apps/web/`
- UI: `packages/ui` (shadcn/ui ベース) を流用
- スタイリング: Tailwind CSS（v4 系想定、`postcss.config.mjs` 既設）
- フォント: `next/font` + Google Fonts (Noto Sans JP / Inter)

## 11. 残タスク（実装前に確定する）

- [ ] 公式ロゴ SVG 支給
- [ ] ブランドカラー hex 値確定
- [ ] 主要見出しの正確なフォントサイズ / 字間 / 行間
- [ ] Hero スライダー画像（PC / SP 各サイズ）
- [ ] OG 画像 / favicon の更新版
- [ ] CONTACT フォームの送信先（メールアドレス or 外部 SaaS）

# Reference Screenshots

実機スクリーンショットをこのフォルダに置いていただくと、こちらでセクション単位の寸法・余白・フォント計測を行い、実装に反映できます。

## 推奨ファイル名

| 端末 | ファイル名 | 取り方 |
|---|---|---|
| PC | `home_pc.png` | デスクトップ Chrome の DevTools → Capture full size screenshot（横幅 1440〜1920px 想定） |
| SP | `home_sp.png` | DevTools → Device Toolbar → iPhone 14 Pro 等 → Capture full size screenshot |

下層ページも必要に応じて：

```
contents/screenshots/
├── home_pc.png
├── home_sp.png
├── service_pc.png
├── service_sp.png
├── line_pc.png
├── line_sp.png
├── company_pc.png
├── company_sp.png
├── our-performance_pc.png
├── our-performance_sp.png
├── contact_pc.png
└── contact_sp.png
```

## 用途

- セクションごとの **PC / SP の高さ・余白** を計測
- **タイトルのフォントサイズ・行間** を逆算
- カードの **アスペクト比・グリッド数** を確認
- ボタン / アイコンの **配置・サイズ** を反映

## 注意

- 元サイトのデザインそのものを 1px 単位で完全コピーすることはできません（第三者著作物の可能性が残るため）。
- スクショは「実装の方向性を合わせるための参考資料」として使用し、配色・タイポ・余白を**自社で再構築するための計測ベース**にします。
- ブランドガイド（Figma / 配色定義 / フォント支給）が別途あれば、そちらが優先されます。

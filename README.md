# Next.js Dropdown Menu Accessible

## 概要
このプロジェクトは、Next.js（App Router）と TypeScript を用いて構築した、レスポンシブ対応かつアクセシビリティに配慮したドロップダウン付きグローバルナビゲーションメニューの実装例です。
フロントエンドエンジニアとしての技術力を示すために、UIの操作性・コードの保守性・アクセシビリティを意識した設計にしています。

## 技術スタック

- Next.js 15.2.4（App Router）
- TypeScript
- CSS Modules
- React Hooks
- HTML / WAI-ARIA（アクセシビリティ対応）
- Node.js（開発環境）

### 主な特徴

- Next.js App Router 構成（app/ ディレクトリ）対応

- TypeScript 使用 / 外部状態管理ライブラリなし

- レスポンシブ対応（PC・SP 両対応）
  ・PC：クリックまたはキーボード（Enterキー）でドロップダウンメニュー操作可能
  ・SP：ハンバーガーメニュー（Drawer）展開時にドロップダウンメニュー表示

- アクセシビリティ対応
  ・`aria-expanded`, `aria-hidden`, `aria-label` などの適切な属性管理
  ・Drawer展開時のフォーカストラップ（Tabキーの巡回制御）をカスタムフックで実装
  ・Escキーで Drawer 閉じる操作に対応

- ユーザー操作に応じた状態リセット処理
  ・ページ遷移時にドロップダウンメニューや Drawerの状態を自動でリセット
  　（`pcActiveIndex`, `drawerActiveIndex`, `isOpen` を初期化）
  ・ナビゲーション外をクリック時、ドロップダウンメニューを自動で閉じる

- 共通スタイル以外は、CSS Modules によるスコープ付きスタイル設計

- 機能ごとにカスタムフックを分離し、再利用性と保守性を担保

## スクリーンショット

### パソコン表示
#### 通常時
![PC Closed](public/pc-dropdown-close.png)

#### ドロップダウンメニュー展開時
![PC Open](public/pc-dropdown-open.png)

### スマートフォン表示
#### Drawer展開時の通常時
![SP Closed](public/sp-dropdown-close.png)

#### Drawer展開時のドロップダウン展開時
![SP Closed](public/sp-dropdown-open.png)

## 使い方

1. Node.js をインストール（推奨バージョン: 18.x以上）

2. リポジトリをクローン

   git clone https://github.com/your-username/nextjs-dropdown-menu-accessible.git
   
   cd nextjs-dropdown-menu-accessible

3. 依存パッケージのインストール

    npm install

4. 開発サーバーの起動

5. ブラウザで http://localhost:3000 にアクセスして動作を確認できます。
## 検証の内容について

[React に新しく導入される View Transition コンポーネント](https://github.com/facebook/react/pull/31975) の動作検証。

- モーダル
  - モーダルダイアログの開閉に ViewTransition を適用できるかの検証
- ブログ
  - 一覧ページと詳細ページ間の Container Transform 的なアニメーションの動作検証
  - Next.js の `<Link/>` による画面遷移が React の Transition 機能を使っているので、素で ViewTransition を発生させることが可能

## 動作確認の方法

以下のコマンドで dev サーバーを立ち上げて、

```bash
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて動作を確認できます。

`app/(home)/page.tsx` を編集することでページの内容を変更できます。ファイルを編集すると自動的に更新されます。

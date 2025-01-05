### アプリ起動
```
npm run dev
```

### Tailwind起動
```
npx tailwindcss -i ./src/styles/index.css -o ./src/styles/output.css --watch
```

### Tailwindのドキュメント
- インストール
https://tailwindcss.com/docs/installation

- カラー
https://tailwindcss.com/docs/customizing-colors

# Tailwindで調べたこと


### justify-between
- justify-content: space-between

### ul ol
<ul> (順序なしリスト)	<ol> (順序付きリスト)

### relative
<div className="relative">
relative:
この<div>要素を相対配置に設定します。
相対配置は、この要素の位置を通常の文脈（デフォルトの位置）からの相対的な位置として指定できるようにします。
特に重要な点は、この相対配置が内部の子要素（例えば、absoluteクラスが適用された要素）に基準を提供するという点です。

### text-〇〇xl
- text-3x　fontsize: 30px
- font-bold　font-weight: 700
- underline  text-decoration-line: underline

text-5xl
5xl は非常に大きなフォントサイズを指します。
Tailwind CSS のデフォルト設定では、text-5xl は font-size: 3rem;（48px）に相当。
また、line-height（行間）も自動的に調整され、デフォルトで 1

text-3xl
3xl は少し小さめですが、まだ大きなフォントサイズを指します。
Tailwind CSS のデフォルト設定では、text-3xl は font-size: 1.875rem;（30px）に相当。
デフォルトの line-height は 1.25

|クラス|サイズ (rem)|ピクセル換算 (px)|
|----|----|-----|
|text-xs|0.75rem|12px|
|text-sm|0.875rem|14px|
|text-base|1rem|16px|
|text-lg|1.125rem|18px|
|text-xl|1.25rem|20px|
|text-2xl|1.5rem|24px|
|text-3xl|1.875rem|30px|
|text-4xl|2.25rem|36px|
|text-5xl|3rem|48px|
|text-6xl|3.75rem|60px|
|text-7xl|4.5rem|72px|
|text-8xl|6rem|96px|
|text-9xl|8rem|128px|

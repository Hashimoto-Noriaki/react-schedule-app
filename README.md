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

# グラデーションボタン

https://github.com/Hashimoto-Noriaki/react-schedule-app/pull/6

# Tailwindで調べたこと
### container
container は Tailwind CSS のユーティリティクラスで、幅の制限と中央寄せを行う

|ブレークポイント|最大幅 (max-width)|
|--------------|-----------------|
|sm (640px以上)|640px|
|md (768px以上)|768px|
|lg (1024px以上)|1024px|
|xl (1280px以上)|1280px|
|2xl|(1536px以上)|1536px|

### mx-auto
Tailwind CSS のユーティリティクラスで、左右のマージンを自動***margin-left: auto; margin-right: auto;***に設定します。
親コンテナ内で要素を中央揃えにするために使用



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

### leading
leading-[50px] は、行の高さを 50px に設定するクラスで

### top-0 right-0 left-0
マージンが0

### bg-gradient-to-r
背景に「左から右へのグラデーション」を適用
to-r は "to right"
```css
background-image: linear-gradient(to right, ...);
```

### p-4
pはpadding
4は1rem
```css
padding: 1rem; /*
```

- [20vh]:
カスタム値として 20vh を設定。
vh（viewport height） はビューポート（画面）の高さの単位を表し、20vh は画面の高さの 20% を意味します。
```css
padding-top: 20vh;
```

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


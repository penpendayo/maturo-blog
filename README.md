# 📝これは何？
[弱小アフィカスの末路](https://maturo.penpen-dev.com/)のソースです。

## 🔰使い方
1. `git clone`する
2. ターミナルを立ち上げて`docker-compose up -d`を打ち込んで、Wordpressサーバーを立ち上げる
3. `localhost:8000`に行き、Wordpressにログイン後、記事を書く
4. 記事を書き終わったら、`npm run build`する
5. 出来上がった`out`フォルダの中身を任意のサーバーにアップロードする


### 🍎画像の管理について
`npm run build`の中身は👇のようになっています。
```
"build": "npm run imgCopy && next build && next 
"imgCopy": "rsync -auvz --delete --checksum .docker/.wp/uploads/ public/img/"
```
このようにbuildを行う前に、`rsync`コマンドでWordpressにアップロードされた画像（`.docker/.wp/uploads`フォルダの中身）を`public`フォルダにコピーするようにしています。なので画像の管理もWordpress上で完結しています。

また、画像のパスはrehype-reactを使ってimgタグのsrcの中身を本番環境用のURLに書き換えています。
## 📁ディレクトリ構成
以下のようになっています。
- `src`
  - Next.jsのソースすべて
- `docker-compose.yml`
  - Wordpressを起動するためのYMLファイル
- `.docker`　👈docker-composeによって自動生成される
  - `.wp`
    - Wordpressのデータ（wp-contentの中身）
  - `.mysql`
    - Wordpressのデータ（記事など）

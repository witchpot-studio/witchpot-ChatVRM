# 誰でもAITuberお試しキット
[English version](./en_README.md)
[Chinese version](./zh_README.md)

## 概要

以下の3つの機能があります。

1. AIキャラとの対話（ChatVRMの機能）
2. AITuber配信
3. WebSocketモード

下記の記事に詳細な使用方法を記載しました。

[![今日からあなたもAITuberデベロッパー｜ニケちゃん](https://github.com/tegnike/nike-ChatVRM/assets/35606144/a958f505-72f9-4665-ab6c-b57b692bb166)](https://note.com/nike_cha_n/n/ne98acb25e00f)

### 共通事前準備

1. パッケージインストールします。
```bash
npm install
```

2. 開発モードでアプリケーションを起動します。

```bash
npm run dev
```

3. URLを開きます。[http://localhost:3000](http://localhost:3000)

## AIキャラとの対話

- AIキャラと会話する機能です。
- このリポジトリの元になっている[pixiv/ChatVRM](https://github.com/pixiv/ChatVRM)の機能です。
- 各種LLMのAPIキーさえあれば比較的簡単に試すことが可能です。
- 直近の10会話文を記憶として保持します記憶として保持します。（数字は指定できるように更新予定）

### 使用方法

1. 設定画面で各種LLMのAPIキーを入力します。
   - OpenAI
   - Anthropic
   - Groq
   - ローカルLLM（APIキーは不要ですが、ローカルAPIサーバーを起動しておく必要があります。）
   - Dify Chatbot（APIキーは不要ですが、ローカルAPIサーバーを起動しておく必要があります。）
2. 必要に応じてキャラクターの設定プロンプトを編集します。
3. 必要に応じてVRMファイルを読み込みます。
4. 音声合成エンジンを選択し、必要に応じて声の設定を行います。
   - VOICEVOXの場合は複数の選択肢から話者を選ぶことができます。予めVOICEVOXアプリを起動しておく必要があります。
   - Koeiromapの場合は、細かく音声を調整することが可能です。APIキーの入力が必要です。
   - Google TTSの場合は日本語以外の言語も選択可能です。credential情報が必要です。
   - Style-Bert-VITS2は、ローカルAPIサーバーを起動しておく必要があります。
5. 入力フォームからキャラクターと会話を開始します。マイク入力も可能。

## AITuber配信

- Youtubeの配信コメントを取得して発言することが可能です。
- Youtube APIキーが必要です。
- 「#」から始まるコメントは読まれません。（文字列は指定できるように更新予定）

### 使用方法

1. 設定画面でYoutubeモードをONにします。
2. Youtube APIキーとYoutube Live IDを入力します。
3. 他の設定は「AIキャラとの対話」と同様に行います。
4. Youtubeの配信を開始し、キャラクターがコメントに反応するのを確認します。

## WebSocketモード

- WebSocketでサーバーアプリにメッセージを送信して、レスポンスを取得することができます。
- 上記2つと異なり、フロントアプリで完結しないため少し難易度が高いです。

### 使用方法

1. サーバーアプリを起動し、`ws://127.0.0.1:8000/ws` エンドポイントを開きます。
2. 設定画面でWebSocketモードをONにします。
3. 他の設定は「AIキャラとの対話」と同様に行います。
7. サーバーアプリからのメッセージを待ち、キャラクターが反応するのを確認します。

### 関連

- 私が作成したサーバーアプリのリポジトリで試すことが可能です。[tegnike/nike-open-interpreter](https://github.com/tegnike/nike-open-interpreter)
- 詳しい設定は「[美少女と一緒に開発しようぜ！！【Open Interpreter】](https://note.com/nike_cha_n/n/nabcfeb7aaf3f)」を読んでください。

## TIPS

### VRMモデル、背景固定方法

- VRMモデルは `public/AvatarSample_B.vrm` のデータを変更してください。名称は変更しないでください。
- 背景画像は `public/bg-c.jpg` の画像を変更してください。名称は変更しないでください。

## その他

- ライセンスは[pixiv/ChatVRM](https://github.com/pixiv/ChatVRM)に準拠します。
- 言語設定は日本語、英語、中国語（繁体字）に対応しています。設定画面で切り替えが可能です。
- 会話履歴は設定画面でリセットすることができます。
- 各種設定項目はブラウザに保存されます。

// ─────────────────────────────────────────────────────────────────────────────
// firebase-config.example.js — 設定テンプレート
//
// 使い方:
//   1. このファイルを firebase-config.js としてコピーする
//      $ cp firebase-config.example.js firebase-config.js
//
//   2. Firebase Console (https://console.firebase.google.com) でプロジェクトを作成する
//      - 「ウェブアプリを追加」→ アプリのニックネームを設定
//      - 表示された firebaseConfig の値を下記に貼り付ける
//
//   3. Firebase Console で以下を有効化する
//      - Authentication > Sign-in method > メール/パスワード を有効にする
//      - Firestore Database > データベースの作成（本番モードで開始）
//      - Firestore > ルール に firestore.rules の内容を貼り付けてPublish
//
//   4. firebase-config.js は .gitignore に含まれているので GitHub には上がりません
//
// GitHub Pages へのデプロイ時は GitHub Actions Secrets を使って注入してください:
//   Secrets に FIREBASE_API_KEY, FIREBASE_PROJECT_ID 等を登録し、
//   .github/workflows/deploy.yml でファイルを生成します。
// ─────────────────────────────────────────────────────────────────────────────
window.FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

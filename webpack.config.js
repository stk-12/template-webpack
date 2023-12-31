const path = require('path');

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'production',
  
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: {
    // エントリーポイントのファイル名をキーにする
    main: './html/assets/js/src/main.js',
    index: './html/assets/js/src/index.js'
  },

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: path.resolve(__dirname, 'html'),
    // 出力ファイル名
    // エントリーポイントのキーを[name]に設定
    filename: './assets/js/dist/[name].bundle.js'
  },

  // ローカル開発用環境を立ち上げる
  // 実行時にブラウザが自動的に localhost を開く
  devServer: {
    // ルートディレクトリの指定
    contentBase: path.join(__dirname, 'html'),
    // すべてのファイルを監視する
    watchContentBase: true
  }
};
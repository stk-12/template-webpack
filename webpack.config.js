const path = require('path');

module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  // entry: "./html/assets/js/src/index.js",
  // entry: {
  //   bundle: ['./html/assets/js/src/index.js', './html/assets/js/src/sub.js']
  // },
  entry: {
    main: './html/assets/js/src/index.js',
  },

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    // path: path.resolve(__dirname, './html/assets/js'),
    path: path.resolve(__dirname, 'html'),
    // 出力ファイル名
    filename: "./assets/js/bundle.js"
  },

  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",
  // mode: "production",

  // ローカル開発用環境を立ち上げる
  // 実行時にブラウザが自動的に localhost を開く
  devServer: {
    // static: "html",
    // static: {
    //   directory: path.join(__dirname, './html'),
    // },
    // open: true,
    // hot: true,
    // watchFiles: ["./html/**/*"],
    contentBase: path.join(__dirname, 'html'),
    watchContentBase: true
  }
};
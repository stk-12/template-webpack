const path = require('path');

module.exports = {
  // 出力モード
  mode: 'production',
  // mode: 'development',
  
  // エントリーポイント
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

  // ローカル開発用環境設定
  devServer: {
    // ルートディレクトリの指定
    contentBase: path.join(__dirname, 'html'),
    // すべてのファイルを監視する
    watchContentBase: true
  }
};
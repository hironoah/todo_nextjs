/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb', // airbnbのeslint設定。広く使われているが判定厳しめ
    'plugin:@typescript-eslint/recommended', // typescriptのプラグイン
    'next/core-web-vitals', // next.jsを導入する際に勝手に入ってきた。中身は見てないけどairbnbより優先
    'plugin:import/typescript', // typescriptのplugin
    'prettier', // prettierと併用する際は必須
  ],
  rules: {
    // reactでtypescriptを使う場合、ts/tsxファイルも許容する必要がある
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', 'ts', 'tsx'] },
    ],
    'import/extensions': ['error', 'never'], // importの際の拡張子を記述しない
  },
};

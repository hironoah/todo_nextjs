/**
 * @type {import('prettier').Config}
 */
module.exports = {
  semi: true, // セミコロンあり
  singleQuote: true, // シングルクォートを使用
  printWidth: 90, // 90文字で折り返し
  tabWidth: 2, // スペースの単位
  trailingComma: "all", // カンマが必ず必要な状態に
  jsxSingleQuote: true, // JSXでシングルクォートを使用
  plugins: ["prettier-plugin-tailwindcss"], // tailwindcssのプラグインを導入
};

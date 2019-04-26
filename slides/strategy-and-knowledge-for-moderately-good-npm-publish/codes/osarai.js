{
  "typings": "dist/index.d.ts", // 型定義
  "main": "dist/index.js", // CommonJS
  "module": "dist/index.es.js", // ESModule
  "browser": "dist/index.umd.js", // UMD
  "unpkg": "dist/index.umd.js", // unpkg(UMD)
  "jsdelivr": "dist/index.umd.js", // jsDelivr(UMD)
  "files": ["dist"], // whitelist形式でnpmに実際に上がるファイルを指定
  "sideEffects": false // globalに影響するポリフィルのようなものを含む場合はtrue
}
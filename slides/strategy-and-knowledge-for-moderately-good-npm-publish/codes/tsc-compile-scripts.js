"scripts": {
  "build": "npm run build:esnext && npm run build:esm && npm run build:cjs",
  "build:esnext": "tsc --module esnext --target esnext
                   --outDir dist/es --project tsconfig.prod.json",
  "build:esm": "tsc --module esnext --target es5
                   --outDir dist/esm --project tsconfig.prod.json",
  "build:cjs": "tsc --module commonjs --target es5
                   --outDir dist/cjs --project tsconfig.prod.json"
}

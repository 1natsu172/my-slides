import { readdirSync, writeFileSync } from 'fs'
import * as path from 'path'

const SLIDES_DIR = process.env.npm_package_config_slidesDir
const SHARED_ASSETS_DIR = process.env.npm_package_config_sharedAssetsDir

const slideRepoNames: string[] = readdirSync(SLIDES_DIR).map(
  slideName => slideName
)

const fixedObject = {
  version: 2,
  name: 'my-slides',
  public: true,
  alias: ['slides-1natsu.now.sh']
}

const staticAssetsBuild = [
  { src: `${SHARED_ASSETS_DIR}/images/*`, use: '@now/static' }
]

const slidesBuild = slideRepoNames.map(slideName => ({
  src: `${SLIDES_DIR}/${slideName}/package.json`,
  use: '@now/static-build',
  config: {
    distDir: 'dist'
  }
}))

// const routes = slideRepoNames.reduce(
//   (acc, slideName) => [
//     ...acc,
//     {
//       src: `/${slideName}/main.js`,
//       dest: `/slides/${slideName}/main.js`
//     },
//     {
//       src: `/${slideName}/(.*)`,
//       dest: `/slides/${slideName}/$1index.html`
//     }
//   ],
//   []
// )
const routes = [
  {
    src: '/(.*)', // when user accessed /slideName
    dest: '/slides/$1' // refer /slides/slideName
  }
]

const json = JSON.stringify(
  { ...fixedObject, builds: [...staticAssetsBuild, ...slidesBuild], routes },
  null,
  2
)

try {
  writeFileSync(path.resolve(process.cwd(), 'now.json'), json)
} catch (error) {
  throw error
}

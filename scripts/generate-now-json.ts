import { readdirSync, writeFileSync } from 'fs'
import * as path from 'path'

const SLIDES_DIR = process.env.npm_package_config_slidesDir

const slideRepoNames: string[] = readdirSync(SLIDES_DIR).map(
  slideName => slideName
)

const fixedObject = {
  version: 2,
  name: 'my-slides',
  public: true,
  alias: ['slides-1natsu.now.sh']
}

const build = slideRepoNames.map(slideName => ({
  src: `${SLIDES_DIR}/${slideName}/package.json`,
  use: '@now/static-build',
  config: {
    distDir: 'dist'
  }
}))

const routes = slideRepoNames.reduce(
  (acc, slideName) => [
    ...acc,
    {
      src: `/${slideName}/main.js`,
      dest: `/packages/${slideName}/main.js`
    },
    {
      src: `/${slideName}/(.*)`,
      dest: `/packages/${slideName}/index.html`
    }
  ],
  []
)

const json = JSON.stringify({ ...fixedObject, build, routes }, null, 2)

try {
  writeFileSync(path.resolve(process.cwd(), 'now.json'), json)
} catch (error) {
  throw error
}

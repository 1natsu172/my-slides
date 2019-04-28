# my-slides
oreno slides collection

## commands

### start new slide

exec **`yarn new-slide`**

> scaffonding by scaffdog.

1. select output dir => `slides`
2. Enter new slide project name.

#### Start create slide content

`yarn workspace <スライド名> run start`

> `-p 9898` で別ポート可


### building site

> hosting by now(static-builder).

exec **`yarn deploy`** or GitPush(integrate GitHub repo with "now".)


## @Todo&Memo

* About lock `mdx-deck@1.10.2`
  * `code-surfer` is not support `mdx-deck@2.x.x`
    * https://github.com/pomber/code-surfer/issues/53
  * Docs/v1
    * https://github.com/jxnblk/mdx-deck/tree/v1.10.2/docs


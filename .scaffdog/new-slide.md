---
name: 'new-slide'
description: 'generate directory of new slide project.'
message: 'Please enter new slide name.'
root: '.'
output: '**/*'
ignore: ['node_modules', 'node_modules/**/*', '.scaffdog', '.git', 'scripts', 'shared-assets', 'slides/**/*']
---

# `{{ input }}/deck.mdx`

```markdown
import { Head } from "mdx-deck";
import { Split } from "mdx-deck/layouts";
import { CodeSurfer } from "mdx-deck-code-surfer";
import vsDarkPlus from "prism-react-renderer/themes/vsDarkPlus";
import { Meta } from "{{ relative "../shared-assets/components" }}";
import { myBaseTheme } from "{{ relative "../shared-assets/custom-themes" }}";

export const theme = myBaseTheme()

<Head>
  <Meta
    title="@TODO: SLIDE_TITLE"
    description="@TODO: SLIDE_DESC"
    slug="{{ input }}"
    publishedAt={new Date(@TODO: EVENT_DATE)}
  />
    <link
    href="https://fonts.googleapis.com/css?family=Noto+Sans+JP|Sawarabi+Mincho"
    rel="stylesheet"
  />
</Head>

<!-- // EXAMPLE of CodeSurfer // -->
<!-- <CodeSurfer
  title="Some Title"
  code={require("!raw-loader!./my-snippet.ts")}
  lang="typescript"
  showNumbers={false}
  dark={false}
  steps={[
    { notes: "Start with this note"},
    { lines: [6], notes: "Note for the first step" },
    { range: [5, 9] },
    { tokens: { 9: [3, 4, 5] }, notes: "Note for the third step" }
  ]}
/> -->


# @TODO: edit TITLE

[@TODO: edit EVENT_NAME](@TODO: edit EVENT_URL)  

---

## 1natsu

edit bio

---

## INDEX

edit indexes

---

# @TODO: edit LAST SLIDE
```

<!-- Package.json -->
<!-- @TODO: --no-html たぶんmdx-deck@v2で不要になる -->
# `{{ input }}/package.json`

```json
{
  "name": "{{ input }}",
  "description": "{{ input }}",
  "version": "1.0.0",
  "author": "1natsu",
  "keywords": [],
  "license": "MIT",
  "private": true,
  "scripts": {
    "start": "mdx-deck ./deck.mdx",
    "now-build": "mdx-deck build --no-html ./deck.mdx && cp -r ./images dist"
  }
}
```

<!-- generate empty dir -->
# `{{ input }}/images/.gitkeep`
```
```
# `{{ input }}/codes/.gitkeep`
```
```
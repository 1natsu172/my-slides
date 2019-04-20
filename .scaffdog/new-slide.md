---
name: 'new-slide'
description: 'generate directory of new slide project.'
message: 'Please enter new slide name.'
root: '.'
output: '**/*'
ignore: ['node_modules', 'node_modules/**/*', '.scaffdog', '.git', 'slides/**/*']
---

# `{{ input }}/deck.mdx`

```markdown
Let's create a template with reference to the document!
https://github.com/cats-oss/scaffdog/#templates
```

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
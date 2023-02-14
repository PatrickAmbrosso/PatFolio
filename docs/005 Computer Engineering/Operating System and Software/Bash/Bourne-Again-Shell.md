---
# Basic Note Frontmatter
title: Bourne Again Shell
tags: []
description: "Everything about the shell that is found in most linux distributions"
# Docusaurus Configurations
share: true
sidebar_position: 1
---
%%import Tabs from '@theme/Tabs';  
import TabItem from '@theme/TabItem';%%
# The Bourne Again Shell
**Bash** or ***B*ourne *A*gain *Sh*ell** is the command line shell that is found in most of the Linux Distributions. Some of the other popular shells include the following.
1. Zsh
2. Fish

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">
    PowerShell
  </TabItem>
  <TabItem value="mac" label="macOS">
	Bash
  </TabItem>
  <TabItem value="linux" label="Linux">
    Unix Bash
  </TabItem>
</Tabs>

```mdx-code-block
<Tabs>
<TabItem value="docusaurus.config.js">
```

```js
module.exports = {
  themeConfig: {
    prism: {
      magicComments: [
        // Remember to extend the default highlight class name as well!
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        // highlight-start
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
        // highlight-end
      ],
    },
  },
};
```

```mdx-code-block
</TabItem>
<TabItem value="src/css/custom.css">
```

```css
.code-block-error-line {
  background-color: #ff000020;
  display: block;
  margin: 0 calc(-1 * var(--ifm-pre-padding));
  padding: 0 var(--ifm-pre-padding);
  border-left: 3px solid #ff000080;
}
```

```mdx-code-block
</TabItem>
<TabItem value="myDoc.md">
```

````md
In JavaScript, trying to access properties on `null` will error.

```js
const name = null;
// This will error
console.log(name.toUpperCase());
// Uncaught TypeError: Cannot read properties of null (reading 'toUpperCase')
```
````

```mdx-code-block
</TabItem>
</Tabs>
```
---
# Basic Note Frontmatter
title: Bourne Again Shell
tags: []
description: "Everything about the shell that is found in most linux distributions"
# Docusaurus Configurations
share: true
sidebar_position: 1
---
# The Bourne Again Shell
**Bash** or ***B*ourne *A*gain *Sh*ell** is the command line shell that is found in most of the Linux Distributions. Some of the other popular shells include the following.
1. Zsh
2. Fish

import Tabs from '@theme/Tabs';  
import TabItem from '@theme/TabItem';

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

Test Comment
## Test heading

```mdx-code-block
<Tabs groupId="dbms-program">
<TabItem value="MySQL">
```

```sql
DROP DATABASE IF EXISTS mydb;
CREATE DATABASE mydb;
USE mydb;
SHOW DATABASES
```

```mdx-code-block
</TabItem>
<TabItem value="PostgreSQL">
```

```sql
DROP DATABASE IF EXISTS mydb;
CREATE DATABASE mydb;
USE mydb;
\l;
```

```mdx-code-block
</TabItem>
<TabItem value="SQL Server">
```

```sql
# TSQL Syntax
```

```mdx-code-block
</TabItem>
</Tabs>
```
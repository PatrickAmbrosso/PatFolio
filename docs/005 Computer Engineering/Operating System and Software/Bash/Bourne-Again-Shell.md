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

## Installation Guide

```mdx-code-block
<Tabs groupId="dbms-program">
<TabItem value="MySQL">
```

You can install MySQL on Windows by following these steps:

1.  Download the MySQL Installer from the official MySQL website.
2.  Run the downloaded installer file.
3.  Choose the "Custom" installation type.
4.  Select the MySQL server and any other desired MySQL products or features.
5.  Choose a setup type (e.g. Development, Server Only, etc.).
6.  Configure any additional settings as desired (e.g. MySQL port, data directory, etc.).
7.  Set a root password for the MySQL server.
8.  Complete the installation process.

After installation, you can start and stop the MySQL server using the "MySQL Installer - Community" program, which is installed along with MySQL.

```mdx-code-block
</TabItem>
<TabItem value="PostgreSQL">
```

You can install PostgreSQL on Windows by following these steps:

1.  Download the PostgreSQL installer from the official PostgreSQL website.
2.  Run the downloaded installer file.
3.  Choose the installation directory and the components you want to install (e.g. PostgreSQL server, command line tools, etc.).
4.  Choose the data directory where your databases will be stored.
5.  Choose the port number that the PostgreSQL server will listen on.
6.  Choose the default locale for your PostgreSQL installation.
7.  Set a password for the PostgreSQL superuser ("postgres").
8.  Complete the installation process.

After installation, you can start and stop the PostgreSQL server using the "pg_ctl" command or the "Services" management console in Windows. You can also access PostgreSQL using command line tools like "psql", or install a graphical user interface like pgAdmin to manage your PostgreSQL databases.

```mdx-code-block
</TabItem>
<TabItem value="SQL Server Express Edition">
```

You can install SQL Server Express Edition on Windows by following these steps:

1.  Download the SQL Server Express installer from the official Microsoft website.
2.  Run the downloaded installer file.
3.  Choose the installation type (e.g. Basic, Custom, etc.).
4.  Accept the license terms.
5.  Choose the features you want to install (e.g. Database Engine, Management Tools, etc.).
6.  Choose the installation directory and instance name.
7.  Configure the server authentication mode (e.g. Windows authentication or mixed mode).
8.  Set a password for the SQL Server system administrator ("sa") account.
9.  Configure any additional settings as desired (e.g. SQL Server Agent, Reporting Services, etc.).
10.  Complete the installation process.

After installation, you can start and stop the SQL Server service using the "Services" management console in Windows. You can also access SQL Server using SQL Server Management Studio or other client tools.

```mdx-code-block
</TabItem>
</Tabs>
```

<Tabs groupId="dbms-program">
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

:::tip Create Databases

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
<TabItem value="SQL Server Express Edition">
```

```sql
# TSQL Syntax
```

```mdx-code-block
</TabItem>
</Tabs>
```

:::
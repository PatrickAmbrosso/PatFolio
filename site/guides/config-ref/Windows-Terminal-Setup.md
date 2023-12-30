---
title: Customizing the Windows Terminal
---

Configure the Windows Terminal. Access the PROFILE file using the `$PROFILE` environment variable. If it does not exist, create it.

```powershell
Test-Path $PROFILE
```

<<< @/snippets/dotfiles/config.pwsh-core.ps1{powershell}

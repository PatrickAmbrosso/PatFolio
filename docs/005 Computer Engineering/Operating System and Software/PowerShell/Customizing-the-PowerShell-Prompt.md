---
title: Customizing the PowerShell Prompt
tags: [Reference]
description: "Various options to customize and personalize the PowerShell Prompt."
share: true
---
The [PowerShell](PowerShell.md) Prompt customization script is given below.

```PowerShell
# PowerShell $PROFILE Customization

# Disabling Directory Hightlight (PowerShell 7.3 specific)
$PSStyle.FileInfo.Directory = "" # Comment if you are using PowerShell 7.2 or lower

# Shell Autocompletion
# Original Source: https://dev.to/dhravya/how-to-add-autocomplete-to-powershell-in-30-seconds-2a8p

# Initializing the module
Import-Module PSReadLine

# Shows navigable menu of all options when hitting Tab
Set-PSReadLineKeyHandler -Key Tab -Function MenuComplete

# Autocompleteion for Arrow keys
Set-PSReadLineOption -HistorySearchCursorMovesToEnd
Set-PSReadLineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadLineKeyHandler -Key DownArrow -Function HistorySearchForward

# Setting options for screen updating
Set-PSReadLineOption -ShowToolTips
Set-PSReadLineOption -PredictionSource History

# Get Information on Git Tracked Directories
# Get Latest Commit Hash
function Get-GitHashInfo {
	$MatchCheck = (git log -n 1) -join ' ' -match '(?s)commit (?<commithash>[\w0-9]+)'
	if ($MatchCheck) {
		$Matches.commithash.SubString(0,6)
	}
}

# Custom PowerShell Prompt
# Original Source: https://www.commandline.ninja/customize-pscmdprompt/
function prompt {
	# Assign Windows Title Text
	$host.ui.RawUI.WindowTitle = "PowerShell 7"
	# Configure current user, current folder and date outputs
	$CmdPromptCurrentFolder = Split-Path -Path $pwd -Leaf
	$CmdPromptUser = [Security.Principal.WindowsIdentity]::GetCurrent();
	$Date = Get-Date -Format 'dddd HH:mm:ss'
	# Test for Admin / Elevated
	$IsAdmin = (New-Object Security.Principal.WindowsPrincipal ([Security.Principal.WindowsIdentity]::GetCurrent())).IsInRole([Security.Principal.WindowsBuiltinRole]::Administrator)
	
	# Gather and Store Git Information (if in a Git Repo)
	if ((git log -n 1 *>&1) -join ' ' -notmatch 'fatal') {
		$GitBranch =  " | " + "$([char]27)[38;2;233;78;50mשׂ " + ((git branch) -replace '\* ', '') + ": " + (Get-GitHashInfo) +" $([char]27)[39;49m"
	}
	
	# Decorate the Shell Prompt
	Write-Host ""
	Write-host ($(if ($IsAdmin) { '[Admin] ' } else { '' })) -ForegroundColor Red -NoNewline
	Write-Host "$([char]27)[38;2;165;122;255m@$($CmdPromptUser.Name.split("\")[1]) " -NoNewline
	Write-Host "at " -NoNewline
	if ($CmdPromptCurrentFolder -like "*:*") {
		Write-Host "$([char]27)[38;2;44;165;141m$CmdPromptCurrentFolder" -NoNewline
	} Else {
		Write-Host "$([char]27)[38;2;44;165;141m.\$CmdPromptCurrentFolder\" -NoNewline
	}
	Write-Host " on $([char]27)[38;2;255;199;89m$date" -ForegroundColor White -NoNewline
	Write-Host "$GitBranch"
	Write-Host '$PS: ' -NoNewline
	return "> "
} # end prompt function
```
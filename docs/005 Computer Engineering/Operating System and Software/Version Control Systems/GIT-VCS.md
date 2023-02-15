---
# Basic Note Frontmatter
title: GIT VCS
tags: [Software-Development]
description: ""
# Docusaurus Configurations
share: true
sidebar_position: 2
---
# Introduction to Git

## Story of Git
[Linux](../../../002%20Inbox/Linux.md) Operating being Open Source maintains its kernel code accessible to the public. During the early years of maintenance (1991 - 2002), the changes to the kernel were passed around as patches and archived files.

In 2002, the Linux Kernel Project began using a proprietary [DVCS](./Version-Control-System.md#Distributed%20Version%20Control%20Systems%20(DVCS)) software by the name BitKeeper. In 2005 the relationship between the Linux community and the BitKeeper software company broke and the tool's free-of-charge status was revoked.

This prompted the Linux Community and primarily [Linux Torvalds](Linux%20Torvalds.md) to develop their own tool based on the learnings and short comings of the previous system. On conception, Git had a few goals
- Speed of operation
- Simplicity in design
- Strong support for non-linear development (parallel branching)
- Fully distributed
- Handle large projects

Since 2005, when Git saw its initial release, the system has always stuck to these goals that it set out with initially. Today Git is one of the most popular distributed version control systems and it is free to use and open source.

## Where it differs
git fundamentally differs from the other VCS tools available in each of the following ways.

## Git Snapshots
Other VCS tools generally look for the differences in data between each file and store data on a per file basis (referred to as *delta-based version control*).

Git on the other hand, takes complete snapshots of the overall state of the files and stores the information only on files that have changed. This enables Git to be mindful of what data needs to be updated in its tracking. If a file did not change, it merely refers to the last tracked version that was changed. In a way, it appears as a stream of snapshots.

## Operations done Locally
Almost all the operations that Git does is done locally on the machine. This makes Git really fast when compared to CVCS systems which are network latency based for the speed of operation. 

It also gives the freedom to work on the files without being connected to a network. All changes can be stored offline and committed to the local copy of the repository.

## Git integrity
Every action in Git is checksummed before it is stored and it can be referred to by that checksum. This means that every action that occurs on the files is tracked by Git, either success or failure of action. Thus, information cannot be lost or corrupted without git knowing it.

Git internally uses SHA-1 hash which is a 40 character hexadecimal value computed based on the contents of a file or directory structure in Git. Git stores everything in its database by hash value of its contents. The following is an example of one such SHA-1 hash.

```
24b9da6552252987aa493b52f8696cd6d3b00373
```

## Git Data Addition
Git always adds data to its database and it is very difficult to mess things up that is not undoable. If commits are frequently and promptly made, data can be recovered to any state as required.

## Git states
By default, git does not track a file unless explicitly asked to. Thus all files in a git repository can be either *tracked* or *untracked*
1. **Tracked** - Git was explicitly asked to track changes to the file.
2. **Untracked** - Git was not asked to track changes to the file.

Files that are being actively tracked by git can have 4 states
1. **Unmodified** - Files are are not changed from the last snapshot or checkout from the original source.
1. **Modified** - Files have been changed/modified, but not stored in the git database.
2. **Staged** - Files that have are set to be saved in the git database in the next snapshot.
3. **Committed** - Files that have been saved in the git database.

`![EXCLD States of a Git Tracked File.png](EXCLD%20States%20of%20a%20Git%20Tracked%20File.png)`

These states are cyclic in nature. When a file is committed, it is sent back to the unmodified state, as there are not changes from the last snapshot or checkout. But subsequently when changes are made to the file, it goes into the modified state, which can then be staged and eventually committed, thus performing the cycle all over again.

With this in mind, all git projects have 3 sections namely,
1. **Working Tree/Directory** - Where the tracked and untracked files reside.
2. **Staging Area** - Where the files that are set to be saved in the next snapshot reside. Physically, it is present in the `.git` directory. In git terminology, it is referred to as `index`.
3. **`.git` directory** - This is where git stores all the metadata and object database for the git project.

`![EXCLD Sections of a Git Project.png](EXCLD%20Sections%20of%20a%20Git%20Project.png)`

## Git and Command Line
The Power of Git comes with its support on the command-line. Although Git contains several open-source and paid GUI clients available, most of them implement a subset of git's capability. This makes the command line the only place where git shines with its full capability.

---
# Up and Running with Git

## Git Installation
Git is available on Windows, Linux and MacOS Operating Systems. The instructions to download and setup Git varies based on the operating system and further information on the same can be found at [Git - Downloads](https://git-scm.com/downloads).

## Git Setup
Git comes with a tool called as `git config` that allows to set up git as per preferences. Configurations can be set on 3 levels, namely
1. **System Level at `[path]/etc/gitconfig`** - Applied to every user in the system.
2. User Level at  `/.gitconfig` or `/.config/git/config` - Applies to the current user in the system.
3. Repo Level at `config` file at `.git` directory - Applies to the currently repository the use is currently working on.

Each level of config overrides the previous level configuration. To get a list of all git configurations, run the following command.

```PowerShell
# Show configurations
git config --list

# Show configurations and their origin
git config --list --show-origin
```

The following are some of the most common configuration settings that are done when setting up a local git environment.
1. **Setting up identity** - Used to authenticate the user and their actions.
2. **Setting up default editor** - Sets up default code editor for the actions that git launches. Options include Emacs, Vim, Notepad++, VS Code, Sublime Text or Atom.
3. **Setting up default branch name** - Git and other platforms are moving from the terminology of `master` to other names to be more inclusive. Most users prefer the term `main` to be their default branch name.

```PowerShell
# Identity Configurations
git config --global user.name "John Doe" 
git config --global user.email johndoe@example.com

# Editor Configurations
git config --global core.editor vscode

# Default Branch Configurations
git config --global init.defaultBranch main

```

## Getting Help
Manuals and help in git can be accessed in a number of ways. These are showcased below.

```PowerShell
# For full-blown help/manual page
git help <verb>
git <verb> --help
man git-<verb>

# For compressed, available options for commands
git <verb> -h
```

---
# Git Reference

> [!info] Git Cheatsheets
> - [GitHub Training Kit - GitHub Cheatsheets](https://training.github.com/)
> - [Visual Git Cheatsheet - NDP Software](https://ndpsoftware.com/git-cheatsheet.html#loc=index;)


## Setup and Configuration

### git


### git config


### git help


### git bugreport


## Getting and Creating Projects
This section deals with setting up git tracking in a repository. This repository can be built on a machine from scratch or it can be downloaded from another location such as a git hosting provider or a server or even from another locally contained git tracked directory. 

### git init
- **Purpose:** To initialize an empty repository or reinitialize an existing repository.
- **Description**: The command creates a `.git` directory with subdirectories for `objects`, `refs/heads`, `refs/tags` and template files. It also creates an initial branch without any commits (name based on the settings - global preference or local options via flags). 
- **Docs Reference**: [Git Docs - git init](https://git-scm.com/docs/git-init)

```bash
# Initialize git repository in the current directory
git init .

# Initialize git repository in another directory
git init "C:\Users\UniqueUser\Learning Git\RealRepo"

# Initialize a git repository with a different main branch name
git init -b primary

# Initialize a git repository - less verbose
git init -q
```

Note: If a destination directory path is not provided, git initializes a repository in the current location.

> [!success] `git init` twice?
> Running `git init` on a repository more than once is not an issue. The command is commonly rerun when new templates are added or to move the repository to another place if separate git directory is given.

> [!caution] Just initializing does not track files
> It is to be noted that just initializing a repository does not track the files in the directory. In order to track the files, the files have to be added to the git tracking and then committed. This is covered later.

> [!danger] Do not initialize git repositories inside other git repositories
> It is not good practice to have git tracked repositories inside git repositories making a nested git repository case. Some conflicts might arise and is generally discouraged.
> 
> However there are ways to deal with managing existing git repositories that are used as a part of a current project. These ways are dealt later.

### git clone
- **Purpose:** Bring an existing repository into a directory of choice
- **Description**: Clones an existing repository into a newly created repository
- **Docs Reference**: [Git Docs - git clone](https://git-scm.com/docs/git-clone)

```bash
# Clone a git repository in the current directory
git clone https://github.com/UniqueUser/MyRepo.git

# Clone a git repository into the current directory
git clone https://github.com/UniqueUser/MyRepo.git .

# Initialize a git repository with a different main branch name
git init -b primary

# Initialize a git repository - less verbose
git init -q
```

## Basic Snapshotting


## Branching and Merging


## Sharing and Updating Projects 


## Inspection and Comparison


## Patching


## Debugging


## Email


## External Systems 


## Administration


## Server Administration


## Plumbing commands 


## Guides



---
# Git Basics

## Setting up a Git Repository
There are 2 ways of getting a Git repository up and ready for working.
1. Initialize a local repository from scratch and track the files henceforth.
2. Clone an existing repository from other locations (local or remote).

## Initialize a Local Repository
A git repository can be initialized from scratch with the use of the `git init` command. This can be accomplished in an empty directory (folder) or a folder with files already existing in them.

> [!important] Operating Systems and Syntax differences
> Please note that Linux/Unix based operating systems such as Linux Distros and MacOS use slightly different set of commands to navigate the command line while Windows uses a different one.
> 
> Also Windows works with a backward slash (`\`) while Linux/Unix based operating systems work with a forward slash (`/`). This is accounted when moving directories while working with git. However git is built on bash, so when using git-bash, a forward slash (`/`) is to be used in windows.
> 
> That being said, in Windows [PowerShell](PowerShell.md) is the preferred Shell of choice. All of these commands work on PowerShell as well. Just being mindful on the slash type (`/`or`\`) is required nonetheless.

The following command is used to initialize a git repository on a machine from scratch.

```Bash
# Initialize git repository in the current directory
git init .

# Initialize git repository in another directory
git init "C:\Users\UniqueUser\Learning Git\RealRepo"

# Initialize a git repository with a different main branch name
git init -b primary 

```

> [!caution] Just initializing does not track files
> It is to be noted that just initializing a repository does not track the files in the directory. In order to track the files, the files have to be added to the git tracking and then committed. This is covered later.

> [!danger] Gitception
> It is not good practice to have git tracked repositories inside git repositories making a nested git repository case. Some conflicts might arise and is generally discouraged.
> 
> However there are ways to deal with managing existing git repositories that are used as a part of a current project. These ways are dealt later. 

## Clone an existing repository
In order to get a local copy of a pre-existing repository from a server or other location, the `git clone` command can be used. The source for this repository can be from a remote server or another location on the local machine. There are different transfer protocols on which an existing directory can be cloned. Two of the most common ones are showcased below.

```PowerShell
# Clone an existing repository in the current directory (https)
git clone https://github.com/UniqueUser/RealRepo.git

# Clone an existing repository in the current directory (https)
git clone https://github.com/UniqueUser/RealRepo.git "C:\Users\UniqueUser\Learning Git"

# Clone an existing repository in the current directory (ssh)
git@github.com:UniqueUser/RealRepo.git

```

> [!caution] Cloning via SSH
> In order to clone a repository via SSH, appropriate SSH access has to be set up with the source machine and the local machine.

## Recording changes to a repository
As discussed prior, files can be wither tracked or untracked. And all tracked files can exist in 4 states across the 3 stages of a git project. As the project progresses, the files move across these states and stages. 

## Checking the status of the files in a repository
The command `git status` can be used to view the status of each of the files in a git tracked directory. It also specifies if a file is currently being tracked or not.

```git
git status 
```

The above command showcases the following information 
- Information of the current branch (branches dealt later)
- List of files that are tracked with changes to them
- List of files that are not tracked 
- Information on how to add/stage the files for the next snapshot

## Tracking and Staging Files with Git
The `git add` command is used to add new files to the git tracking as well as stage existing git tracked files.


---
- **Keeping commits atomic** - Care must be taken to make sure that a commit should encompass a single change or feature or a fix. In simpler terms, each commit must be focussed on one things only. This is done to facilitate easier undo and rollbacks and makes the code easier to follow and review.
- gitignore to ignore files. [Recommended gitignore templates based on the project](https://www.toptal.com/developers/gitignore/)
- 
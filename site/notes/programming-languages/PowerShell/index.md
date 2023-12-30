## Getting Started with PowerShell
At its Core (pun intended) PowerShell is an interactive Shell built on the `.NET` framework. On top of this, PowerShell supports advanced scripting and automation features. PowerShell has support to commands from the CMD and Unix shells.

### Cmdlets in PowerShell
Commands in PowerShell are referred to as cmdlets (pronounced as command-lets).  Each cmdlet in PowerShell follows a `verb-noun` pattern.

**Command:**

```PowerShell
# General structure of cmdlets 
# Retrieves the contents of a specified directory
Get-ChildItem 
```

**Output**:

```PowerShell

    Directory: C:\Users\UniqueUser\Documents

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----          01-10-2022    23:06                Custom Office Templates
d----          31-10-2022    05:28                Dell
d----          10-11-2022    21:38                IISExpress
d----          03-12-2022    14:08                My Games
d----          10-11-2022    21:38                My Web Sites
d----          04-11-2022    05:44                PowerShell
d----          04-11-2022    06:21                PowerToys
d----          05-10-2022    21:27                Python Scripts
d----          03-12-2022    21:27                Sound Recordings
d----          13-11-2022    19:20                Visual Studio 2022
```

::: info  Word-Capitalization in PowerShell
**POWERSHELL IS NOT CASE-SENSITIVE**. However, it is recommended to use the PascalCasing format when writing in PowerShell to aid in readability and to be uniform across the board. That being said, PowerShell will recognize and run the commands in both capital and small forms of the alphabet, so both `Get-ChildItem` and `geT-cHiLdiTeM` would fetch the contents of a specified directory.
:::

PowerShell uses and recommends its scripting users to stick with a defined set of verbs, while the setting of noun is open for the scripting user. To get a list of all verbs used by PowerShell, simply type the `Get-Verb` cmdlet onto the PowerShell terminal.

**Command:**

```PowerShell
# Retrieves a list of all verbs used by PowerShell
Get-Verb 
```

**Output**:

```PowerShell
Verb        AliasPrefix Group          Description
----        ----------- -----          -----------
Add         a           Common         Adds a resource to a container, or attaches an..
Clear       cl          Common         Removes all the resources from a container but does not..
Close       cs          Common         Changes the state of a resource to make it inaccessible..
Copy        cp          Common         Copies a resource to another name or to another container
Enter       et          Common         Specifies an action that allows the user to move into a resource
Exit        ex          Common         Sets the current environment or context to the..
Find        fd          Common         Looks for an object in a container that is unknown..
Format      f           Common         Arranges objects in a specified form or layout
Get         g           Common         Specifies an action that retrieves a resource
Hide        h           Common         Makes a resource undetectable
Join        j           Common         Combines resources into one resource
Lock        lk          Common         Secures a resource
Move        m           Common         Moves a resource from one location to another
New         n           Common         Creates a resource

--snip--

```


PowerShell offers an extensive TAB completion feature that allows less typing and faster scripting. To save time even further, PowerShell allows the setting of various **aliases** that allow to define commonly used commands in a more shorter and rememberable format. The commands from the CMD and Unix shell land are actually stored in PowerShell as aliases.

**Command:**

```PowerShell
# General structure of cmdlets 
# Retrieves the contents of a specified directory
Get-ChildItem 
ls
dir
```

**Output**:

```PowerShell

    Directory: C:\Users\UniqueUser\Documents

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d----          01-10-2022    23:06                Custom Office Templates
d----          31-10-2022    05:28                HP
d----          03-12-2022    14:08                My Games
d----          10-11-2022    21:38                My Web Sites
d----          04-11-2022    05:44                PowerShell
d----          04-11-2022    06:21                PowerToys
d----          05-10-2022    21:27                Python Scripts
d----          03-12-2022    21:27                Sound Recordings
d----          13-11-2022    19:20                Visual Studio 2022

```

PowerShell cmdlets are positional in nature, meaning the parameters can be passed to the cmdlets in a sequential manner without explicitly specifying their name.

In the case of the `Get-ChildItem` cmdlet, the order of positional parameters are `[-Path] [-Filter] [-Include] [-Exclude] [-Recurse]` and so on.

### Everything is an Object
PowerShell handles everything as an object from the `.NET` while most other shells handle them as text. This gives immense control over what is possible with the shell. This enables to use the full functionality of the `.NET` object library.

**Command:**

```PowerShell
# Retrieves a list of all verbs used by PowerShell
"Hello World".Length 
```

**Output**:

```PowerShell
11
```

All cmdlets that generate an output are also created as objects. These objects can then be referenced and used downstream.

### Administrators as First-Class Users


### The Power of Piping

---
## Getting Started

PowerShell Versions
PowerShell Availability
PowerShell Installation 

**PowerShell Command:** 

**Command:**

```PowerShell
Get-Help Out-Null
```

**Output**:

```PowerShell
NAME
    Out-Null

SYNTAX
    Out-Null [-InputObject <psobject>] [<CommonParameters>]


ALIASES
    None


REMARKS
    Get-Help cannot find the Help files for this cmdlet on this computer. It is displaying only
    partial help.
        -- To download and install Help files for the module that includes this cmdlet, use
    Update-Help.
        -- To view the Help topic for this cmdlet online, type: "Get-Help Out-Null -Online" or
           go to https://go.microsoft.com/fwlink/?LinkID=2096792.

```

---
## Getting Comfortable
1. [[PowerShell Basics]]
2. [[PowerShell Control Flow]]
3. [[PowerShell Error Handling]]
4. [[PowerShell Functions]]
5. [[PowerShell Modules]]

---
## Showcase
1. [[Customizing the PowerShell Prompt]]
2. [[PowerShell Showcase - Working with Objects]]
3. [[PowerShell Showcase - Working with Output]]
4. [[File and Drives Management with PowerShell]]
5. [[PowerShell Showcase - Managing Processes and Services]]
6. [[PowerShell Showcase - Working with UI Elements]]
7. [[PowerShell Showcase - Managing CI-CD Pipelines]]

---
## Communities & Resources

### Source Code
1. [PowerShell GitHub Repository](https://github.com/PowerShell/PowerShell.git)

### Communities
1. [PowerShell User Groups](https://aka.ms/psusergroup)
2. [PowerShell Tech Community](https://techcommunity.microsoft.com/t5/powershell/ct-p/WindowsPowerShell)
3. [DSC Community](https://dsccommunity.org/)
4. [PowerShell.org](https://powershell.org/)
5. [PowerShell on StackOverFlow](https://stackoverflow.com/questions/tagged/powershell)
6. [PowerShell on Reddit](https://www.reddit.com/r/PowerShell/)
7. [PowerShell Slack Group](https://aka.ms/psslack)
8. [PowerShell Discord Server](https://aka.ms/psdiscord)
9. [Spiceworks PowerShell Forum](https://community.spiceworks.com/programming/powershell)

### Books
1. *PowerShell for SysAdmins* by **Adam Bertram** | [No Starch Press](https://nostarch.com/powershellsysadmins)
2. *Learn PowerShell in a Month of Lunches* by **Travis Plunk**, **James Petty**, **Tyler Leonhardt**, **Don Jones** and **Jeffery Hicks** | [Manning](https://www.manning.com/books/learn-powershell-in-a-month-of-lunches) | [Amazon](https://www.amazon.com/Learn-PowerShell-Month-Lunches-Fourth-ebook/dp/B09XBTPJ3S)
3. *Mastering PowerShell Scripting* by **Chris Dent** | [Packt](https://www.packtpub.com/product/mastering-powershell-scripting-fourth-edition/9781800206540) | [Amazon](https://www.amazon.com/Mastering-PowerShell-Scripting-Automate-environment/dp/1800206542)
4. *PowerShell Cookbook* by **Lee Holmes** | [O'Reilly](https://www.oreilly.com/library/view/powershell-cookbook-4th/9781098101596/)
5. *PowerShell Pocket Reference* by **Lee Holmes** | [O'Reilly](https://www.oreilly.com/library/view/powershell-pocket-reference/9781098101664/)
6. *PowerShell 7 for IT Professionals* by **Thomas Lee** | [Wiley](https://www.wiley.com/en-us/PowerShell+7+for+IT+Professionals-p-9781119644705) | [Amazon](https://www.amazon.com/PowerShell-7-Pros-Thomas-Lee/dp/1119644720/ref=sr_1_1?crid=2I42JJMSY2NXM&keywords=PowerShell+7+for+IT+Professionals)

### YouTube Video Tutorials


### Miscellaneous Resources
1. [PowerShell Digital Art](https://learn.microsoft.com/en-us/powershell/scripting/community/digital-art)


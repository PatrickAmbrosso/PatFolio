---
title: "YAML"
tags: [Reference]
description: "Everything about the serialization language YAML"
share: true
---
## Remember, YAML Ain't a Markup Language!
**YAML** or **YAML Ain't a Markup Language** is a [declarative](declarative.md) [data serialization](../../../../Data%20Serialization.md) that exists with one primary goal above others, to make the code **Human-Readable** and it is primarily used to write configuration files and transfer data across apps and services. 

[XML](Extensible%20Markup%20Language.md) and [JSON](JavaScript%20Object%20Notation.md) are some of the other examples of Data Serialization Languages in popular use today. Following are some of the salient features of YAML that make it more preferable to be used as a serialization language to transfer data across apps and services.
1. YAML follows a very *simple*, *human-readable* syntax.
2. YAML is considered as the superset of [JSON](JavaScript%20Object%20Notation.md). Also YAML and JSON are easily interchangeable.
3. It supports common data types such as *Integers*, *Floats*, *Strings*, *Boolean*.
4. YAML basically consists of *Lists* and *Maps* and a combination of both. 

The following is a tiny example of what YAML syntax looks like. 

```yaml "Patrick.config"
---
name: Patrick Ambrose
alias: "Patrick Ambrosso"
age: 24
height: 169.69
funny: true
skills:
	- YAML
	- Git
	- Docker
	- AWS
	- Powershell
languages: ["Tamil", "English", "French", "German", "Lying"]
bank-balance: 0
---
```

## The importance of whitespace and indentation.
YAML relies heavily on indentation and whitespaces, which makes very human-readable as well as very strict in syntax for indentation. Consider the following YAML syntax for the correct and incorrect ways to write YAML declarations.

```yaml Correct YAML Syntax
- journey-type: Dinner Date
  location: "Jacob's Diner"
  time: "7:30 pm"
  date: 2023-02-14
- journey-type: "Friend's Marriage"
```

The following are some of the key pointers in YAML
- YAML borrows features from [PERL](PERL.md), [C Language](C%20Language.md), [XML](Extensible%20Markup%20Language.md) and more.
- YAML is considered a superset of [JSON](JavaScript%20Object%20Notation.md), hence [JSON](JavaScript%20Object%20Notation.md) Code is considered as valid YAML.
- YAML relies heavily on indentation (like [Python](../Python/Getting-Started-with-Python.md)) and hence spaces are crucial to separate the entities.
- YAML files use a `.yml` or a `.yaml` file extension.
- All data in YAML is either a List or a Map
	- **Lists** are series of values of (mostly) the same type, such as listing different fruits in a shop.
	- **Maps** are Key-Value pair(s) representing an element and the value associated with it.
- The values in YAML can be scalars such as Strings, Boolean, Numbers, Dates.
- YAML Maps and Lists can be represented in multiple ways, but generally a standard is preferred.

```yaml
# Representing Maps (Key-Value Pairs)
Place: France
Food: Pizza
Drink: Coke
Hotel: Trivago

# Representing Lists (Arrays)
Fruits:
	- Pineapple
	- Watermelon
	- Mango
Cars:
	- Ferrari
	- BMW
	- Mercedes

# Representing Dictionaries and Maps (nested)
Jacob-Strauss:
	height-cm: 175
	weight-kg: 72
	armor-percent: 80
	weapon-primary: FN SCAR
	weapon-secondary: HK 45
	active-from: 2003-03-21
Elijah-Simmons:
	height-cm: 172
	weight-kg: 72
	armor-percent: 68
	weapon-primary: HK G36
	weapon-secondary: SIG Sauer P320
	active-from: 2000-09-11

# Representing multi-line strings - considered as single line
Name: "Fitzgerald"
Age: 32
Comment: >
	I love to go out in ther woods.
	It gives me a sense of solitude that I really love.
	I have gone on solo trips to the woods 3 times this year alone.

# Representing multi-line strings - considered as multi line
Name: "Alexa"
Age: 26
Comment: |
	I love Coffee.
	When waking up in the morning, the first thing I do is drink a hot vup of coffee.
	I also know too much caffine is not good for health.
	Thus, I am trying to keep in under control.

# Declaring & Referencing variables
name: "Heath Genesis"
age: 42
city: &HeathCity "Berlin"

ref-city: *HeathCity

# Declaring and referencing maps
soldier-details: &deets
	name: "Heath Genesis"
	age: 42
	city: &HeathCity "Berlin"

player-id: "PID001"
<<: *deets 

```
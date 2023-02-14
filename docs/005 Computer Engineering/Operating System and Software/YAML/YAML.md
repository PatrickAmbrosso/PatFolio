---
title: "YAML"
tags: [Reference]
description: "Everything about the serialization language YAML"
share: true
---
# YAML
**YAML** or **YAML Ain't a Markup Language** is a [Data Serialization Language](Data%20Serialization%20Language.md) that exists with one primary goal above others, to make the code **Human-Readable** and it is primarily used to write configuration files and transfer data across apps and services. 

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
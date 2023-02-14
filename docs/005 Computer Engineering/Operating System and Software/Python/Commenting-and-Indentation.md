---
title: Commenting and Indentation
tags: [Reference]
description: ""
# Docusaurus Configurations
share: true
sidebar_position: 2
---
# Commenting and Indentation
Commenting and Indentation are some of the most commonly used tools when writing code. Both of these help in making the code easier to read, understand and debug. The concept of [Self-Documenting Code](Self-Documenting%20Code.md) is emphasized here. It means that any code written must be structured in a way that it is evident of what action it performs.

## Commenting Code
Comments are a way to document code as it is written. While code must preferably be self-documenting, comments play a major part in making sure that the code is easier to understand and troubleshoot. In python, single line commenting is made by using the `#` symbol.

[Python](./Getting-Started-with-Python.md) does not have a specific syntax for multi-line comments, thus a multi-line comment is a sequence of single-line comments each preceded with a `#` sign. 

However, as python ignores string literals that are not assigned to a variable, a multi-line string can be used similar to a multi-line comment. By this way, python will read the string, but as the string is not assigned to a variable, it is ignored. Multi-line strings are made using triple quotes (`"""`) and placing the comment within the pair of these triple quotes.

```python
# this is a single-line comment 

# this is a multi-line comment - line 1
# this is a multi-line comment - line 2
# this is a multi-line comment - line 3

"""
This is a multi-line string 
This is a string literal not assigned to a variable.
Thus, python ignores it
This makes this string act as a multi-line comment
"""
```

## Indentation
Indentation refers to the spaces at the beginning of a code line. In most languages, indentation just serves the purpose of making the code easy to read and follow along. But in python, indentation is crucial. Python relies on indentation to differentiate blocks of code, while other languages might use braces.

Typically 4 spaces are used as the indentation standard, however even 1 space would work. The same standard must be used in a given block of code, meaning if 4 spaces are used in a block of code, then all code within the same block must use the same 4 spaces as indentation. Most text-editors and IDEs use 1 TAB key as 4 SPACES, so that less key strokes are made.

Any code that is not indented properly will throw an error on execution.

```python
# Indentation in python - Correct practice
a = 10
b = 20
if  b > a:
	print("b is greater than a")

# Indentation in python - Wrong practice - Throws an error
a = 10
b = 20
if  b > a:
print("b is greater than a")

```

---
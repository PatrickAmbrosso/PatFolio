---
title: Inputs and Outputs
tags: [Reference]
description: "Everything about the Python Programming Language"
share: true
---
# Inputs and Outputs
Two of the most frequent activities any programming language performs is displaying information to a user and getting input from the users.

## Python print Statement
Printing to the console can be performed in python using the `print` statement. To print in multiple lines, `\n` can be used to indicate line breaks, where `\` functions as the escape character. To concatenate multiple strings, the `+` operator can be used. However, to concatenate a number data type to a string, the number must be converted to a textual representation before it can be concatenated.

In order to avoid multiple concatenations, the concept of `fstrings` can be used. It is accomplished by adding an `f` before the first quote within the print function, followed by mentioning the variable name within curly brackets.

```python
# Printing to the console
print("Hello World")

# Printing in multiple lines 
print("Hello World! \nPython is a beginner friendly programming language.")

# Concatenation when printing 
age = 10
name = "David"
print("Hello there " + name + ", your age is " + str(age) + ".")

# Using f-strings to avoid concatenations 
age = 10
name = "David"
print(f"Hello there {name}, your age is {age}.")
```

## Python input statement
The `input` statement can be used to accept values from the user. The input statement waits for user input before continuation of code execution. Values accepted by the input statement are stored as text by default. If these values need to be used downstream, explicit type conversions must be made along with getting these values from the users.

```python
# Getting input from the users
name = input("What is your name? ")
age = int(input("What is your age? "))
```

---
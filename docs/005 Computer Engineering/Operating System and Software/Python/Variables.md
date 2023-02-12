---
title: Variables
tags: [Reference]
description: ""
share: true
---
---
> **Related:** [Python](Python.md)  
---
# Working with Variables
Variables are placeholders in memory to store some value. In python, variables cannot be just defined whereas a variables is created upon declaring it.  

## Creating and Setting Variables
To create a variable, it is declared with its appropriate data type syntax. Python is intelligent enough to detect the data type that is being assigned. Variables can also be assigned explicitly stating what data type must be stored in memory. Variables are reusable. When a new value is assigned to a variable, the old value is overwritten and the new value propagates further.

```python
# Assigning values to variables
a = 10
b = "Hello World"
c = 233.42

# Single line multiple variable value assignment
d,e,f = 10,11,12

# Same value to muliple variables 
x = y = z = 100

```

## Variable Naming Conventions 
Variable naming conventions are a set of rules governing what is acceptable as variable names and what is not. the following are the variables naming conventions to be followed in python
1. Variable names can only *contain alphanumeric characters* (0-9, a-z) and underscore.
2. Variable names can *start with an alphabet* or an *underscore*.
3. Variable names *cannot start with a number*.
4. Variable names are case-sensitive.
5. Multi-word variable names can be named with one of the preferred standards of [Casing in Programming](Casing%20in%20Programming.md)

```python
# Acceptable Naming Conventions 
variable = 10
Variable = 10
_variable = 10
variable_01 = 10
myVariable = 10
MyVariable = 10
My_Variable = 10
my_variable = 10

# Unacceptable Naming Conventions - Will throw error
01variable = 10
%variable = 10

```

## Type Conversions
Variables from one data type can be converted to another in python in two ways.
1. **Implicit Conversions** - Data types that are converted into another by the python interpreter during execution.
2. **Explicit Conversions** - Data type conversions that are explicitly mentioned by the program. Explicit conversions offer additional arguments in certain conversions.

In order to get the data type of a variable, the `type()` function can be used.  

```python
# Getting the data type of a variable 
a = 5
b = type(a)
print("The data type of a is " + b)

# Implicit type conversions 
a = 10
b = 2.5
a = a + b
print("a is of type: " + type(a))

# Explicit type conversions 
a = 10
a = float(a)
print("a is of type: " + type(a))
```

## Variable Scope
Scope in variables refers to the duration of execution until which the variable can be called for utilization. 

Some points to consider for variable scoping are as follows 
- Variables declared on the main function or the initial point of code execution are set to be global scoped. Meaning that they can be accessed along the entire runtime of the code/program.
- Variables declared within a block of code are referred to as local scoped and are available for utilization as long as the block of code gets executed.
- When the same name for the variables are used in both global and local scoped variables, then the local scoped variable takes precedence.
- To declare global scoped variables from within a function, use the `global` keyword.

```python
# Variable scoping 
a = 10 # a is global scoped declared globally
if a < 20:
	b = 5 # b is local scoped declared locally
	global c = a + b # c is global scoped declared locally
print(c)
```

---
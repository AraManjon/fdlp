# FizzBuzz Generator

This is a kata to practice classic TDD, BabySteps and Problem Description and is available in Cyber-Dojo. See his [blog post](https://codingdojo.org/kata/FizzBuzz/).

### 🥋 FizzBuzz Kata

The Fizz Buzz generator is a simple program, it’s method say generate accepts the numeric input and produces the output string based on the rules and input number.

### 📐 Rules
The generate method returns the string

- FizzBuzz when input parameter is divisible by 3 and 5.
- Fizz when input parameter is divisible by 3.
- Buzz when input parameter is divisible by 5.
- String representation of given number when input parameter neither divisible by 3 or 5.

### 🔍 Exercise analysis

It is clear that there are four use cases to implement

**FizzBuzz** As a fizz buzz generator, I should be able to generate a string FizzBuzz for a given input number **when the number is divisible by 3 and 5**.

**Fizz** As a fizz buzz generator, I should be able to generate a string Fizz for a given input number **when the number is divisible by 3**.

**Buzz** As a fizz buzz generator, I should be able to generate a string Buzz for a given input number **when the number is divisible by 5**.

**Number (converted to string)** As a fizz buzz generator, I should be able to generate a string format of input number for a given input number **when number is neither divisible by 3 or 5**.

### 🚦 Introduce the concepts of TDD and BabySteps

#### The three laws of TDD
-  You are not allowed to write any more of a unit test that is sufficient to fail, and compilation failures are failures
-  You are not allowed to write any production code unless it is to make a failing unit test pass
-  You are not allowed to write any more production code that is sufficient to pass the one failing unit test

#### Refactoring and the Rule of Three – baby steps
- The Rule of Three defers duplication minimization until there is enough evidence. Code that does not contain duplication is often referred to as abiding to the DRY (Do not Repeat Yourself) principle.


#### Three methods of moving forward in TDD
-  Fake it
-  Obvious implementation
-  Triangulation

#### Detect axes
- The idea is that we stay in one behavior until we are sure that behavior is completed.
​
#### Naming tests
- Tests should have names that describe a business feature or behavior

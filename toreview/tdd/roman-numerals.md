# Roman Numerals

Write a function to convert Arabic numbers to Roman numerals as best as you can.Witre the program following the TDD practices.


### 🥋 RomanNumerals Kata
The Roman Numerals is a simple program, it's method say generatee accepts the numeric input and produces the output string based on the rules and input number.

### 📐 Rules
The generate method returns the string

- Simple Roman Symbol outputs:

```
    - I when input paramenter is 1
    - V when input paramenter is 5
    - X when input paramenter is 10
    - L when input paramenter is 50
    - C when input paramenter is 100
    - D when input paramenter is 500
    - M when input paramenter is 1000
```

- Compose Right-to-Left Roman Symbol outputs:

```
    - IV when input paramenter is 4
    - IX when input paramenter is 9
    - XL when input paramenter is 40
    - XC when input paramenter is 90
    - CD when input paramenter is 400
    - CM when input paramenter is 900
```

- Compose Left-to-Right Roman Symbol outputs:

```
    - II when input paramenter is 2
    - III when input paramenter is 3
    - VI when input paramenter is 6
    - VII when input paramenter is 7
    - VIII when input paramenter is 8
    - XI when input paramenter is 11
    - XII when input paramenter is 12
    - XIII when input paramenter is 13
    - XVI when input paramenter is 16
    - XVII when input paramenter is 17
    - XVIII when input paramenter is 18
    ...
```

### 🔍 Exercise analysis

It is clear that there are three use cases to implement:

**Simple Roman Symbol** 

**As** a roman numerals program, **when** a (1)**number with simple roman symbol** is passed as argument, **then** a (2)**simple roman symbol** is returned.

(1): 1,5,10,50,100,500,1000

(2): I,V,X,L,C,D,M

**Compose Right-to-Left Roman Symbol** 

**As** a roman numerals program, **when** a (1)**number with composed right-to-left rules roman symbol** is passed as argument, **then** a (2)**composed right-to-left rules roman symbol** is returned.

(1): 4,9,40,90,400,900,

(2): IV,IX,XL,XC,CD,CM

**Compose Left-to-Right Roman Symbol** 

**As** a roman numerals program, **when** a (1)**number with composed left-to-right rules roman symbol** is passed as argument, **then** a (2)**composed left-to-right rules roman symbol** is returned.

(1): 2,3,6,7,8,11,12,13... and the rest of number cases

(2): II,III,VI,VII,VIII,XI,XII,XIII...

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

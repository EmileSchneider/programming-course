# Abstraction

A programming language instructs a computer to perform tasks.
It helps us organize our ideas about processes. To do so it 
provides us with means to combine ideas to form more complex ideas.

Every programming language has the following things:
- primitive expressions

the simplest entities the language is concerned about
- means of combination

by which compound elements are build from simpler ones
- means of abstraction

by which compound elements can be named and manipulated as units.

Programming deals with two kinds of elements: procedures and data.
Data is stuff that we want to manipulate and procedures are descriptions 
of rules on how to mainpulate the data.

For now we will only deal with numerical data, so that we can focus on 
the rules for building procedures.

## Abstraction With Procedures

#### Expressions

Expressions are commands you give to the computer. With the Scheme interpreter
you can put a expression in and the Interpreter is going to evaluate it and 
display the evaluation. 

###### Example
Expression
```scheme
486
```
Output

```486```

Expressions representing numbers may be combined with an expression representing a primitive procedure
(such as + and * ) to form a compund expression.

For example:
```scheme
(+ 137 349)
486
(- 1000 334)
666
(* 5 99)
495
(/ 10 5)
2
(+ 2.7 10)
12.7
```

Expressions which combine several expressions inside ( ... ) are called combinations.
The leftmost element in the list is called the operator, and the other elements are called operands.

There is no limit to the depth of such nesteing:

```scheme 
(+ (* 3 (+ (* 2 4) (+ 3 5))) (+ (- 10 7) 6))
```
What is the result of this expression?

If we follow the formatting convetion knows as pretty-printing, in which each long combination is written so 
that the operands are aligned vertically. The resulting indentations display clearly the structure of the expression.


#### Naming And Enviroment

A critical aspect of a programming language is the means it provides for using names to refer to computational objects. We say that the name identifies a variable whose value is the object.

In Scheme we have a primitive expression to name things ```define```.

```scheme
(define size 2)
```

Now we have associate the value ```2``` to the name ```size```. So now if we type into the Scheme interpreter:
```scheme
size
2
(* 5 size)
10
```
we will get those results.

Further examples:
```scheme
(define pi 3.14159)
(define radius 10)
(* pi (* radius radius))
314.159
(define circumference (* 2 pi radius))
circumference
62.8318
```

#### Compound Procedures

#### Recursion

#### Iterative

#### Big Oh Notation, Time and Space

#### Higher Order Procedures

#### Map

#### lambda



## Abstraction With Data

#### cons

#### car

#### cdr

### Hierachical Data
### Symbolic Data

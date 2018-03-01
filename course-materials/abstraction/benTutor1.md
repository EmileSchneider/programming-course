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

Before we tackle the issue of compound procedures, we need to clarify how the list interpreter is 
evaluation procedures. 
In evaluating combinations the interpreter is itself following a procedure.

- to evaluate a combination, do the following:
  1. evaluate the subexpressions of the combination
  2. apply the procedure that is the value of the leftmost subexpression (the operator) to the arguments that are the values of the other subexpressions (the operands). 
  
We observe that the Evaluation Procedure calls itself. This behavior is called recursion. We will tackle the interesting
aspects of recursion later.
 
#### Compound Procedures

Procedure definition, like name definition is an abstraction technique, altough a much more powerful one.
It helps us give compound operations a name and referre to it as a unit. 

Lets look at an example:

To square something, a given number x for example, means to multipy it by itself.

We can formulate this in Scheme like this
```scheme
(define (square x) (* x x))
```
Now we can use square like this:
```scheme
(square 21)
441

(square (+ 2 5))
49

(square (square 3))
81
```
The general form of a procedure definition is
```scheme
(define (<name> <formal parameters>) <body>)
```

We can even use procedures inside new procedure definitions, for example the sum of squares
can be express as
```scheme
(+ (square x) (square y)
```
We can easily define a procedure sum-of-squares that, given any two numbers as arguments, produces the sum of their squares:
```scheme
(define (sum-of-squares x y)
  (+ (square x) (square y)))

(sum-of-squares 3 4)
25
```

- define a procedure that calculates the pythagoriean theorem

#### Conditional Expressions and Predicates

The expressive power of the class of procedures that we can define at this point is very limited, because we have no way to make tests and to perform different operations depending on the result of a test.

Lets implement a function that computes the absolute of a number.

This means given a number x the functions either returns:
```
x if x > 0;
0 if x = 0;
-x if x < 0;
```

To implement this case analysis we use a special form in lisp called cond.

```scheme
(define (abs x)
  (cond ((> x 0) x)
        ((= x 0) 0)
        ((< x 0) (- x))))
```

The general form of a conditional expression is:

```scheme
(cond (<p1> <e1>)
      (<p2> <e2>)
      
      (<pn> <en>))
```      

Conditional expressions are evaluated as follows. The predicate <p1> is evaluated first. If its value is false, then <p2> is evaluated. If <p2>'s value is also false, then <p3> is evaluated. This process continues until a predicate is found whose value is true, in which case the interpreter returns the value of the corresponding consequent expression <e> of the clause as the value of the conditional expression. If none of the <p>'s is found to be true, the value of the cond is undefined.


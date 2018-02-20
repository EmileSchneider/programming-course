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


#### Example Square Root


#### Procedures as Black Box Abstractions

///Procedural decomposition of the squareroot program.

Each procedure accomplishes an identifiable task that can be used as a module in defining other procedures.

We are not at that moment concerned with how the procedure computes its result, only with the fact that it computes the expected results. The details of how the result is computed can be suppressed, to be considered at a later time.

##### Local names

One detail of a procedure's implementation that should not matter to the user of the procedure is the implementer's choice of names for the procedure's formal parameters. Thus, the following procedures should not be distinguishable:

```scheme
(define (square x) (* x x))

(define (square y) (* y y))
```

The parameter names of a procedure must be local to the body of the procedure.

A formal parameter of a procedure has a very special role in the procedure definition, in that it doesn't matter what name the formal parameter has. Such a name is called a bound variable, and we say that the procedure definition binds its formal parameters.

The meaning of a procedure definition is unchanged if a bound variable is consistently renamed throughout the definition.26 If a variable is not bound, we say that it is free. 

The set of expressions for which a binding defines a name is called the scope of that name. In a procedure definition, the bound variables declared as the formal parameters of the procedure have the body of the procedure as their scope.


#### Big Oh Notation, Time and Space

Let n be a parameter that measures the size of the problem, and let R(n) be the amount of resources the process requires for a problem of size n. In our previous examples we took n to be the number for which a given function is to be computed, but there are other possibilities. For instance, if our goal is to compute an approximation to the square root of a number, we might take n to be the number of digits accuracy required. For matrix multiplication we might take n to be the number of rows in the matrices. In general there are a number of properties of the problem with respect to which it will be desirable to analyze a given process. Similarly, R(n) might measure the number of internal storage registers used, the number of elementary machine operations performed, and so on. In computers that do only a fixed number of operations at a time, the time required will be proportional to the number of elementary machine operations performed.

We say that R(n) has order of growth (f(n)), written R(n) = (f(n)) (pronounced \`theta of f(n)''), if there are positive constants k1 and k2 independent of n such that


for any sufficiently large value of n. (In other words, for large n, the value R(n) is sandwiched between k1f(n) and k2f(n).)

##### Exponentiation 

Consider the problem of computing the exponential of a given number. We would like a procedure that takes as arguments a base b and a positive integer exponent n and computes bn. One way to do this is via the recursive definition


which translates readily into the procedure

```scheme
(define (expt b n)
  (if (= n 0)
      1
      (* b (expt b (- n 1)))))
```


#### Higher Order Procedures

#### Map

#### lambda



## Abstraction With Data

#### cons

#### car

#### cdr

### Hierachical Data
### Symbolic Data

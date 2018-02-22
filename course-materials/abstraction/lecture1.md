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

This is a linear recursive process, which requires (n) steps and (n) space. Just as with factorial, we can readily formulate an equivalent linear iteration:

```scheme
(define (expt b n)
  (expt-iter b n 1))

(define (expt-iter b counter product)
  (if (= counter 0)
      product
      (expt-iter b
                (- counter 1)
                (* b product)))) 
```

This version requires (n) steps and (1) space.

We can compute exponentials in fewer steps by using successive squaring. For instance, rather than computing b8 as


we can compute it using three multiplications:


This method works fine for exponents that are powers of 2. We can also take advantage of successive squaring in computing exponentials in general if we use the rule


We can express this method as a procedure:

```scheme
(define (fast-expt b n)
  (cond ((= n 0) 1)
        ((even? n) (square (fast-expt b (/ n 2))))
        (else (* b (fast-expt b (- n 1))))))
```
where the predicate to test whether an integer is even is defined in terms of the primitive procedure remainder by

(define (even? n)
  (= (remainder n 2) 0))


#### Higher Order Procedures

We have seen that procedures are, in effect, abstractions that describe compound operations on numbers independent of the particular numbers. For example, when we
```scheme
(define (cube x) (* x x x))
```
we are not talking about the cube of a particular number, but rather about a method for obtaining the cube of any number. Of course we could get along without ever defining this procedure, by always writing expressions such as

```scheme
(* 3 3 3)
(* x x x)
(* y y y)        
```

and never mentioning cube explicitly. This would place us at a serious disadvantage, forcing us to work always at the level of the particular operations that happen to be primitives in the language (multiplication, in this case) rather than in terms of higher-level operations. Our programs would be able to compute cubes, but our language would lack the ability to express the concept of cubing. One of the things we should demand from a powerful programming language is the ability to build abstractions by assigning names to common patterns and then to work in terms of the abstractions directly. Procedures provide this ability. This is why all but the most primitive programming languages include mechanisms for defining procedures.

Yet even in numerical processing we will be severely limited in our ability to create abstractions if we are restricted to procedures whose parameters must be numbers. Often the same programming pattern will be used with a number of different procedures. To express such patterns as concepts, we will need to construct procedures that can accept procedures as arguments or return procedures as values. Procedures that manipulate procedures are called higher-order procedures. This section shows how higher-order procedures can serve as powerful abstraction mechanisms, vastly increasing the expressive power of our language.


1.3.1  Procedures as Arguments
Consider the following three procedures. The first computes the sum of the integers from a through b:

```scheme
(define (sum-integers a b)
  (if (> a b)
      0
      (+ a (sum-integers (+ a 1) b))))
```
The second computes the sum of the cubes of the integers in the given range:

```scheme
(define (sum-cubes a b)
  (if (> a b)
      0
      (+ (cube a) (sum-cubes (+ a 1) b))))
```
The third computes the sum of a sequence of terms in the series


which converges to /8 (very slowly):49

```scheme
(define (pi-sum a b)
  (if (> a b)
      0
      (+ (/ 1.0 (* a (+ a 2))) (pi-sum (+ a 4) b))))
```
These three procedures clearly share a common underlying pattern. They are for the most part identical, differing only in the name of the procedure, the function of a used to compute the term to be added, and the function that provides the next value of a. We could generate each of the procedures by filling in slots in the same template:
```scheme
(define (<name> a b)
  (if (> a b)
      0
      (+ (<term> a)
         (<name> (<next> a) b))))
```
The presence of such a common pattern is strong evidence that there is a useful abstraction waiting to be brought to the surface. Indeed, mathematicians long ago identified the abstraction of summation of a series and invented ''sigma notation,'' for example

to express this concept. The power of sigma notation is that it allows mathematicians to deal with the concept of summation itself rather than only with particular sums -- for example, to formulate general results about sums that are independent of the particular series being summed.

Similarly, as program designers, we would like our language to be powerful enough so that we can write a procedure that expresses the concept of summation itself rather than only procedures that compute particular sums. We can do so readily in our procedural language by taking the common template shown above and transforming the 'slots'' into formal parameters:
```scheme

(define (sum term a next b)
  (if (> a b)
      0
      (+ (term a)
         (sum term (next a) next b))))
         ```

Notice that sum takes as its arguments the lower and upper bounds a and b together with the procedures term and next. We can use sum just as we would any procedure. For example, we can use it (along with a procedure inc that increments its argument by 1) to define sum-cubes:

```scheme

(define (inc n) (+ n 1))
(define (sum-cubes a b)
  (sum cube a inc b))
```
Using this, we can compute the sum of the cubes of the integers from 1 to 10:
```scheme
(sum-cubes 1 10)
3025
```
With the aid of an identity procedure to compute the term, we can define sum-integers in terms of sum:
```scheme
(define (identity x) x)

(define (sum-integers a b)
  (sum identity a inc b))
```
Then we can add up the integers from 1 to 10:
```scheme
(sum-integers 1 10)
55
```
We can also define pi-sum in the same way:50
```scheme
(define (pi-sum a b)
  (define (pi-term x)
    (/ 1.0 (* x (+ x 2))))
  (define (pi-next x)
    (+ x 4))
  (sum pi-term a pi-next b))
```
Using these procedures, we can compute an approximation to  :
```scheme
(* 8 (pi-sum 1 1000))
3.139592655589783
```
Once we have sum, we can use it as a building block in formulating further concepts. For instance, the definite integral of a function f between the limits a and b can be approximated numerically using the formula


for small values of dx. We can express this directly as a procedure:
```scheme
(define (integral f a b dx)
  (define (add-dx x) (+ x dx))
  (* (sum f (+ a (/ dx 2.0)) add-dx b)
     dx))
(integral cube 0 1 0.01)
.24998750000000042
(integral cube 0 1 0.001)
.249999875000001
```

(The exact value of the integral of cube between 0 and 1 is 1/4.)
#### Map

#### lambda
it would be more convenient to have a way to directly specify ``the procedure that returns its input incremented by 4'' and ``the procedure that returns the reciprocal of its input times its input plus 2.'' We can do this by introducing the special form lambda, which creates procedures. Using lambda we can describe what we want as
```scheme
(lambda (x) (+ x 4))
```
and
```scheme
(lambda (x) (/ 1.0 (* x (+ x 2))))
```
Then our pi-sum procedure can be expressed without defining any auxiliary procedures as
```scheme
(define (pi-sum a b)
  (sum (lambda (x) (/ 1.0 (* x (+ x 2))))
       a
       (lambda (x) (+ x 4))
       b))
```
Again using lambda, we can write the integral procedure without having to define the auxiliary procedure add-dx:
```scheme
(define (integral f a b dx)
  (* (sum f
          (+ a (/ dx 2.0))
          (lambda (x) (+ x dx))
          b)
     dx))
```
In general, lambda is used to create procedures in the same way as define, except that no name is specified for the procedure:
```scheme
(lambda (<formal-parameters>) <body>)
```
The resulting procedure is just as much a procedure as one that is created using define. The only difference is that it has not been associated with any name in the environment. In fact,

```scheme
(define (plus4 x) (+ x 4))
```
is equivalent to
```scheme
(define plus4 (lambda (x) (+ x 4)))
```
We can read a lambda expression as follows:
```scheme
    (lambda             (x)             (+    x     4))
 ```                                               
 the procedure   of an argument x  that adds  x and 4

Like any expression that has a procedure as its value, a lambda expression can be used as the operator in a combination such as
```scheme
((lambda (x y z) (+ x y (square z))) 1 2 3)
12
```
or, more generally, in any context where we would normally use a procedure name.


## Abstraction With Data

The basic idea of data abstraction is to structure the programs that are to use compound data objects so that they operate on ''abstract data.'' That is, our programs should use data in such a way as to make no assumptions about the data that are not strictly necessary for performing the task at hand. At the same time, a \`\`concrete'' data representation is defined independent of the programs that use the data. The interface between these two parts of our system will be a set of procedures, called selectors and constructors, that implement the abstract data in terms of the concrete representation. To illustrate this technique, we will consider how to design a set of procedures for manipulating rational numbers.

Suppose we want to do arithmetic with rational numbers. We want to be able to add, subtract, multiply, and divide them and to test whether two rational numbers are equal.

Let us begin by assuming that we already have a way of constructing a rational number from a numerator and a denominator. We also assume that, given a rational number, we have a way of extracting (or selecting) its numerator and its denominator. Let us further assume that the constructor and selectors are available as procedures:

- (make-rat <n> <d>) returns the rational number whose numerator is the integer <n> and whose denominator is the integer <d>.

- (numer <x>) returns the numerator of the rational number <x>.

- (denom <x>) returns the denominator of the rational number <x>
  
 We are using here a powerful strategy of synthesis: wishful thinking. We haven't yet said how a rational number is represented, or how the procedures numer, denom, and make-rat should be implemented. Even so, if we did have these three procedures, we could then add, subtract, multiply, divide, and test equality by using the following relations:


//images



We can express these rules as procedures:


```scheme
(define (add-rat x y)
  (make-rat (+ (* (numer x) (denom y))
               (* (numer y) (denom x)))
            (* (denom x) (denom y))))
(define (sub-rat x y)
  (make-rat (- (* (numer x) (denom y))
               (* (numer y) (denom x)))
            (* (denom x) (denom y))))
(define (mul-rat x y)
  (make-rat (* (numer x) (numer y))
            (* (denom x) (denom y))))
(define (div-rat x y)
  (make-rat (* (numer x) (denom y))
            (* (denom x) (numer y))))
(define (equal-rat? x y)
  (= (* (numer x) (denom y))
     (* (numer y) (denom x))))
```

Now we have the operations on rational numbers defined in terms of the selector and constructor procedures numer, denom, and make-rat. But we haven't yet defined these. What we need is some way to glue together a numerator and a denominator to form a rational number.
 
### Pairs 

To enable us to implement the concrete level of our data abstraction, our language provides a compound structure called a pair, which can be constructed with the primitive procedure cons. This procedure takes two arguments and returns a compound data object that contains the two arguments as parts. Given a pair, we can extract the parts using the primitive procedures car and cdr.2 Thus, we can use cons, car, and cdr as follows:

```scheme
(define x (cons 1 2))

(car x)
1

(cdr x)
2
```

 Consider the notion of a pair, which we used in order to define our rational numbers. We never actually said what a pair was, only that the language supplied procedures cons, car, and cdr for operating on pairs. But the only thing we need to know about these three operations is that if we glue two objects together using cons we can retrieve the objects using car and cdr. That is, the operations satisfy the condition that, for any objects x and y, if z is (cons x y) then (car z) is x and (cdr z) is y. Indeed, we mentioned that these three procedures are included as primitives in our language. However, any triple of procedures that satisfies the above condition can be used as the basis for implementing pairs. This point is illustrated strikingly by the fact that we could implement cons, car, and cdr without using any data structures at all but only using procedures. Here are the definitions:

```scheme
(define (cons x y)
  (define (dispatch m)
    (cond ((= m 0) x)
          ((= m 1) y)
          (else (error "Argument not 0 or 1 -- CONS" m))))
  dispatch)

(define (car z) (z 0))

(define (cdr z) (z 1))
```

This use of procedures corresponds to nothing like our intuitive notion of what data should be. Nevertheless, all we need to do to show that this is a valid way to represent pairs is to verify that these procedures satisfy the condition given above.

### Hierachical Data

#### Closure Property

The ability to create pairs whose elements are pairs is the essence of list structure's importance as a representational tool. We refer to this ability as the closure property of cons. In general, an operation for combining data objects satisfies the closure property if the results of combining things with that operation can themselves be combined using the same operation.6 Closure is the key to power in any means of combination because it permits us to create hierarchical structures -- structures made up of parts, which themselves are made up of parts, and so on

One of the useful structures we can build with pairs is a sequence -- an ordered collection of data objects. There are, of course, many ways to represent sequences in terms of pairs. One particularly straightforward representation is illustrated in figure 2.4, where the sequence 1, 2, 3, 4 is represented as a chain of pairs. The car of each pair is the corresponding item in the chain, and the cdr of the pair is the next pair in the chain. The cdr of the final pair signals the end of the sequence by pointing to a distinguished value that is not a pair, represented in box-and-pointer diagrams as a diagonal line and in programs as the value of the variable nil. The entire sequence is constructed by nested cons operations:

```scheme
(cons 1
      (cons 2
            (cons 3
                  (cons 4 nil))))
```
### Symbolic Data

All the compound data objects we have used so far were constructed ultimately from numbers. In this section we extend the representational capability of our language by introducing the ability to work with arbitrary symbols as data.

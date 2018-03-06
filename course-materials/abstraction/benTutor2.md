# Procedures as Black Box Abstractions

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
```scheme
(define (even? n)
  (= (remainder n 2) 0))
```

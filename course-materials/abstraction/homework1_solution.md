# Homework 1 Solutions

## Calcuation of he square root

Now let's formalize the process in terms of procedures. We start with a value for the radicand (the number whose square root we are trying to compute) and a value for the guess. If the guess is good enough for our purposes, we are done; if not, we must repeat the process with an improved guess. We write this basic strategy as a procedure:
```scheme
(define (sqrt-iter guess x)
  (if (good-enough? guess x)
      guess
      (sqrt-iter (improve guess x)
                 x)))
```
A guess is improved by averaging it with the quotient of the radicand and the old guess:
```scheme
(define (improve guess x)
  (average guess (/ x guess)))
```
where
```scheme
(define (average x y)
  (/ (+ x y) 2))
```
We also have to say what we mean by \`\`good enough.'' The following will do for illustration, but it is not really a very good test.The idea is to improve the answer until it is close enough so that its square differs from the radicand by less than a predetermined tolerance (here 0.001):
```scheme
(define (good-enough? guess x)
  (< (abs (- (square guess) x)) 0.001))
```
Finally, we need a way to get started. For instance, we can always guess that the square root of any number is 1:
```scheme
(define (sqrt x)
  (sqrt-iter 1.0 x))
```
If we type these definitions to the interpreter, we can use sqrt just as we can use any procedure:
```scheme
(sqrt 9)
3.00009155413138
(sqrt (+ 100 37))
11.704699917758145
(sqrt (+ (sqrt 2) (sqrt 3)))
1.7739279023207892
(square (sqrt 1000))
1000.000369924366
```
The sqrt program also illustrates that the simple procedural language we have introduced so far is sufficient for writing any purely numerical program that one could write in, say, C or Pascal. This might seem surprising, since we have not included in our language any iterative (looping) constructs that direct the computer to do something over and over again. Sqrt-iter, on the other hand, demonstrates how iteration can be accomplished using no special construct other than the ordinary ability to call a procedure.

# Homework

How does one compute square roots? The most common way is to use Newton's method of successive approximations, which says that whenever we have a guess y for the value of the square root of a number x, we can perform a simple manipulation to get a better guess (one closer to the actual square root) by averaging y with x/y. For example, we can compute the square root of 2 as follows. Suppose our initial guess is 1:


Guess	|| Quotient ||	  Average
  
1	  ||  (2/1) = 2	 || ((2 + 1)/2) = 1.5
  
1.5	 || (2/1.5) = 1.3333	|| ((1.3333 + 1.5)/2) = 1.4167
  
1.4167 ||	2/1.4167) = 1.4118 ||	((1.4167 + 1.4118)/2) = 1.4142
  
1.4142	|| ...	|| ...

## Define a procedure that implements Newtons Square Root Algorithm


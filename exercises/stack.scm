(define nil 'stop)
(define (build-stack a b)
  (cons a (cons b nil)))

(define (iteratestack stack)
  	(cond (= 'stop (cdr stack))
          (car stack)
          (iteratestack (cdr stack)))) 

   
(define (push stack e)
  (cons stack e))

(define (pop stack)
  (car stack))



(define x (build-stack 1 2))

(iteratestack x) 

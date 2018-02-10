const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});


app.get('api/presentation/markdown', (req, res) => {
  res.send({ markdonw: '# First Text \n\n This is the first text'});
});

app.get('api/presentation/code', (req, res) => {
  res.send({ code: '(define (sqaure x) (* x x))'});
});


app.get('api/roadmap/lectures', (req, res) => {
  res.json({
    first: {
      header: 'Abstraction',
      1: 'procedures',
      2: 'recursion',
      3: 'data',
      4: 'pair',
      5: 'glue',
    },
    second: {
      header: 'Algorithm and Datastructure',
      1: 'List',
      2: 'Array',
      3: 'Graph',
      4: 'Sort',
      5: 'Search',
    },
    third: {
      header: 'State, OOP and Software Design',
      1: 'State',
      2: 'OOP',
      3: 'Design Pattern',
    }
  });
})

app.listen(port, () => console.log(`Listening on port ${port}`));

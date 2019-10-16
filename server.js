const express = require('express');

const app = express();
const port = 8080;

const books = [
    {
        id: 1,
        title: 'Kot detektyw',
        description: 'Very interested book',
        author: 'Tomasz Polak'
    },
    {
        id: 2,
        title: 'Kod Da Vinchi',
        description: 'Very interested book 2',
        author: 'Dan Broun'
    },
    {
        id: 3,
        title: 'Vinney-Puh',
        description: 'Very interested book 3',
        author: 'Alexander Miln'
    },
    {
        id: 4,
        title: 'Harry Potter',
        description: 'Very interested book 4',
        author: 'Joanne Rowling'
    },
    {
        id: 5,
        title: 'Kafka',
        description: 'Very interested book 5',
        author: 'Haruki Murakami'
    },
    {
        id: 6,
        title: 'The dark tower',
        description: 'Very interested book 6',
        author: 'Steven King'
    },
    {
        id: 7,
        title: 'Sherlock Holmes and Dr Watson',
        description: 'Very interested book 7',
        author: 'Arthur Konan Dowle'
    }
];
app.get('/books', (req, res) => res.json({items: books, totalCount: books.length}));


app.listen(port, () => {
    console.log(
        'App is running at port 8080',
    );
});
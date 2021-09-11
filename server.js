const express = require('express')
const app = express()

app.listen(3000, function() {

    console.log('server running on port 3000')
})

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.post('/show', (req, res) => {
    console.log('Hello again..')
})
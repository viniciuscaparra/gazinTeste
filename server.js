const express = require('express')
const app = express()

app.listen(3000, function() {

    console.log('server running on port 3000')
})

app.set('view engine', 'ejs')

app.use('/assets', express.static(__dirname + '/assets'))
app.use('/', express.static(__dirname + '/views'))

app.post('/show', (req, res) => {
    console.log('Hello again..')
})
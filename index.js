//Importar una librería para .env
const express = require('express')
require('dotenv').config() //Va al proyecto y va al .env
const movieJson = require('./movies.json')
// console.log('Contraseña de Spotify', process.env.SPOTIFY_PASSWORD)
const app = express()

app.use(express.json)
//END POINT
//Va ha haber variable del slash
app.get('/movies', (req, res){
    const searchValue = req.query.title
    const movies = moviesJson
    movies.movies.filter(movie => movie.title.toLowerCase().includes(searchValue.toLocaleLowerCase()))
})

app.get('/:name', (req, res) => {
    console.log(req.query)
    const name = req.params.name
    res.json({message: `Hola ${name} desde express`})
    //res.send('Hola mundo desde el endpoint')
}) 


//No espera variable
app.get('/', (req, res) =>{
    const name = req.query.name || 'mundo' //Setear mundo
    //console.log(req.query)
    res.json({message: `Hola ${name} desde Express`})
    //res.send('Hola mundo desde el endpoint')
}) //requeste y response

const portito = process.env.PORT || 3001

app.post('/', (req, res) => {
    const body = req.body
    res.json(body)
})

app.listen(portito, () => {
    console.log(`Express App running port ${portito}`)
})
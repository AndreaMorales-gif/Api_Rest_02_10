const { Router } = require("express");
const path = require("path");
const router = Router();


const _= require('underscore');
const movies = require('../Asistencia.json')

router.get('/', (req, res) => {
    res.send('<h1>Hola clase</h1>')
})

router.get('/movies', (req,res)=>{
    res.json(movies)
})

router.post('/movies', (req,res)=>{
    const {Titulo, Director, Categoria, Ano} = req.body;

    if(Titulo && Director && Categoria && Ano){
        const id = movies.length + 1;
        const newMovie = {id,...req.body}
        movies.push(newMovie);
        console.log(movies);
        res.json(movies)
    }else{
        res.send('Error al almacenar información')
    }
    console.log(req.body)
});

router.put('/movies/:id', (req, res)=> {
    const {Titulo, Director, Categoria, Ano} = req.body;
    const{id}= req.params;

    if(Titulo && Director && Categoria && Ano){
        _.each(movies,(movie, i)=>{
            if (movie.id=id){
                movie.Titulo = Titulo;
                movie.Director = Director;
                movie.Categoria = Categoria;
                movie.Ano = Ano;
            }
        })
        res.json(movies)
    }
    else{
        res.send ('Error de actualización de información')
    }
    console.log(req.body)
})  

router.delete('/movies/:id', (req, res) => {
    const { id } = req.params;
    _.each(movies,(movie,i)=>{
      if(movie.id==id){
        movies.splice(i,1)
      }
    })
    res.json(movies)
  });

module.exports= router;

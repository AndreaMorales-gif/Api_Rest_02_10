const { Router } = require("express");
const path = require("path");
const router = Router();


const _= require('underscore');
const Asistencia = require('../Asistencia.json')

router.get('/', (req, res) => {
    res.send('<h1>Hola clase</h1>')
})

router.get('/Asistencia', (req,res)=>{
    res.json(Asistencia)
})

router.post('/Asistencia', (req,res)=>{
    const {Nombre_Estudiante, Grado, email, QR, Fecha} = req.body;

    if(Nombre_Estudiante && Grado && email && QR && Fecha ){
        const id = Asistencia.length + 1;
        const newAsistencia = {id,...req.body}
        Asistencia.push(newAsistencia);
        console.log(Asistencia);
        res.json(Asistencia)
    }else{
        res.send('Error al almacenar información')
    }
    console.log(req.body)
});

router.put('/Asistencia/:id', (req, res)=> {
    const {Nombre_Estudiante, Grado, email, QR, Fecha} = req.body;
    const{id}= req.params;

    if(Nombre_Estudiante && Grado && email && QR && Fecha){
        _.each(Asistencia,(Asistencia, i)=>{
            if (Asistencia.id=id){
                Asistencia.Nombre_Estudiante = Nombre_Estudiante;
                Asistencia.Grado = Grado;
                Asistencia.email = email;
                Asistencia.QR = QR;
                Asistencia.Fecha = Fecha;
            }
        })
        res.json(Asistencia)
    }
    else{
        res.send ('Error de actualización de información')
    }
    console.log(req.body)
})  

router.delete('/Asistencia/:id', (req, res) => {
    const { id } = req.params;
    _.each(Asistencia,(Asistencia,i)=>{
      if(Asistencia.id==id){
        Asistencia.splice(i,1)
      }
    })
    res.json(Asistencia)
  });

module.exports= router;

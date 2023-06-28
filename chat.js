function hola(nombre){
    return new Promise(function(res,rej){
        setTimeout(function(){
            console.log('Hola ' + nombre)
            res(nombre)
            rej('hay un error')
        },1000)
    })
}
function hablar(nombre){
    return new Promise((res,rej)=>{
        console.log('como estas ' + nombre)
        res(nombre)
        rej(' no te entiendo ...')
    },1000)
}

let nombre = 'César'

hola(nombre)
    .then(hablar)
    .then((nombre)=>console.log('adios ' + nombre))
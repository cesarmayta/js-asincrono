console.log('tarea 1')

let i = 1
var id = setInterval(function(){
    i++;
    if(i === 5){
        clearInterval(id)
    }
    console.log('tarea ' + i)
},1000)
console.log('terminamos las tareas')
function ejecutando(tarea){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log('tarea :' + tarea)
            resolve(tarea)
            reject('hay un error')
        }, 1000);
    })
}

/*ejecutando('hacer mi cama').then(
    (tarea)=>console.log('termine mi tarea :' + tarea)
)*/

async function tareas(){
    let tarea = await ejecutando('hacer mi cama')
    console.log('termine mi tarea : ' + tarea)
}

tareas()



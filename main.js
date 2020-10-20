const url = 'https://randomuser.me/api/?results=100'

fetch(url)
.then(res => res.json())
.then(data => {   
    //creamos el array de hombres con el filter
    var hombre = data.results.filter(element => element.gender === 'male')
    //ordenamos el array de hombres por edad
    hombre.sort(function(a, b){
        return (a.dob.age - b.dob.age)
    })   
    //imprimir solo la edad de cada registro (opcional) 
    /* for (let index = 0; index < hombre.length; index++) {        
        const element = hombre[index]
        console.log(index+1 + ' - ' + element.dob.age)             
    } */
    console.log('array de hombres ordenados por edad ASC')
    console.log(hombre)

    //creamos el array de mujeres con el filter
    var mujer = data.results.filter(element => element.gender === 'female')
    //ordenamos el array de mujeres por email
    mujer.sort(function(a, b){        
        if (a.email > b.email) {
            return -1;
        }
        if (a.email < b.email) {
            return 1;
        }        
        return 0;
    })  
    //imprimir solo el email de cada registro (opcional) 
    /* for (let index = 0; index < mujer.length; index++) {        
        const element = mujer[index]
        console.log(index+1 + ' - ' + element.email)             
    } */
    console.log('array de mujeres ordenados por email DESC')
    console.log(mujer)
})
.catch(err => console.log(err))


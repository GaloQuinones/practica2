const libros=[
    {
    id:1,
    titulo:'Aprendiendo javaScript'
    },
    {
    id:2,
    titulo:'HTML para principiantes'
    }
    ]
    //• Crear una función para buscar un elemento de arreglo libro que reciba como parámetro una función o callback
    function buscarPorId(id,callback)
    {
    const libro= libros.find((libro)=>
    libro.id===id
    )
    if (!libro)
    {
    const error= new Error();
    error.message='Libro no encontrado'
    return callback(error);
    }
    callback(null, libro);
    //• Llamemos la función utilizando en el callback una función flecha que devuelva por consola el libro retornado
buscarPorId(12, (err,libro)=>{
if (err)
{
return console.log ( err.message)
}
return console.log ( libro)
//• Para que nuestro problema sea más representativo vamos a adicionar un arreglo de autores
const autores=[
{
id:1,
nombre:'john'
},
{
id:2,
nombre:'pedro'
}
]
function buscarAutorPorId(id,callback)
{
const autor= autores.find((autor)=>
autor.id===id
)
if (!autor)
{
const error= new Error();
error.message='Libro no encontrado'
return callback(error);
}
callback(null, autor);
}
//• Luego para comprender el problema del callback hell invocamos las 2 funciones
buscarLibroPorId(3, (err,libro)=>{
if (err)
{
return console.log ( err.message)
}
buscarAutorPorId(libro.id, (err,autor)=>{
if (err)
{
return console.log(err.message)
}
console.log(`El libro ${libro.titulo} fue escrito por ${autor.nombre}`)
} )
});
//• Para mejorar la estructura de nuestro código y evitar el callback hell ahora vamos a convertir nuestras funciones
para que devuelvan promesas
function buscarLibroPorId(id)
{
return new Promise((resolve,reject)=>{
const libro= libros.find((libro)=>
libro.id===id
)
if (!libro)
{
const error= new Error();
error.message='Libro no encontrado'
reject(error);
}
resolve(libro);
})
}

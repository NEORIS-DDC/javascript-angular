// esto es lo mismo que utilizar una funcion que posteriormente la tengo que incluir en el on-load
(function () {


    //Creamos nuestro primer prototipo
    function persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    // para crear una variable se escribe previamente el prefijo var
    var p1 = new persona('dante', 'panella', 37);

    console.log(p1.nombre);
    console.log(p1.apellido);
    console.log(p1.edad);

    //indexacion entre el elemento html y mi codigo javascript
    var elemento = document.getElementById('campo');
    console.log(elemento);
    elemento.value=p1.nombre;
    

})();
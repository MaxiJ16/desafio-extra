# desafio-extra
Desafío Extra Promesas - Módulo 2

Construir un programa teniendo en cuenta las siguientes consignas:

* En un archivo models.ts, creá:
  una clase Product que tenga id y name (puede tener más propiedades)
  una clase ProductCollection con dos métodos:
    getAll() que devuelve todos los productos
    getById(id:number) que devuelve el producto con el id ingresado.
    
* En un archivo controllers.ts, creá:
  una clase ProductController, que deberá tener:
    un constructor donde se va a instanciar la clase ProductCollection.
    un método processOptions(option) que, si tiene la propiedad search devuelva el método getById(id:number), sino tiene que devolver getAll().
    
* En un archivo index.ts:
  parseá los argumentos que llegan por terminal con minimist.
  instanciá ProductController para invocar el método processOptions.
  mostrá el resultado por la terminal.

import * as jsonfile from "jsonfile";

class Product {
  id: number;
  name: string;
}

class ProductCollection {
  getAll(){
    return jsonfile.readFile("./productos.json").then(((productos) => {
      return productos;
    }));
  };

  getById(id:number){
    return this.getAll().then((producto) => {
      return producto.find(prod => prod.id == id );
    });
  };
}

// const prueba = new ProductCollection();

// prueba.getAll().then((prod) => {
//   console.log(prod)
// })

// prueba.getById(4).then((producto) => {
//    console.log(producto)
// })

export { Product, ProductCollection }
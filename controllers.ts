import { Product, ProductCollection} from "./models";

class ProductController {
  constructor () {
    this.productos = new ProductCollection();
  }
  productos: ProductCollection;

  processOptions(option){
    if(option.search){
      return this.productos.getById(option.search);
    } else {
      return this.productos.getAll();
    };
  };
}


export { ProductController };
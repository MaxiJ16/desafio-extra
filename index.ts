import * as minimist from "minimist";
import { ProductController } from "./controllers";

function parsearArgumentos(argv){
  const resultadoMinimist = minimist(argv);

  if(resultadoMinimist.search ){
    return { search : resultadoMinimist.search };
  } else {
    return {};
  };
}

function main(){
  const argumentos = process.argv.slice(2);
  const argumentosParseados = parsearArgumentos(argumentos);

  const controller = new ProductController();

  controller.processOptions(argumentosParseados).then(res => {
    console.log(res);
  });
}

main();
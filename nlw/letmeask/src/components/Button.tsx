// no react sempre camel case
// estado é sempre criado como const
// imutabilidade a ppartir de um momento que uma variavel foi criada dentro de um estado de um componente ela nao 
// sofre mudança alteração. Criamos uma nova baseada no valor anterior
// nao modifica informações cria nova. Atinge maior performace

import { useState } from "react";

type ButtonProps = {
text?: string;
}

export function Button(props: ButtonProps){
 return(
     <button>{props.text || 'Default'}</button>
    )
    }

   // export  function Button (){
     //   const [counter, setCounter] = useState(0)
  //  }

    //function increment(){
      //  setCounter(counter + 1);
    //}

    //return{
      //  <button onClick={increment}>
    //{counter}
    //</button>
    //}


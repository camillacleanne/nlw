import { Button } from './components/Button';
// dentro das propriedades pode enviar texto numero
// children propriedade que todo conteudo do componente tem acesso p iv span é acessado por la  tudo que envia no button
// component no react é uma função que devolve um html
// component e propriedade consegue construir qualuqer interface componentizada
// da vida, faz a interface ser manipulado pelo user
// informação mantida pelo componente, informação alterada pelo usuario 
// informação que muda o valor durante uso
function App() {
  return (
  <div> 
    <Button text="Botão 1"/>
    <Button text="Botão 2"/>
    <Button text="Botão 3"/>
    <Button />


  </div>
  );
}

export default App;

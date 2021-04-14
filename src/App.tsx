import { useState } from 'react';
import './styles/App.css';
import * as ReactBootStrap from 'react-bootstrap'

type Cep = {
  bairro: string,
  cep: string,
  complemento: string,
  ddd: string,
  gia: string,
  ibge: string,
  localidade: string,
  logradouro: string,
  siafi: string
  uf: string,
}


function App() {
  let dados; 
  let dado: any;

  const [dadoss, setDadoss] = useState(dado);
  const [loading, setLoading] = useState(false);

  async function getData(value: any) {
    const data = await fetch(`https://viacep.com.br/ws/${value}/json/`);
    return await data.json()
}

  function onblur(ev: any) {
    const { value } = ev.target;
    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8 || cep === '') {
      setLoading(false)
      return;
    }

    (async () => {
      dados = await getData(cep);
      setLoading(true)
      setDadoss(dados.localidade)
  })();
  }

  return (
    <div className="App">
      <p className="texto">Insira um cep válido!</p>
      <input className="input" type="text" onChange={(ev) =>  onblur(ev)} />
      <div className="cep">
        
        {loading ? 'ESTE CEP É VÁLIDO, LOCALIDADE: ' + dadoss : <ReactBootStrap.Spinner animation="border" />}

      </div>
    </div>
  );
}

export default App;

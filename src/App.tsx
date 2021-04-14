import { useState } from "react";
import "./styles/App.css";
import * as ReactBootStrap from "react-bootstrap";
import Cep from "./interface/app.utils";

function App() {
  let dados: Cep;
  let dado: any;

  const [datas, setDatas] = useState(dado);
  const [loading, setLoading] = useState(false);

  async function getData(value: any) {
    const data = await fetch(`https://viacep.com.br/ws/${value}/json/`);
    return await data.json();
  }

  function onblur(ev: any) {
    const { value } = ev.target;
    const cep = value?.replace(/[^0-9]/g, "");

    if (cep?.length !== 8 || cep === "") {
      setLoading(false);
      return;
    }

    (async () => {
      dados = await getData(cep);
      setLoading(true);
      setDatas(dados.localidade);
    })();
  }

  return (
    <div className="App">
      <p className="texto">Insert a cep valid!</p>
      <input className="input" maxLength={8} type="text" onChange={(ev) => onblur(ev)} />
      <div className="cep">
        {loading && datas !== 'undefined' ? (
          "THE CEP LOCATE IS: " + datas
        ) : (
          <ReactBootStrap.Spinner animation="border" />
        )}
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./styles/App.css";
import * as ReactBootStrap from "react-bootstrap";
import Cep from "./interface/app.utils";

function App() {
  let dados: Cep;
  let dado: any;

  const [datas, setDatas] = useState<Cep | null>(null);
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
      setDatas(dados);
    })();
  }

  return (
    <div className="App">
      <p className="texto">Insert a cep valid!</p>
      <input
        className="input"
        maxLength={8}
        type="text"
        onChange={(ev) => onblur(ev)}
      />
      <div className="cep"></div>
      <div className="cep">
        {loading && datas?.cep !== "undefined" ? (
          <>
            <b>CEP: </b> {datas?.cep} <br />
            <b>BAIRRO: </b> {datas?.bairro} <br />
            <b>COMPLEMENTO: </b> {datas?.complemento} <br />
            <b>DDD: </b> {datas?.ddd} <br />
            <b>GIA: </b> {datas?.gia} <br />
            <b>IBGE: </b> {datas?.ibge} <br />
            <b>LOCALIDADE: </b> {datas?.localidade} <br />
            <b>SIAFI: </b> {datas?.siafi} <br />
            <b>UF: </b> {datas?.uf} <br />
          </>
        ) : (
          <ReactBootStrap.Spinner animation="border" />
        )}
      </div>
    </div>
  );
}

export default App;

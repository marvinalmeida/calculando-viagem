import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [camp1, setCamp1] = useState()
  const [camp2, setCamp2] = useState()
  const [combustivel, setCombustivel] = useState()
  const [resultado, setResultado] = useState('')
  const [alerta, setAlerta] = useState('')

  const calcular = () => {
    if (!camp1 || !camp2 || !combustivel === !resultado) {
      setAlerta(window.alert(`preencha todos os campos corretamente`))
    } else {
      setResultado(((+camp1 / +camp2) * combustivel).toFixed(2))
    }
  }

  const limparResultado = () => {
    setCamp1('')
    setCamp2('')
    setCombustivel('')
    setResultado('')
    setAlerta('')
  }

  return (
    <div className="container">
      <div className="img-titulo">
        <h1 className="title">Calcule seu percurso</h1>
        <img src="./mapa-rodoviario-para.jpg" alt="mapa" />
      </div>

      <div className="inputs">
        <h3>kms a percorrer</h3>
        <input
          className="input"
          onChange={({ target }) => setCamp1(target.value)}
          value={camp1}
          type="text"
        />

        <h3>Litros por km</h3>
        <input
          className="input"
          onChange={({ target }) => setCamp2(target.value)}
          value={camp2}
          type="text"
        />
        <h3>Preço do combustivel</h3>
        <input
          className="input"
          onChange={({ target }) => setCombustivel(target.value)}
          value={combustivel}
          type="text"
        />
      </div>
      <div className="button-resultado">
        <div>
          <button className="button" onClick={calcular}>
            Calcular
          </button>
          <button className="button" onClick={limparResultado}>
            Limpar
          </button>
        </div>
        <div className="resultados">
          {resultado ? (
            <>
              <span>{`O valor da sua viagem é de: R$${resultado} reais`}</span>
            </>
          ) : (
            ''
          )}
          <span>{alerta}</span>
        </div>
      </div>
    </div>
  )
}

export default App

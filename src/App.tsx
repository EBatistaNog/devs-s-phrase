import { useState } from 'react'
import './App.css'
import logoImg from './assets/logo.png'
import { allFrases } from './data/phrases'

function App() {
  const [textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index)
  }

  function gerarFrase() {
    const frasesCategoria = allFrases[categoriaSelecionada].frases
    const numeroAleatorio = Math.floor(Math.random() * frasesCategoria.length)
    setTextoFrase(`"${frasesCategoria[numeroAleatorio]}"`)
  }

  return (
    <div className="container">
      <img
        alt="Logo frases"
        src={logoImg}
        className="logo"
      />

      <h2 className="title">Categorias</h2>
      <section className="category-area">
        {allFrases.map((item, index) => (
          <button 
            key={item.id}
            className="category-button"
            style={{ 
              borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4db"
            }}
            onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button className="button-frase" onClick={gerarFrase}>Gerar frase</button>

      {textoFrase !== '' && <p className="textoFrase">{textoFrase}</p>}
    </div>
  )
}

export default App

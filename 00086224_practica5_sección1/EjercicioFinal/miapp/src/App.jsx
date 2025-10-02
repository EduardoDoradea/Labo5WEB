import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const cientificos = [{
    nombre: "Maria Sklodowska-Curie",
    profesion: "física y química",
    premios: `4(Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Mattebucci)`,
    descubrio: "polonio (elemento químico)",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Marie_Curie_%281900%29.jpg/330px-Marie_Curie_%281900%29.jpg"
  },
  {
    nombre: "Katsuko Saruhashi",
    profesion: "geoquímica",
    premios: `2(Premio Miyake de geoquímica, Premio Tanaka)`,
    descubrio: `un método para medir el dióxido de carbono en el agua de mar`,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Josei-Kyoyo-1965-March-1.jpg/330px-Josei-Kyoyo-1965-March-1.jpg"
  }];

  return (
    <>
      <div>
        <h1><strong>Científicos Notables</strong></h1>
        <div className="contenedorCientificos">
          <h1><strong>{cientificos[0].nombre}</strong></h1>
          <img src={cientificos[0].imagen}></img>
          <ul>
            <li><strong>Profesión:</strong> {cientificos[0].profesion}</li>
            <li><strong>Premios:</strong> {cientificos[0].premios}</li>
            <li><strong>Descubrió:</strong> {cientificos[0].descubrio}</li>
          </ul>
        </div>
        <hr></hr>
          <div className="contenedorCientificos">
            <h1><strong>{cientificos[1].nombre}</strong></h1>
            <img src={cientificos[1].imagen}></img>
            <ul>
              <li><strong>Profesión:</strong> {cientificos[1].profesion}</li>
              <li><strong>Premios:</strong> {cientificos[1].premios}</li>
              <li><strong>Descubrió:</strong> {cientificos[1].descubrio}</li>
            </ul>
          </div>
      </div>
    </>
  )
}

export default App


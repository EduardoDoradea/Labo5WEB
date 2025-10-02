import { useState } from 'react'
import './App.css'

// Array de cientificos
const cientificos = [
  {
    nombre: "Maria Sklodowska-Curie",
    profesion: "física y química",
    premios: "4 (Premio Nobel de Física, Premio Nobel de Química, Medalla Davy, Medalla Mattebucci)",
    descubrio: "polonio (elemento químico)",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Marie_Curie_%281900%29.jpg/330px-Marie_Curie_%281900%29.jpg"
  },
  {
    nombre: "Katsuko Saruhashi",
    profesion: "geoquímica",
    premios: "2 (Premio Miyake de geoquímica, Premio Tanaka)",
    descubrio: "un método para medir el dióxido de carbono en el agua de mar",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Josei-Kyoyo-1965-March-1.jpg/330px-Josei-Kyoyo-1965-March-1.jpg"
  }
]

//Esta funcion almacena la informacion del cientifico y la muestra en formato html
function TarjetaCientifico({ cientifico }) {
  return (
    <div className="contenedorCientificos">
      <h1><strong>{cientifico.nombre}</strong></h1>
      <img src={cientifico.imagen} alt={cientifico.nombre} />
      <ul>
        <li><strong>Profesión:</strong> {cientifico.profesion}</li>
        <li><strong>Premios:</strong> {cientifico.premios}</li>
        <li><strong>Descubrió:</strong> {cientifico.descubrio}</li>
      </ul>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1><strong>Científicos Notables</strong></h1>
      //Mostramos los datos del cientifico en x posicion con el formato de la funcion que se creo anteriormente
      <TarjetaCientifico cientifico={cientificos[0]} />
      <hr />
      <TarjetaCientifico cientifico={cientificos[1]} />
    </>
  )
}

export default App

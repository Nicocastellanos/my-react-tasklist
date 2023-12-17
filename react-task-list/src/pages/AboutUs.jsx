import React from 'react'
import '../css/path.css'

export default function AboutUs() {
  return (
    <div className='about'>
        <h1 className='title-about'>Taski <span><img src="./src/img/taski.png" alt="taski" className='icon-taski' /></span></h1>
        <p className='p-about'> Taski App es una aplicacion de tareas, donde se te permite organizar mejor tu dia creando y poniendo las acividades que tienes que hacer en el dia.
            Ademas de esto la apliacion cuenta con una interfaz muy facil de entender y amigable con el usuario, por lo que no tendras complicaciones al momento de crear 
            tus tareas.  
        </p>
        <p className='p-about2'>Esta aplicacion fue creada con:</p>
        <ul className='ul-about'>
          <li>React: Haciendo uso de los diferentes hooks para agregar funcionalidades</li>
          <li>CSS: Se uso para agregarle diseño y animaciones a la pagina web</li>
          <li>JavaScript y HTML: Aunque estos dos se usaron con react, no obstante con estos dos se dio estructura y dinamismo a la pagina</li>
          <li>Chakra: Tambien se uso para agregar diseño a la pagina y para crear un poco de interacion y dinamismo</li>
          <li>react-router-dom: se uso para hacer uso de las rutas y que el usuario pueda visualizar los diferentes contenidos</li>
        </ul>
    </div>
  )
}

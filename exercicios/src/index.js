import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './componentes/Primeiro'
import Bomdia from './componentes/Bomdia'

import Multi,{ BoaNoite } from './componentes/Multiplos'

//import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Nikinho" sobrenome="dovrau">
            <Filho nome="Pedro"/>
            <Filho nome="Nik"/>
            <Filho nome="Thaisa"/>
        </Pai>
    </div> 
    ,document.getElementById('root'))
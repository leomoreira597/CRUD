import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botão";
import Entrada from "./Entrada";

interface FormularioProps{
    cliente: Cliente
}

export default function Formulario(props:FormularioProps){

    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente.id ?? 0)

    return(
        <div>
            {id ? (
                <Entrada texto="Codigo" valor={id} somenteLeitura/>
            ) : false}
            <Entrada texto="Nome" valor={nome} valorMudou={setNome}/>
            <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setIdade}/>
            <div className="flex justify-end mt-7">
                <Botao className="mr-2">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao>
                    Cancelar    
                </Botao>
            </div> 
        </div>
    );
}
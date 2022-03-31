import { useState } from "react";
import Botao from "../components/Botão";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import React from "react";


export default function Home() {

  const clientes = [
    new Cliente('Ana',34, '1'),
    new Cliente('Bia',24, '2'),
    new Cliente('Ronaldo',54, '3'),
    new Cliente('Yugi',17, '4'),
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente){
    console.log(`Exclir...... ${cliente.nome}`)
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
  }

  const [visivel, setVisivel] = useState<'tabela' | 'form'> ('tabela')

  return (
    <div className={`
     flex justify-center items-center h-screen
     bg-gradient-to-r from-blue-500 to-purple-500
     text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <React.Fragment>
          <div className="flex justify-end">
            <Botao className="mb-4"
              onClick={() => setVisivel('form')}>
                 Novo Cliente
              </Botao>
          </div>
          <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}/>
        </React.Fragment>
        ) : (
          <Formulario cliente={clientes[0]}
            cancelado={() => setVisivel('tabela')}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  )
}

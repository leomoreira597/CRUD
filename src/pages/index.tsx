import { useState } from "react";
import Botao from "../components/Botão";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import React from "react";


export default function Home() {

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'> ('tabela')


  const clientes = [
    new Cliente('Ana',34, '1'),
    new Cliente('Bia',24, '2'),
    new Cliente('Ronaldo',54, '3'),
    new Cliente('Yugi',17, '4'),
  ]

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido(cliente: Cliente){
    console.log(`Exclir...... ${cliente.nome}`)
  }

  function salvarCliente(cliente: Cliente) {
    setCliente(Cliente.vazio())
    setVisivel('tabela')
  }

  function novoCliente() {
    console.log(cliente)
    setVisivel('form')
  }

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
              onClick={novoCliente}>
                 Novo Cliente
              </Botao>
          </div>
          <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}/>
        </React.Fragment>
        ) : (
          <Formulario cliente={cliente}
            cancelado={() => setVisivel('tabela')}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  )
}

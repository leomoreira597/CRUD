interface EntradaProps{
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntradaProps){
    return(
        <div className="flex flex-col mb-4">
            <label className={`
                mb-2
            `}>
                {props.texto}
            </label>
            <input type={props.tipo ?? 'text'} 
                value={props.valor}
                onChange={e => props.valorMudou?.(e.target.value)}
                readOnly={props.somenteLeitura}
                className={`
                    border border-purple-500
                    rounded-lg
                    focus: outline-none bg-gray-100
                    ${props.somenteLeitura ? '' : 'bg-white'}
                    px-4 py-2
                `}/>
        </div>
    );
}
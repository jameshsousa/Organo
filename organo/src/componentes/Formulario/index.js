import Botao from '../Botao'
import ListaSuspensa from '../ListaSuspensa'
import CampoTexto from '../campoTexto'
import './Formulario.css'

const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]
    
    const aoSalvar = (evento) => {
        console.log('Form foi submetido')
        evento.preventDefault()
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>

            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
            <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
            <CampoTexto  label="Imagem" placeholder="Digite o endeço da imagem" />
            <ListaSuspensa obrigatorio={true} label="Time" itens = {times} />
            <Botao>
                Criar Card
            </Botao> 

            </form>
        </section>
    )

}

export default Formulario
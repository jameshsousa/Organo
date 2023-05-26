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
    
    return (
        <section className="formulario">
            <form>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto label="Nome" placeholder="Digite seu nome" />
            <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
            <CampoTexto label="Imagem" placeholder="Digite o endeço da imagem" />
            <ListaSuspensa label="Time" itens = {times} />
            <Botao texto="criar card"/>

            </form>
        </section>
    )

}

export default Formulario
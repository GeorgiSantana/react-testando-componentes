import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes"
import { useNavigate } from "react-router-dom"
import { useSorteador } from "../state/hook/useSorteador"
import "./Rodape.css"


const Rodape = () => {

    const participantes = useListaDeParticipantes()

    const navegarPara = useNavigate()

    const sortear = useSorteador()

    const iniciar = () =>{
        sortear()
        navegarPara("/sorteio")
    }
    return (<footer>
        <button disabled={participantes.length < 3} onClick={iniciar}> Iniciar Brincadeira </button>
        <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </footer>)
}

export default Rodape
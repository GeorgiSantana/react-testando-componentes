import { resultadoAmigoSecreto } from "../atom"
import { useRecoilValue } from "recoil"


export const useResultadoSorteio = () => {
     return useRecoilValue(resultadoAmigoSecreto)
}
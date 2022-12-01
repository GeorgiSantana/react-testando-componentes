import { atom } from "recoil";

export const listaParticipantesState = atom<string[]>({
    key: 'listaPaticipantesState',
    default: []
})
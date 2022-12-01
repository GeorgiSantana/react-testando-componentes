import { render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./Formulario"


// jest 
test( "quando o input está vazio, novos paticipantes não podem ser adicionados", ()=> {

    render(<Formulario />)

    // encontrar no Dom o input
    const input = screen.getByPlaceholderText("Insira os nomes dos participantes")

    // encontrar o botão
    const botao = screen.getByRole("button")

    // garantir que o input esteja no documento
    expect(input).toBeInTheDocument()

    // garantir que o botão estaja desabilitado
    expect(botao).toBeDisabled()


})
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario"



// jest 
test( "quando o input está vazio, novos paticipantes não podem ser adicionados", ()=> {

    render(
          <RecoilRoot>
            <Formulario />
          </RecoilRoot>
          )

    // encontrar no Dom o input
    const input = screen.getByPlaceholderText("Insira os nomes dos participantes")

    // encontrar o botão
    const botao = screen.getByRole("button")

    // garantir que o input esteja no documento
    expect(input).toBeInTheDocument()

    // garantir que o botão estaja desabilitado
    expect(botao).toBeDisabled()
})

test("adicionar um participante caso exista um nome preenchido", () => {
    render(<RecoilRoot>
        <Formulario />
    </RecoilRoot>)
    // encontrar no Dom o input
    const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
    // encontrar o botão
    const botao = screen.getByRole("button")
    // inserir um valor no input
    fireEvent.change(input, {
        target: {
            value: "Maria Luisa"
        }
    })

    // clicar nbo botão de submeter
    fireEvent.click(botao)

    // garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus()

    // garantir que o input não tenha umn valor
    expect(input).toHaveValue("")
})
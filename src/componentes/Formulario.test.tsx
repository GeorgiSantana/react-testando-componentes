import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Formulario from "./Formulario"

describe( "o comportamento do Formulario.tsx", () => {
 
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
         render(
             <RecoilRoot>
               <Formulario />
             </RecoilRoot>
             )
         const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
         const botao = screen.getByRole("button")
         fireEvent.change(input, {
             target: {
                 value: "Maria Luisa"
             }
         })
         fireEvent.click(botao)
     
         expect(input).toHaveFocus()
     
         expect(input).toHaveValue("")
         
     })
     
     test("nomes repetidos não podem ser adicionados a lista", () => {
         render(
             <RecoilRoot>
                 <Formulario />
             </RecoilRoot>)
         const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
         const botao = screen.getByRole("button")
         fireEvent.change(input, {
             target: {
                 value: "Maria Luisa"
             }
         })
         fireEvent.click(botao)
         fireEvent.change(input, {
             target: {
                 value: "Maria Luisa"
             }
         })
         fireEvent.click(botao)
     
         const mensagemDeErro = screen.getByRole("alert")
     
         expect(mensagemDeErro.textContent).toBe("Nomes repetidos não são permitidos!")
     
     })
     
     
     test("a mensagem de erro deve sumir após os timers", () => {
         jest.useFakeTimers()
         render(
             <RecoilRoot>
                 <Formulario />
             </RecoilRoot>)
         const input = screen.getByPlaceholderText("Insira os nomes dos participantes")
         const botao = screen.getByRole("button")
         fireEvent.change(input, {
             target: {
                 value: "Maria Luisa"
             }
         })
         fireEvent.click(botao)
         fireEvent.change(input, {
             target: {
                 value: "Maria Luisa"
             }
         })
         fireEvent.click(botao)
         let mensagemDeErro = screen.queryByRole("alert")
         expect(mensagemDeErro).toBeInTheDocument()
     
         act(() => {
             jest.runAllTimers()
         });
         
     
         mensagemDeErro = screen.queryByRole("alert")
         expect(mensagemDeErro).toBeNull()
     
     })

})


import React from "react";
import { screen, render, fireEvent, cleanup, queryByTestId } from "@testing-library/react";
import Calculadora from "./Calculadora";
import Botones from "./Botones";

describe ("Calculadora", () =>{
    it("Validar Botones", () =>{
            render(<Calculadora/>);
            expect(screen.queryByTestId("texto")).not.toBeNull();
            expect(screen.queryByText("C")).toBeInTheDocument();
            expect(screen.queryByText("+/-")).toBeInTheDocument();
            expect(screen.queryByText("%")).toBeInTheDocument();
            expect(screen.queryByText("/")).toBeInTheDocument();
            expect(screen.queryByText("7")).toBeInTheDocument();
            expect(screen.queryByText("8")).toBeInTheDocument();
            expect(screen.queryByText("9")).toBeInTheDocument();
            expect(screen.queryByText("x")).toBeInTheDocument();
            expect(screen.queryByText("4")).toBeInTheDocument();
            expect(screen.queryByText("5")).toBeInTheDocument();
            expect(screen.queryByText("6")).toBeInTheDocument();
            expect(screen.queryByText("-")).toBeInTheDocument();
            expect(screen.queryByText("1")).toBeInTheDocument();
            expect(screen.queryByText("2")).toBeInTheDocument();
            expect(screen.queryByText("3")).toBeInTheDocument();
            expect(screen.queryByText("+")).toBeInTheDocument();
            expect(screen.queryByText("0")).toBeInTheDocument();
            expect(screen.queryByText(".")).toBeInTheDocument();
            expect(screen.queryByText("=")).toBeInTheDocument();
    });

    it("Testear boton CLEAR",()=>{
        const mockFunction = jest.fn();
        render(<textarea value = {"1"} readOnly/>);
        render(<Botones limpiar = {mockFunction}/>);
        fireEvent.click(screen.getByTestId("clear"));
        expect(mockFunction.mock.calls.length).toEqual(1);
        expect(screen.queryByTestId("texto")).toBeNull();
    });

    it("Testear boton 1",()=>{
        const mockFunction = jest.fn();
        render(<textarea value = {""} readOnly/>);
        render(<Botones añadirV = {mockFunction}/>);
        fireEvent.click(screen.getByTestId("uno"));
        expect(<textarea value={"1"}></textarea>)
    });

    fit("Testear boton de suma",()=>{
        const mockFunction = jest.fn();
        const num1 = 1;
        render(<textarea value = {3} readOnly/>);
        render(<Botones añadirV = {num1} signo = {mockFunction} igual = {mockFunction}/>);
        fireEvent.click(screen.getByTestId("suma"));
        fireEvent.click(screen.getByTestId("igual"));
        expect(<textarea value={4}></textarea>)
        
    });
});

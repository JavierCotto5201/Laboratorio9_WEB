import React from "react";
import { screen, render, fireEvent, cleanup } from "@testing-library/react";
import Calculadora from "./Calculadora";

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

    it("Validar boton de clear",()=>{
        
    });
});

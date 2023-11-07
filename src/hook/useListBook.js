import { useContext } from "react";
import { ReadingContext } from "../context/readinglistContext.jsx"

export const useListBook = () =>{
    const read = useContext(ReadingContext)

    if(!read){
        throw new Error('El componente no tiene acceso al contexto')
    }

    return read
}
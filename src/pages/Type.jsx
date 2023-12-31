import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'; //importa el hook de  reactRouter
import { getTypes } from "../lib/records.requests"; //importa el array records
import { ItemListContainer } from "../components/itemListContainer/ItemListContainer"; //importa itemListContainer
import { Loader } from "../components/Loader/Loader";

//Type utiliza useParams para obtener el tipo de producto que quiere mostrar.
//Utiliza useState para almacenar el listado de productos ya filtrado y 
//useEffect para obtener el listado filtrado y actualiza cuando se monta en el DOM o cuando se modifica el valor de 'id'
//Por último utiliza el componente itemListaContainer para mostrar la lista de productos filtrada por la el tipo en la página. 

export const Type = () => {
    const[isLoading, setIsLoading] = useState(true);
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getTypes(id)
        .then(res => {
            setIsLoading(false);
            setProducts(res)}
            )
    }, [id]);
    
    if(isLoading) return <Loader />

    return (
        <div>
            <div>
            <ItemListContainer products={products} />
            </div>
        </div>
    )
}
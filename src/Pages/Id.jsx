import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { UseContextData } from "../context/UseContextData";
import { Data } from "../Data";
import { IdTemp } from "../components/IdTemp";
export const Id = ()=>{
    const {id} = useParams();
    const {data} = UseContextData();
    const [result, setResult] = useState([])
    useEffect(()=>{
        const res = Data && Data.filter(product => product.id == id)
        setResult(res);
    },[])
console.log(result)
    
    return(
        <>
        {
            result.map(product=>(
                <IdTemp key={product.id} result={product}/>
                            ))
        }
        </>
    )
}
        
import { countAtom } from "./CountStore"
import { useAtom } from "jotai"

export default function Counter() {

    // the biggest difference between useState vs
    // all useAtom will be referring to the same
    // atom in the parameter
   const [count, setCount] = useAtom(countAtom);

    return (<>
        <div style={{
            width:"50px",
            height:"50px",
            border:"1px solid black",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"

        }}>{count}</div>
        <button
            onClick={()=>{
                setCount(count+1);
            }}
        >+</button>
        <button onClick={()=>{
            setCount(count-1)
        }}
        >-</button>
    </>
)
}
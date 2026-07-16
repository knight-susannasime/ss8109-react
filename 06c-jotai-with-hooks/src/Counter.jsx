import { useCounter } from "./useCounter";

export default function Counter() {

    const {count, updateCount} = useCounter();

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
                updateCount(count+1);
            }}
        >+</button>
        <button onClick={()=>{
            updateCount(count-1)
        }}
        >-</button>
    </>
)
}
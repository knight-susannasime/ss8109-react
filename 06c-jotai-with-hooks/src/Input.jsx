import { useCounter } from "./useCounter"

export default function Input() {

    const {count, updateCount} = useCounter();

    return <div>
        <input type="text" value={count}
            onChange={(event)=>{
                updateCount(event.target.value)
            }}
        />
    </div>
}
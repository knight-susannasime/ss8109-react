import { countAtom } from "./CountStore"
import { useAtom } from "jotai"

export default function Display() {

    const [count, setCount] = useAtom(countAtom)

    return <>
        <p>
            Total Price: ${count * 10}
        </p>
    </>
}
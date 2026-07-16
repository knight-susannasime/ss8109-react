import { countAtom } from "./CountStore";
import { useAtom } from "jotai";

// a hook is a way to share data and functions
// across multiple React components
// it is a function
// it should return whatever you want to share
// must be an arrow function
export const useCounter = ()=> {
    // get access to the countAtom
    const [count, setCount] = useAtom(countAtom);

    // define whatever functions we want to share
    // with other components
    const updateCount = (newCount) => {
        // don't update if newCount is NaN
        if (isNaN(newCount)) {
            return;
        }
        // only update if the newCount is greater than 0
        if (newCount > -1) {
            setCount(newCount)
        }
    }
    // return everything we want to share in an object
    return {
        count, updateCount
    }
}
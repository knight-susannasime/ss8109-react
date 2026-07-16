import { atom } from 'jotai';
// In Jotai, an atom is a state that can be shared

// Create a count atom with default value 0
// 'export' allow other jsx files to use the atom
// if we didn't use export default, then the export will be an object
export const countAtom = atom(0);

import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';
//This class name function uses tailwind merge to let us to easily combine class names
//without really writing a lot class names in one line
export const cn = (...inputs) =>{
    return twMerge(clsx(inputs))
}
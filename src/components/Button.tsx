import Link from 'next/link';

type ButtonProps ={
    label: string,
    onClick: any,
};

export default function Button({label, onClick}: ButtonProps){
    return(
        <button className="p-3 focus:border-sky-500 border-b-double rounded-xl shadow-sm hover:bg-red-400 " onClick={onClick} >{label}</button>
    )
}
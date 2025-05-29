
type ButtonProps = {
    label: string,
};

export default function Button({ label }: ButtonProps) {
    return (
        <button className="p-3 focus:border-sky-500 border-b-double rounded-xl shadow-sm hover:bg-red-400 "  >{label}</button>
    )
}
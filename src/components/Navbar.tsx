export default function Navbar(){
    return(
    <nav className="flex justify-between p-4 border-b">
        <div>ContentLink</div>
        <div className="space-x-4">
            <button>Login</button>
            <button className="btn-primary">Sign up</button>
        </div>
    </nav>);
}
export default function FeaturedCreators(){
    return(
        <section>
            <h2>Featured Creators</h2>

            <div>
                <div className="bg-white rounded-xl shadow hover:shadow-md transition duration-220 overflow-hidden">
                    <div className="relative h-48 w-full">
                        <img
                            src="../../public/bil.jpg"
                            alt="billie"
                            />
                    </div>
                </div>

                <div className="p-4">
                    <h3 className="font-bold text-lg">name</h3>
                    <p className="text-sm text-gray-600">niche</p>
                    <p className="text-xs text-gray-400">location</p>
                    <div className="mt-3 flex justify-between items-center">
                        <span className="text-sm font-medium text-blue-600">rating</span>
                        <button className="text-sm text-blue-500 hover:underline">view profile</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
import Image from "next/image"
export default function FeaturedCreators(){
    return(
        <section className="py-10">
        <h2 className="text-2xl font-bold text-center mb-6">Featured Creators</h2>

            <div>
            <div className="bg-white h-screen text-center rounded-xl shadow hover:shadow-md transition duration-220 overflow-hidden">
                    <div className="relative h-30 w-full">
                    <Image
                            src="/bil.png"
                            alt="bil"
                            width={100}
                            height={100}
                            className="w-full"                            />
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
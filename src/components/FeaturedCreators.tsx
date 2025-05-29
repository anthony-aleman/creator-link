import Image from "next/image";

export default function FeaturedCreators() {
    return (
        <section className="w-full py-12 bg-gray-50">
            <h2 className="text-2xl font-bold text-center mb-10">Featured Creators</h2>

            <div className="flex flex-wrap justify-center gap-6 px-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="w-full max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                        <div className="relative w-full h-48">
                            <Image
                                src="/bil.png"
                                alt="creator image"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-xl"
                            />
                        </div>
                        <div className="p-4 text-left">
                            <h3 className="font-bold text-lg">Jay Carter</h3>
                            <p className="text-sm text-gray-600">Fitness & Wellness</p>
                            <p className="text-xs text-gray-400">Los Angeles, CA</p>
                            <p className="text-yellow-500">Rating: </p>
                            <button className="text-blue-600 text-sm hover:underline mt-2">View Profile</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

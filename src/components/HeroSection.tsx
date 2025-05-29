import Button from "./Button";

export default function HeroSection() {
    return (
        <section className="text-center py-20 bg-gray-50">
            <h1 className="text-4xl font-bold mb-4">Get Paid to Create</h1>
            <p className="text-lg text-gray-700 mb-6">
                Join a growing marketplace for influencers, YouTubers, and streamers to connect with brands you actually like.
            </p>
            <Button label="Join as a Creator" />
        </section>
    );
}

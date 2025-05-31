import { NextPage } from 'next';
import Link from 'next/link';

const CTASection: NextPage = () => {
  return (
    <section className="text-center py-20 bg-red-400 text-white">
      <h2 className="text-4xl font-bold mb-4">Start Earning Through Your Content</h2>
      <p className="text-lg mb-6">Join the platform made for creators like you.</p>
      <Link
        href="/signup"
        className="inline-block px-6 py-3 bg-white text-red-400 font-semibold rounded-md shadow hover:bg-gray-100 transition"
      >
        Sign Up Free
      </Link>
    </section>
  );
};

export default CTASection;

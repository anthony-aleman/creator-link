const features = [
  { title: "Verified Creators", icon: "✅" },
  { title: "Easy Booking", icon: "📅" },
  { title: "Secure Payouts", icon: "💳" },
  { title: "Analyze Trends", icon: "📊" },
];

const ValueProps = () => (
  <section className="flex flex-col md:flex-row justify-around text-center py-12">
    {features.map((f) => (
      <div key={f.title} className="p-4">
        <div className="text-3xl mb-2">{f.icon}</div>
        <h3 className="font-semibold">{f.title}</h3>
      </div>
    ))}
  </section>
);

export default ValueProps;

const stats = [
  { number: "32+", label: "Years In Business" },
  { number: "15", label: "Awards Received" },
  { number: "12K", label: "Projects Completed" },
  { number: "887%", label: "Customer Satisfaction" },
];

const StatsSection = () => (
  <section className="w-full py-16 px-6 lg:px-16 bg-background">
    <div className="mx-auto max-w-[1280px] grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col items-center text-center gap-2">
          <p className="text-4xl lg:text-5xl font-bold text-foreground">{s.number}</p>
          <p className="text-muted-foreground text-sm font-medium">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);
export default StatsSection;

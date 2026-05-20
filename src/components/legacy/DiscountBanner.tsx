const DiscountBanner = () => (
  <div className="w-full py-3 px-6 text-center text-sm font-medium text-accent-foreground"
    style={{ background: 'linear-gradient(135deg, hsl(20 90% 55%), hsl(280 60% 55%), hsl(20 90% 55%))' }}>
    <span>30% Discount On Every Plan!</span>
    <a href="#" className="ml-4 inline-block px-5 py-1.5 rounded-full border border-accent-foreground/40 text-accent-foreground text-xs font-semibold hover:bg-accent-foreground/10 transition-colors">
      Claim Now
    </a>
  </div>
);
export default DiscountBanner;

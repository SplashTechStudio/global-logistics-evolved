import partnerLogos from "@/assets/partner-logos.jpg";

const Partners = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Partners
          </h2>
          <p className="text-xl text-muted-foreground">
            Trusted by leading organizations across West Africa
          </p>
        </div>

        <div className="max-w-5xl mx-auto animate-fade-up">
          <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={partnerLogos}
              alt="JuanChini Partners - AfricaCDC, ECOWAS Commission, United Nations, Bayougar, WARC, Falclin Investment"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

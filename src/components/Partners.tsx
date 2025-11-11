const partners = [
  "AfricaCDC",
  "ECOWAS Commission",
  "United Nations",
  "Bayougar",
  "WARC",
  "Falclin Investment",
];

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={partner}
              className="bg-background rounded-lg p-6 flex items-center justify-center h-24 hover:shadow-lg transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-center font-semibold text-foreground text-sm">
                {partner}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

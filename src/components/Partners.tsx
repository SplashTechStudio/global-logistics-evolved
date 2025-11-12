import partnerEcowas from "@/assets/partner-ecowas.png";
import partnerBayougar from "@/assets/partner-bayougar.png";
import partnerFalclin from "@/assets/partner-falclin.png";
import partnerCrc from "@/assets/partner-crc.png";
import partnerArc from "@/assets/partner-arc.png";
import partnerLivearts from "@/assets/partner-livearts.png";
import partnerUn from "@/assets/partner-un.png";
import partnerAfricacdc from "@/assets/partner-africacdc.png";

const partners = [
  { name: "ECOWAS Commission", logo: partnerEcowas },
  { name: "Bayougar", logo: partnerBayougar },
  { name: "Falclin Investment", logo: partnerFalclin },
  { name: "CRC", logo: partnerCrc },
  { name: "ARC Investment", logo: partnerArc },
  { name: "Live Arts Development Agency", logo: partnerLivearts },
  { name: "United Nations", logo: partnerUn },
  { name: "AfricaCDC", logo: partnerAfricacdc },
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

        <div className="max-w-6xl mx-auto animate-fade-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} - JuanChini Partner`}
                  className="w-full h-auto max-h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

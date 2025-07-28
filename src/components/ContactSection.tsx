import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, MapPin, Clock, Phone, Instagram } from 'lucide-react';

const ContactSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5547999999999?text=Olá! Gostaria de agendar um horário no Salão Joice Fugazza.', '_blank');
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-salon-wine" />,
      title: "Localização",
      info: "Balneário Camboriú - SC",
      description: "Região central, fácil acesso"
    },
    {
      icon: <Clock className="h-6 w-6 text-salon-wine" />,
      title: "Horário de Funcionamento",
      info: "Segunda a Sábado",
      description: "8:00 às 18:00"
    },
    {
      icon: <Phone className="h-6 w-6 text-salon-wine" />,
      title: "Contato",
      info: "(47) 99999-9999",
      description: "WhatsApp preferencial"
    },
    {
      icon: <Instagram className="h-6 w-6 text-salon-wine" />,
      title: "Instagram",
      info: "@joicefugazza",
      description: "Siga nossos trabalhos"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Agende seu <span className="text-transparent bg-gradient-primary bg-clip-text">Horário</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco e transforme sua beleza com quem realmente entende do assunto
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* WhatsApp CTA Main */}
            <div className="animate-fade-in">
              <div className="bg-gradient-card backdrop-blur-sm rounded-3xl p-8 shadow-hero border border-salon-rose-light/30 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-soft">
                    <MessageCircle className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-foreground mb-4">
                    Quer agendar agora mesmo?
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg">
                    É super fácil! Clique no botão abaixo e fale diretamente conosco pelo WhatsApp. 
                    Vamos encontrar o melhor horário para você!
                  </p>
                </div>

                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-soft text-xl px-12 py-6"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Agendar pelo WhatsApp
                </Button>

                <div className="mt-6 p-4 bg-salon-rose-light/20 rounded-2xl">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Resposta rápida garantida!</strong><br />
                    Normalmente respondemos em até 30 minutos durante o horário comercial.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                  Informações de Contato
                </h3>

                {contactInfo.map((item, index) => (
                  <Card 
                    key={item.title}
                    className="bg-gradient-card backdrop-blur-sm border-salon-rose-light/30 shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-3 bg-salon-rose-light/30 rounded-xl">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {item.title}
                          </h4>
                          <p className="text-salon-wine font-medium mb-1">
                            {item.info}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Services CTA */}
          <div className="mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-card border border-salon-rose-light/30">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-6 text-center">
                Serviços Mais Procurados
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: "Blindagem de Unhas", emoji: "🛡️", professional: "Julia" },
                  { name: "Maquiagem de Festa", emoji: "💄", professional: "Joice" },
                  { name: "Escova Modelada", emoji: "💨", professional: "Joice" },
                  { name: "Nail Art", emoji: "🎨", professional: "Julia" }
                ].map((service) => (
                  <Button
                    key={service.name}
                    onClick={() => {
                      const message = `Olá! Gostaria de agendar ${service.name} com ${service.professional} no Salão Joice Fugazza.`;
                      window.open(`https://wa.me/5547999999999?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    variant="outline"
                    className="flex flex-col h-auto p-4 border-salon-rose text-salon-burgundy hover:bg-salon-rose hover:text-white transition-all duration-300"
                  >
                    <div className="text-2xl mb-2">{service.emoji}</div>
                    <div className="text-sm font-medium text-center">
                      {service.name}
                    </div>
                    <div className="text-xs opacity-70 mt-1">
                      com {service.professional}
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-16">
            <Card className="bg-gradient-card backdrop-blur-sm border-salon-rose-light/30 shadow-card overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-salon-rose-light to-salon-rose flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="h-16 w-16 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Nossa Localização</h4>
                    <p className="text-salon-cream">Balneário Camboriú - SC</p>
                    <p className="text-sm text-salon-cream mt-2">
                      Endereço completo enviado via WhatsApp
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
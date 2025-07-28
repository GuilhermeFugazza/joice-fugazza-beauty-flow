import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Clock, Palette, Scissors, Sparkles } from 'lucide-react';

const ServicesSection = () => {
  const handleWhatsApp = (service: string) => {
    const message = `Olá! Gostaria de agendar ${service} no Salão Joice Fugazza.`;
    window.open(`https://wa.me/5547999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  const nailServices = [
    {
      title: "Blindagem de Unhas",
      description: "Fortalecimento e proteção das unhas naturais",
      duration: "1h30",
      icon: "🛡️",
      professional: "Julia"
    },
    {
      title: "Fibra de Vidro",
      description: "Alongamento e fortalecimento duradouro",
      duration: "2h",
      icon: "✨",
      professional: "Julia"
    },
    {
      title: "Nail Art",
      description: "Designs personalizados e únicos",
      duration: "2h30",
      icon: "🎨",
      professional: "Julia"
    },
    {
      title: "Francesinha",
      description: "Clássica e elegante para todas as ocasiões",
      duration: "1h30",
      icon: "💅",
      professional: "Julia"
    },
    {
      title: "Esmaltação",
      description: "Esmaltação comum ou em gel",
      duration: "45min",
      icon: "💎",
      professional: "Julia"
    },
    {
      title: "Manutenção",
      description: "Cuidados e retoques das unhas",
      duration: "1h",
      icon: "🔧",
      professional: "Julia"
    }
  ];

  const beautyServices = [
    {
      title: "Maquiagem Social",
      description: "Para eventos, festas e ocasiões especiais",
      duration: "1h30",
      icon: "💄",
      professional: "Joice"
    },
    {
      title: "Maquiagem Noiva",
      description: "Look perfeito para o dia mais especial",
      duration: "2h30",
      icon: "👰",
      professional: "Joice"
    },
    {
      title: "Corte Feminino",
      description: "Cortes modernos e personalizados",
      duration: "1h",
      icon: "✂️",
      professional: "Joice"
    },
    {
      title: "Escova",
      description: "Escova modeladora para todos os tipos de cabelo",
      duration: "1h30",
      icon: "💨",
      professional: "Joice"
    },
    {
      title: "Progressiva",
      description: "Alisamento e redução de volume",
      duration: "3h",
      icon: "🌊",
      professional: "Joice"
    },
    {
      title: "Coloração",
      description: "Mudança de cor e luzes personalizadas",
      duration: "2h30",
      icon: "🎨",
      professional: "Joice"
    }
  ];

  const ServiceCard = ({ service, category }: { service: any, category: string }) => (
    <Card className="bg-gradient-card backdrop-blur-sm border-salon-rose-light/30 shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105 group">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <div className="text-3xl mb-3">{service.icon}</div>
          <h3 className="font-semibold text-foreground mb-2 group-hover:text-salon-wine transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {service.description}
          </p>
        </div>

        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            {service.duration}
          </div>
          <div className="text-salon-wine font-medium">
            com {service.professional}
          </div>
        </div>

        <Button
          onClick={() => handleWhatsApp(service.title)}
          className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300"
          size="sm"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Quero agendar
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Nossos <span className="text-transparent bg-gradient-primary bg-clip-text">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuidamos de cada detalhe para você se sentir única e especial
          </p>
        </div>

        {/* Unhas Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-salon-wine" />
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                Especialista em Unhas - Julia
              </h3>
              <Sparkles className="h-6 w-6 text-salon-wine" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nailServices.map((service, index) => (
              <div
                key={service.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard service={service} category="unhas" />
              </div>
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-px bg-gradient-primary w-32"></div>
          <div className="mx-4 p-3 bg-gradient-primary rounded-full">
            <Palette className="h-6 w-6 text-white" />
          </div>
          <div className="h-px bg-gradient-primary w-32"></div>
        </div>

        {/* Cabelos e Maquiagem Section */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-3">
              <Scissors className="h-6 w-6 text-salon-wine" />
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                Cabelos & Maquiagem - Joice
              </h3>
              <Scissors className="h-6 w-6 text-salon-wine" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beautyServices.map((service, index) => (
              <div
                key={service.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard service={service} category="beleza" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card backdrop-blur-sm rounded-3xl p-8 shadow-card max-w-3xl mx-auto border border-salon-rose-light/30">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Entre em contato conosco! Temos outros serviços e sempre buscamos atender suas necessidades especiais.
            </p>
            <Button
              onClick={() => handleWhatsApp("informações sobre outros serviços")}
              size="lg"
              className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-soft animate-bounce-subtle"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              Falar com nossa equipe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
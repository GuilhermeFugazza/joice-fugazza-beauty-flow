import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Star, Award } from 'lucide-react';

const HistorySection = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-salon-wine" />,
      number: "500+",
      label: "Clientes Satisfeitas"
    },
    {
      icon: <Star className="h-8 w-8 text-salon-wine" />,
      number: "10+",
      label: "Anos de Experiência"
    },
    {
      icon: <Award className="h-8 w-8 text-salon-wine" />,
      number: "1000+",
      label: "Trabalhos Realizados"
    },
    {
      icon: <Heart className="h-8 w-8 text-salon-wine" />,
      number: "100%",
      label: "Dedicação e Carinho"
    }
  ];

  return (
    <section id="historia" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Nossa <span className="text-transparent bg-gradient-primary bg-clip-text">História</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma jornada de amor, dedicação e paixão pela beleza
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Story Content */}
            <div className="animate-fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-salon-rose-light/30 rounded-full mb-6">
                  <Heart className="h-4 w-4 text-salon-wine mr-2" />
                  <span className="text-sm font-medium text-salon-burgundy">Mãe e filha unidas pela beleza</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
                  O Salão Joice Fugazza nasceu do amor
                </h3>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Nossa história começou com o sonho de <strong className="text-foreground">Joice Fugazza</strong>, 
                    uma apaixonada por maquiagem e cabelos que sempre acreditou no poder transformador da beleza. 
                    Com anos de experiência e dedicação, ela construiu uma reputação sólida em Balneário Camboriú.
                  </p>

                  <p>
                    Quando <strong className="text-foreground">Julia Fugazza</strong> descobriu sua paixão pelas unhas 
                    e nail art, mãe e filha decidiram unir forças para criar algo especial. Juntas, elas complementam 
                    perfeitamente os serviços do salão, oferecendo cuidado completo da cabeça aos pés.
                  </p>

                  <p>
                    Hoje, o <strong className="text-foreground">Salão Joice Fugazza</strong> é referência na região, 
                    conhecido não apenas pela qualidade técnica, mas principalmente pelo carinho e atenção dedicados 
                    a cada cliente. Nossa missão é fazer com que cada mulher saia daqui se sentindo única e especial.
                  </p>
                </div>

                <div className="bg-gradient-card rounded-2xl p-6 border border-salon-rose-light/30">
                  <blockquote className="text-lg font-medium text-foreground italic text-center">
                    "Acreditamos que a beleza vai além da aparência. É sobre autoestima, 
                    confiança e o brilho nos olhos de cada cliente que atendemos."
                  </blockquote>
                  <div className="text-center mt-4">
                    <p className="text-salon-wine font-semibold">- Joice & Julia Fugazza</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image/Visual Element */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                {/* Main Image Placeholder */}
                <div className="aspect-[4/5] bg-gradient-to-br from-salon-rose-light to-salon-rose rounded-3xl shadow-hero flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">👩‍👧</div>
                    <p className="text-xl font-semibold">Joice & Julia</p>
                    <p className="text-salon-cream">Mãe e filha</p>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-card animate-float">
                  <div className="text-2xl">💅</div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-card animate-float" style={{ animationDelay: '1s' }}>
                  <div className="text-2xl">💄</div>
                </div>

                <div className="absolute top-1/2 -right-4 bg-salon-wine rounded-full p-3 shadow-card animate-bounce-subtle">
                  <Heart className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={stat.label}
                className="bg-gradient-card backdrop-blur-sm border-salon-rose-light/30 shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Values Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-8">
              Nossos Valores
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="animate-fade-in">
                <div className="text-4xl mb-4">✨</div>
                <h4 className="font-semibold text-foreground mb-2">Excelência</h4>
                <p className="text-muted-foreground">Buscamos sempre a perfeição em cada detalhe do nosso trabalho</p>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl mb-4">💖</div>
                <h4 className="font-semibold text-foreground mb-2">Carinho</h4>
                <p className="text-muted-foreground">Tratamos cada cliente com amor e atenção personalizada</p>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl mb-4">🌟</div>
                <h4 className="font-semibold text-foreground mb-2">Confiança</h4>
                <p className="text-muted-foreground">Construímos relacionamentos duradouros baseados na confiança</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
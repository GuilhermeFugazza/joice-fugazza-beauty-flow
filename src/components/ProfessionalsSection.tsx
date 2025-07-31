import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Star, Award } from 'lucide-react';

const ProfessionalsSection = () => {
  const handleWhatsApp = (professional: string) => {
    const message = `Olá! Gostaria de agendar um horário com ${professional} no Salão Joice Fugazza.`;
    window.open(`https://wa.me/5547999653620?text=${encodeURIComponent(message)}`, '_blank');
  };

  const professionals = [
    {
      name: "Joice Fugazza",
      specialties: ["Maquiagem", "Hairstylist", "Escova", "Progressiva", "Corte", "Penteado", "Coloração"],
      description: "Maquiadora e hairstylist com anos de experiência, especializada em realçar a beleza natural de cada cliente.",
      image: "/lovable-uploads/c0cf55e1-8b62-4c46-ae49-480a66161396.png", // Placeholder - será substituída
      rating: 5,
      experience: "10+ anos"
    },
    {
      name: "Julia Fugazza",
      specialties: ["Unhas", "Blindagem", "Fibra de Vidro", "Nail Art", "Francesinhas", "Esmaltação"],
      description: "Especialista em unhas com foco em técnicas avançadas de blindagem e design personalizado.",
      image: "/lovable-uploads/c0cf55e1-8b62-4c46-ae49-480a66161396.png", // Placeholder - será substituída
      rating: 5,
      experience: "8+ anos"
    }
  ];

  return (
    <section id="profissionais" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Nossas <span className="text-transparent bg-gradient-primary bg-clip-text">Profissionais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mãe e filha unidas pela paixão em cuidar da beleza e autoestima de cada cliente
          </p>
        </div>

        {/* Professionals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {professionals.map((professional, index) => (
            <Card 
              key={professional.name}
              className="bg-gradient-card backdrop-blur-sm border-salon-rose-light/30 shadow-card hover:shadow-hero transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Professional Info */}
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mb-4 mx-auto shadow-soft">
                      <span className="text-2xl font-bold text-white">
                        {professional.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-salon-wine rounded-full p-2">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    {professional.name}
                  </h3>
                  
                  {/* Rating and Experience */}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(professional.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-salon-wine text-salon-wine" />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {professional.experience} de experiência
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    {professional.description}
                  </p>
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Especialidades:</h4>
                  <div className="flex flex-wrap gap-2">
                    {professional.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-3 py-1 bg-salon-rose-light/50 text-salon-burgundy rounded-full text-sm font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => handleWhatsApp(professional.name)}
                    className="flex-1 bg-gradient-primary hover:scale-105 transition-all duration-300"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Agendar com {professional.name.split(' ')[0]}
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={() => document.querySelector('#trabalhos')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border-salon-wine text-salon-wine hover:bg-salon-wine hover:text-white transition-all duration-300"
                  >
                    Ver trabalhos
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Pronta para se sentir ainda mais bonita?
            </h3>
            <p className="text-muted-foreground mb-6">
              Entre em contato agora e agende seu horário com a profissional ideal para você
            </p>
            <Button
              onClick={() => handleWhatsApp("a equipe")}
              size="lg"
              className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-soft"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              Quero agendar agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsSection;
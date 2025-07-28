import { Button } from '@/components/ui/button';
import { MessageCircle, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5547999999999?text=Olá! Gostaria de agendar um horário no Salão Joice Fugazza.', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-salon-rose/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-salon-wine/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-salon-rose-light/25 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mt-20 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          {/* <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-soft mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-salon-wine mr-2" />
            <span className="text-sm font-medium text-salon-burgundy">Beleza e Cuidado Profissional</span>
          </div> */}

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Realce sua beleza com{' '}
            <span className="text-transparent bg-gradient-primary bg-clip-text">
              cuidado e paixão
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Especialistas em unhas, maquiagem, cabelo e autoestima em Balneário Camboriú
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-hero text-lg px-8 py-6"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              Fale agora no WhatsApp
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-salon-wine text-salon-wine hover:bg-salon-wine hover:text-white transition-all duration-300 text-lg px-8 py-6"
            >
              Ver nossos serviços
            </Button>
          </div>

          {/* Features */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300">
              <div className="text-2xl mb-3">💅</div>
              <h3 className="font-semibold text-foreground mb-2">Unhas Perfeitas</h3>
              <p className="text-sm text-muted-foreground">Blindagem, fibra de vidro e nail art</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300">
              <div className="text-2xl mb-3">💄</div>
              <h3 className="font-semibold text-foreground mb-2">Maquiagem</h3>
              <p className="text-sm text-muted-foreground">Para todos os momentos especiais</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300">
              <div className="text-2xl mb-3">💇‍♀️</div>
              <h3 className="font-semibold text-foreground mb-2">Cabelos</h3>
              <p className="text-sm text-muted-foreground">Corte, escova, progressiva e coloração</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Decorative Logo */}
      <div className="absolute bottom-10 right-10 opacity-20">
        <img 
          src="/lovable-uploads/c0cf55e1-8b62-4c46-ae49-480a66161396.png" 
          alt="Joice Fugazza Logo" 
          className="h-32 w-auto animate-float"
        />
      </div>
    </section>
  );
};

export default HeroSection;
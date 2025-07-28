import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Eye, Heart } from 'lucide-react';

const GallerySection = () => {
  const handleWhatsApp = (workType: string) => {
    const message = `Olá! Vi o trabalho de ${workType} e gostaria de agendar um horário no Salão Joice Fugazza.`;
    window.open(`https://wa.me/5547999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Placeholder gallery items - você pode substituir por imagens reais
  const nailWorks = [
    {
      title: "Fibra de Vidro Elegante",
      category: "Alongamento",
      professional: "Julia",
      likes: 127,
      image: "/api/placeholder/300/300" // Placeholder
    },
    {
      title: "Nail Art Floral",
      category: "Design Personalizado",
      professional: "Julia",
      likes: 89,
      image: "/api/placeholder/300/300"
    },
    {
      title: "Francesinha Clássica",
      category: "Esmaltação",
      professional: "Julia",
      likes: 156,
      image: "/api/placeholder/300/300"
    },
    {
      title: "Blindagem Rosa",
      category: "Fortalecimento",
      professional: "Julia",
      likes: 203,
      image: "/api/placeholder/300/300"
    },
    {
      title: "Design Minimalista",
      category: "Nail Art",
      professional: "Julia",
      likes: 78,
      image: "/api/placeholder/300/300"
    },
    {
      title: "Unhas Degradê",
      category: "Técnica Especial",
      professional: "Julia",
      likes: 145,
      image: "/api/placeholder/300/300"
    }
  ];

  const beautyWorks = [
    {
      title: "Maquiagem de Noiva",
      category: "Casamento",
      professional: "Joice",
      likes: 234,
      image: "/api/placeholder/300/300"
    },
    {
      title: "Escova Modelada",
      category: "Penteado",
      professional: "Joice",
      likes: 167,
      image: "/api/placeholder/300/300"
    },
    {
      title: "Coloração Balayage",
      category: "Coloração",
      professional: "Joice",
      likes: 298,
      image: "/api/placeholder/300/300"
    },
    {
      title: "Make Social",
      category: "Festa",
      professional: "Joice",
      likes: 189,
      image: "/api/placeholder/300/300"
    },
    {
      title: "Corte Moderno",
      category: "Corte",
      professional: "Joice",
      likes: 156,
      image: "/api/placeholder/300/300"
    },
    {
      title: "Penteado de Festa",
      category: "Penteado",
      professional: "Joice",
      likes: 267,
      image: "/api/placeholder/300/300"
    }
  ];

  const WorkCard = ({ work, category }: { work: any, category: string }) => (
    <Card className="group overflow-hidden bg-gradient-card backdrop-blur-sm border-salon-rose-light/30 shadow-soft hover:shadow-card transition-all duration-500 hover:scale-105">
      <div className="relative overflow-hidden">
        <div className="aspect-square bg-gradient-to-br from-salon-rose-light to-salon-rose flex items-center justify-center">
          {/* Placeholder para imagem */}
          <div className="text-6xl opacity-50">
            {category === 'unhas' ? '💅' : '💄'}
          </div>
        </div>
        
        {/* Overlay com informações */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <Eye className="h-8 w-8 mx-auto mb-2" />
            <p className="text-sm font-medium">Ver detalhes</p>
          </div>
        </div>

        {/* Badge do profissional */}
        <div className="absolute top-3 left-3 bg-salon-wine text-white px-2 py-1 rounded-full text-xs font-medium">
          {work.professional}
        </div>

        {/* Likes */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Heart className="h-3 w-3 text-red-500 fill-red-500" />
          <span className="text-xs font-medium">{work.likes}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground mb-1 group-hover:text-salon-wine transition-colors duration-300">
          {work.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          {work.category}
        </p>
        
        <Button
          onClick={() => handleWhatsApp(work.title)}
          className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300"
          size="sm"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Quero igual
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id="trabalhos" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Nossos <span className="text-transparent bg-gradient-primary bg-clip-text">Trabalhos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada trabalho é único, feito com carinho e dedicação para realçar sua beleza
          </p>
        </div>

        {/* Unhas Gallery */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground flex items-center gap-3">
              Trabalhos de Unhas - Julia
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {nailWorks.map((work, index) => (
              <div
                key={work.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <WorkCard work={work} category="unhas" />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button
              onClick={() => handleWhatsApp("serviços de unhas")}
              variant="outline"
              className="border-salon-wine text-salon-wine hover:bg-salon-wine hover:text-white transition-all duration-300"
            >
              Ver mais trabalhos de unhas
            </Button>
          </div>
        </div>

        {/* Separator */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-px bg-gradient-primary w-32"></div>
          <div className="mx-4 p-3 bg-gradient-primary rounded-full">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <div className="h-px bg-gradient-primary w-32"></div>
        </div>

        {/* Beauty Gallery */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground flex items-center gap-3">
              Cabelos e Maquiagem - Joice
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {beautyWorks.map((work, index) => (
              <div
                key={work.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <WorkCard work={work} category="beleza" />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button
              onClick={() => handleWhatsApp("serviços de cabelo e maquiagem")}
              variant="outline"
              className="border-salon-wine text-salon-wine hover:bg-salon-wine hover:text-white transition-all duration-300"
            >
              Ver mais trabalhos de beleza
            </Button>
          </div>
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Siga nosso Instagram
            </h3>
            <p className="text-muted-foreground mb-6">
              Acompanhe nossos trabalhos mais recentes e inspire-se para seu próximo look
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-salon-wine text-salon-wine hover:bg-salon-wine hover:text-white transition-all duration-300"
              >
                📱 @joicefugazza
              </Button>
              <Button
                onClick={() => handleWhatsApp("agendar um horário após ver os trabalhos")}
                className="bg-gradient-primary hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Quero agendar agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const galleryImages = [
  '/lovable-uploads/1b655fd4-c37a-40f3-8f17-722a64abcc19.png',
  '/lovable-uploads/c0cf55e1-8b62-4c46-ae49-480a66161396.png',
  '/lovable-uploads/1b655fd4-c37a-40f3-8f17-722a64abcc19.png',
  '/lovable-uploads/c0cf55e1-8b62-4c46-ae49-480a66161396.png',
  '/lovable-uploads/1b655fd4-c37a-40f3-8f17-722a64abcc19.png',
  '/lovable-uploads/c0cf55e1-8b62-4c46-ae49-480a66161396.png',
  '/lovable-uploads/1b655fd4-c37a-40f3-8f17-722a64abcc19.png',
  '/lovable-uploads/c0cf55e1-8b62-4c46-ae49-480a66161396.png',
  '/lovable-uploads/1b655fd4-c37a-40f3-8f17-722a64abcc19.png',
  '/lovable-uploads/c0cf55e1-8b62-4c46-ae49-480a66161396.png',
];

export default function NossoEspacoSection() {
  return (
    <section id="nosso-espaco" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Nosso Espaço
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça um pouco do nosso ambiente acolhedor e inspirador! Veja as fotos abaixo e sinta-se convidado a viver essa experiência.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {galleryImages.map((src, idx) => (
                <CarouselItem key={idx} className="flex items-center justify-center">
                  <div className="rounded-3xl overflow-hidden shadow-lg aspect-[16/10] w-full max-h-[400px] flex items-center justify-center bg-salon-rose-light/20">
                    <img
                      src={src}
                      alt={`Foto do espaço ${idx + 1}`}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

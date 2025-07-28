import { MessageCircle, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5547999999999?text=Olá! Gostaria de mais informações sobre o Salão Joice Fugazza.', '_blank');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Profissionais', href: '#profissionais' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Trabalhos', href: '#trabalhos' },
    { label: 'História', href: '#historia' },
    { label: 'Contato', href: '#contato' }
  ];

  return (
    <footer className="bg-salon-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/c0cf55e1-8b62-4c46-ae49-480a66161396.png" 
                alt="Salão Joice Fugazza" 
                className="h-16 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-salon-cream text-lg mb-4">
                Realce sua beleza com cuidado e paixão
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Especialistas em unhas, maquiagem, cabelo e autoestima em Balneário Camboriú. 
                Mãe e filha unidas pela paixão em cuidar da beleza de cada cliente.
              </p>
            </div>

            {/* Redes Sociais */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors duration-300"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm">WhatsApp</span>
              </button>
              
              <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full transition-colors duration-300">
                <Instagram className="h-4 w-4" />
                <span className="text-sm">@joicefugazza</span>
              </button>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-salon-cream">
              Navegação
            </h3>
            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-salon-cream transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-salon-cream">
              Nossos Serviços
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>💅 Blindagem de Unhas</li>
              <li>🎨 Nail Art</li>
              <li>💄 Maquiagem</li>
              <li>💇‍♀️ Corte e Escova</li>
              <li>🌈 Coloração</li>
              <li>✨ Progressiva</li>
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="h-px bg-gradient-to-r from-transparent via-salon-rose to-transparent my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            <p>&copy; 2024 Salão Joice Fugazza. Todos os direitos reservados.</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Desenvolvido com</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>por</span>
            <a 
              href="#" 
              className="text-salon-cream hover:text-white transition-colors duration-300 font-medium"
            >
              Guilherme Fugazza
            </a>
          </div>
        </div>

        {/* CTA Flutuante - Mobile */}
        <div className="fixed bottom-6 right-6 md:hidden z-40">
          <button
            onClick={handleWhatsApp}
            className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
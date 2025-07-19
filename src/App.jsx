import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Play, 
  Users, 
  Gamepad2, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Mail, 
  Instagram, 
  Twitter,
  Globe,
  CheckCircle,
  Star,
  Zap,
  Heart,
  MessageCircle,
  Menu,
  X
} from 'lucide-react'
import './App.css'

// Import images
import backgroundGaming from './assets/background_gaming.jpg'
import futuristicPattern from './assets/futuristic_pattern.jpg'
import gamingSetup from './assets/gaming_setup.jpg'
import sciFiEnvironment from './assets/sci_fi_environment.jpg'
import minecraftMap from './assets/minecraft_map.jpg'
import robloxGame from './assets/roblox_game.png'
import gtaMission from './assets/gta_mission.jpg'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Mundos Personalizados",
      description: "Criamos mundos únicos e imersivos com roteiros exclusivos para suas lives",
      image: minecraftMap
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "NPCs com IA",
      description: "Personagens não-jogáveis com falas roteirizadas e comportamento realista",
      image: robloxGame
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Missões Épicas",
      description: "Puzzles, eventos narrativos e missões personalizadas para engajar sua audiência",
      image: gtaMission
    }
  ]

  const packages = [
    {
      name: "Starter",
      price: "R$ 800",
      duration: "1 hora",
      game: "Minecraft ou Roblox",
      features: [
        "1 mapa personalizado",
        "Roteiro simples",
        "Suporte básico"
      ],
      popular: false
    },
    {
      name: "Standard",
      price: "R$ 2.000",
      duration: "2-3 horas",
      game: "Minecraft, Roblox ou GTA",
      features: [
        "Missões personalizadas",
        "NPCs com voz IA",
        "Roteiro avançado",
        "Suporte premium"
      ],
      popular: true
    },
    {
      name: "Ultimate Experience",
      price: "R$ 5.000+",
      duration: "até 5 horas",
      game: "Minecraft, Roblox ou GTA",
      features: [
        "Arco narrativo completo",
        "Mapa imersivo",
        "Assets visuais exclusivos",
        "Suporte 24/7",
        "Revisões ilimitadas"
      ],
      popular: false
    }
  ]

  const results = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Aumente o Engajamento",
      description: "Transforme uma live comum em um episódio memorável"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Retenção do Público",
      description: "Mantenha sua audiência conectada por mais tempo"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Conteúdo Viral",
      description: "Crie conteúdo digno de cortes, reels e destaque nos algoritmos"
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Particles Background */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 3 + 3}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Gamepad2 className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-gradient">c9creative</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="hover:text-primary transition-colors">Início</a>
            <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#pacotes" className="hover:text-primary transition-colors">Pacotes</a>
            <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button className="hidden md:block neon-glow">
              Transforme sua Live
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a 
                href="#inicio" 
                className="block hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="#servicos" 
                className="block hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Serviços
              </a>
              <a 
                href="#pacotes" 
                className="block hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pacotes
              </a>
              <a 
                href="#contato" 
                className="block hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </a>
              <Button className="w-full neon-glow mt-4">
                Transforme sua Live
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        <div className={`container mx-auto px-4 text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Transformamos suas lives em
            <br />
            <span className="text-secondary">experiências cinematográficas</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Usamos jogos como Minecraft, Roblox e GTA para criar eventos personalizados, 
            mapas, NPCs e roteiros imersivos que encantam sua audiência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="neon-glow text-lg px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              Começar Agora
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              <MessageCircle className="w-5 h-5 mr-2" />
              Ver Exemplos
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gradient">Quem Somos</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Somos um estúdio criativo focado em jogos e narrativas interativas para streamers. 
                Nossa missão é elevar o nível das suas transmissões ao vivo, transformando-as em 
                verdadeiras experiências cinematográficas.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Lives Criadas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">50+</div>
                  <div className="text-sm text-muted-foreground">Streamers Atendidos</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={gamingSetup} 
                alt="Gaming Setup" 
                className="rounded-lg shadow-2xl floating-animation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">O Que Entregamos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Criamos experiências únicas e personalizadas para cada streamer
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-4 text-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Resultados</h2>
            <p className="text-xl text-muted-foreground">
              O que você pode esperar das nossas experiências
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary">
                  {result.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{result.title}</h3>
                <p className="text-muted-foreground">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="pacotes" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Nossos Pacotes</h2>
            <p className="text-xl text-muted-foreground">
              Escolha o pacote ideal para suas necessidades
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`card-hover relative ${pkg.popular ? 'border-primary neon-glow' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    <Star className="w-4 h-4 mr-1" />
                    Mais Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary my-4">{pkg.price}</div>
                  <CardDescription>
                    <div className="space-y-1">
                      <div>Duração: {pkg.duration}</div>
                      <div>Jogos: {pkg.game}</div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-secondary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                    <Zap className="w-4 h-4 mr-2" />
                    Escolher Pacote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient">Entre em Contato</h2>
            <p className="text-xl text-muted-foreground">
              Pronto para transformar suas lives? Vamos conversar!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Fale Conosco</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>contato@c9creative.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span>www.c9creative.com</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Play className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  @c9creative.games
                </p>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Solicite um Orçamento</CardTitle>
                <CardDescription>
                  Conte-nos sobre seu projeto e retornaremos em breve
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Nome" />
                    <Input placeholder="Email" />
                  </div>
                  <Input placeholder="Canal/Plataforma" />
                  <Textarea placeholder="Descreva sua ideia para a live..." rows={4} />
                  <Button className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Gamepad2 className="w-6 h-6 text-primary" />
              <span className="font-bold text-gradient">c9creative</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 c9creative. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


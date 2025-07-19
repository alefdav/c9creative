# Site Estúdio Criativo - Gaming para Streamers

## Descrição
Site profissional e moderno para um estúdio criativo especializado em criar experiências cinematográficas em jogos como Minecraft, Roblox e GTA para streamers.

## Características do Site

### Design
- **Tema Gaming**: Cores azuis e verdes neon com fundo escuro
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações**: Efeitos de hover, transições suaves e animações de partículas
- **Moderno**: Design futurista com elementos glassmorphism

### Seções Principais
1. **Hero Section**: Título impactante com call-to-action
2. **Sobre Nós**: Apresentação do estúdio com estatísticas
3. **Serviços**: Cards com os principais serviços oferecidos
4. **Resultados**: Benefícios para os streamers
5. **Pacotes**: Tabela de preços com 3 opções (Starter, Standard, Ultimate)
6. **Contato**: Formulário e informações de contato

### Tecnologias Utilizadas
- **React**: Framework JavaScript
- **Tailwind CSS**: Framework de CSS utilitário
- **Vite**: Build tool e dev server
- **Lucide React**: Ícones modernos
- **shadcn/ui**: Componentes de UI

## Como Executar

### Desenvolvimento
```bash
cd c9creative
pnpm install
pnpm run dev
```
O site estará disponível em `http://localhost:5173`

### Build de Produção
```bash
pnpm run build
```
Os arquivos de produção estarão na pasta `dist/`

### Preview da Build
```bash
pnpm run preview
```

## Estrutura de Arquivos
```
c9creative/
├── public/                 # Arquivos públicos
├── src/
│   ├── assets/            # Imagens e assets
│   ├── components/        # Componentes React
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos customizados
│   └── main.jsx          # Ponto de entrada
├── dist/                  # Build de produção
└── README.md             # Esta documentação
```

## Personalização

### Cores
As cores principais podem ser alteradas no arquivo `src/App.css`:
- **Primária**: `oklch(0.6 0.25 240)` (Azul)
- **Secundária**: `oklch(0.7 0.25 160)` (Verde)
- **Accent**: `oklch(0.65 0.25 280)` (Roxo)

### Conteúdo
Para alterar textos e informações, edite o arquivo `src/App.jsx`.

### Imagens
Substitua as imagens na pasta `src/assets/` e atualize as importações no `App.jsx`.

## Informações de Contato (do Pitch)
- **Email**: contato@suaagencia.com
- **Site**: www.suaagencia.com
- **Redes Sociais**: @suaagencia.games

## Pacotes Oferecidos
1. **Starter** - R$ 800 (1 hora, Minecraft/Roblox)
2. **Standard** - R$ 2.000 (2-3 horas, Minecraft/Roblox/GTA)
3. **Ultimate Experience** - R$ 5.000+ (até 5 horas, todos os jogos)

## Deploy

### GitHub Pages (Automático)
O projeto está configurado para deploy automático no GitHub Pages. A cada push na branch `main`, o site será automaticamente construído e publicado.

**Configuração inicial no GitHub:**
1. Vá para **Settings** > **Pages** no seu repositório
2. Em **Source**, selecione **GitHub Actions**
3. Faça um push para a branch `main` - o deploy será automático!

### Deploy Manual
```bash
# Instalar dependências (se necessário)
pnpm install

# Deploy manual para GitHub Pages
pnpm run deploy
```

### Outras Plataformas
O site também pode ser deployado em:
- **Vercel**: Conecte o repositório e o deploy é automático
- **Netlify**: Arraste a pasta `dist/` ou conecte o repositório
- **Servidor próprio**: Use os arquivos da pasta `dist/`

### URLs de Deploy
- **Desenvolvimento**: `http://localhost:5173`
- **GitHub Pages**: `https://[seu-usuario].github.io/c9creative/`

---

**Desenvolvido com React + Vite + Tailwind CSS**


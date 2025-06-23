# Sistema de Gestão de Obras - Website

Este é um website moderno e responsivo desenvolvido em Next.js com Tailwind CSS para apresentar e vender um sistema de gestão de obras focado em casas de pequeno e médio porte.

## 🚀 Características

- **Framework**: Next.js 15.3.4 com App Router
- **Estilização**: Tailwind CSS
- **Ícones**: Lucide React
- **TypeScript**: Totalmente tipado
- **SEO**: Otimizado com meta tags, sitemap e robots.txt
- **Responsivo**: Design adaptável para desktop e mobile

## 📋 Funcionalidades do Website

### Seções Principais
- **Hero Section**: Chamada principal com CTAs
- **Problema/Solução**: Apresentação dos desafios e soluções
- **Funcionalidades**: Visão geral e detalhamento completo
- **Depoimentos**: Feedback de clientes
- **Planos e Preços**: Três planos com comparativo detalhado
- **Contato**: Formulário e informações de contato

### Planos Apresentados
1. **Básico** (R$ 99,90/mês) - Para empreendedores individuais
2. **Padrão** (R$ 199,90/mês) - Para construtoras em crescimento
3. **Premium** (R$ 399,90/mês) - Para grandes construtoras (inclui módulo de orçamento)

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Comandos

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Criar build de produção
npm run build

# Executar build de produção
npm start

# Verificar linting
npm run lint
```

## 🚀 Deploy

### Opções de Deploy

#### 1. Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### 2. Netlify
```bash
# Build
npm run build

# Upload da pasta .next para Netlify
```

#### 3. Servidor próprio
```bash
# Build
npm run build

# Executar
npm start
```

### Variáveis de Ambiente
Crie um arquivo `.env.local` se necessário:
```
NEXT_PUBLIC_SITE_URL=https://seudominio.com
```

## 📁 Estrutura do Projeto

```
gestao-obras-site/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   └── components/
│       ├── ContactSection.tsx
│       ├── FeaturesSection.tsx
│       └── PricingSection.tsx
├── public/
├── package.json
└── README.md
```

## 🎨 Personalização

### Cores
As cores principais podem ser alteradas no arquivo `tailwind.config.js`:
- Azul primário: `blue-600`
- Azul secundário: `blue-800`
- Verde de sucesso: `green-500`
- Amarelo premium: `yellow-600`

### Conteúdo
- Textos e preços podem ser editados diretamente nos componentes
- Imagens devem ser adicionadas na pasta `public/`
- Meta tags SEO estão no arquivo `layout.tsx`

## 📱 Responsividade

O website é totalmente responsivo com breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🔍 SEO

### Implementado
- Meta tags otimizadas
- Open Graph para redes sociais
- Twitter Cards
- Sitemap XML
- Robots.txt
- Estrutura semântica HTML
- Palavras-chave estratégicas

### Palavras-chave principais
- sistema de gestão de obras
- software para construtoras
- gestão de obras pequeno porte
- controle de obras
- orçamento de obras

## 📞 Suporte

Para dúvidas sobre o código ou implementação, consulte a documentação do Next.js:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 Licença

Este projeto foi desenvolvido para apresentação do sistema de gestão de obras GestãObras.

---

**Desenvolvido com ❤️ usando Next.js e Tailwind CSS**


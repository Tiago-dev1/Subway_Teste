# 🏃‍♂️💨 Portal Subway Surfers Modded (Estilo Morrowplay)

Um portal web moderno, responsivo e de alta performance para jogar **Subway Surfers Modded** direto no navegador (com tudo infinito) e baixar o Mod APK para Android.

---

## 🚀 O que já está pronto no projeto

1. **Interface Gamer Moderna (Dark Theme & Glassmorphism):**
   - Desenvolvido com **Tailwind CSS** e tipografia gamer (**Outfit** & **Plus Jakarta Sans**).
   - Efeitos de brilho neon (Gold, Cyan, Emerald), cards interativos e responsividade total (Mobile, Tablet e Desktop).
2. **Janela de Jogo Interativa (Game Stage):**
   - **Iframe WebGL Integrado:** Configurado com a build oficial e completa do Subway Surfers World Tour (St. Petersburg via GitHub CDN oficial).
   - **Seletor de Servidores Alternativos:**
     - *Servidor 1:* World Tour St. Petersburg (Unity WebGL oficial)
     - *Servidor 2:* Edição 3D Canvas Rápida
     - *Servidor 3:* Espelho Reserva SZ Games
     - *Personalizado:* Permite colar qualquer link direto ou build própria
   - **Botão "Nova Aba":** Permite abrir o jogo em tela cheia direta caso alguma extensão de navegador ou firewall restrinja iframes locais.
   - **Modo Tela Cheia (Fullscreen API)** e **Modo Cinema (Theater Mode)** para imersão total.
   - **HUD de Controles Visuais:** Guias de teclas (`W`, `A`, `S`, `D`, Setas, `Espaço`).
3. **Vitrine de Modificações (Features):**
   - Painel destacando: 🔑 Chaves Infinitas, 🪙 Moedas Ilimitadas, 🛹 Pranchas Liberadas, 🏃‍♂️ Personagens World Tour, ⚡ Multiplicador 30x e 🛡️ Ambiente Seguro.
4. **Área de Download Mod APK (Android):**
   - Links diretos para espelhos confiáveis e consolidados da comunidade (LiteAPKs e AN1).
   - Tutorial passo a passo para instalação em celulares Android.
5. **Seção de FAQ & Ajuda:**
   - Dúvidas sobre salvamento de progresso local (IndexedDB/LocalStorage), tela cheia e solução de Adblock.
6. **Aviso Legal & DMCA (Fan-Made):**
   - Rodapé com declaração expressa de projeto de fã, sem afiliação com a SYBO Games / Kiloo, sem coleta de dados e em total conformidade com boas práticas.

---

## 📂 Estrutura de Arquivos

```text
├── index.html        # Página principal com arquitetura completa do portal
├── style.css         # Estilizações customizadas, modo cinema e animações
├── script.js         # Lógica do player (fullscreen, servidores, carregamento)
├── vercel.json       # Configuração otimizada para deploy na Vercel
├── netlify.toml      # Configuração para deploy no Netlify
└── README.md         # Documentação completa do projeto
```

---

## 💻 Como Rodar e Testar Localmente

### Opção 1: Direto pelo Navegador (Mais Rápido)
Basta dar um duplo clique no arquivo `index.html` ou arrastá-lo para dentro do Google Chrome / Edge / Firefox.

### Opção 2: Servidor Local (Recomendado para simular produção)
Se você tiver o Node.js ou Python instalado:

- **Com Node.js (npx):**
  ```bash
  npx serve .
  ```
- **Com Python:**
  ```bash
  python -m http.server 3000
  ```
  Depois acesse: `http://localhost:3000`

---

## ☁️ Como Colocar no Ar Gratuitamente

### 1. Vercel (Recomendado - 30 segundos)
1. Crie uma conta gratuita em [vercel.com](https://vercel.com).
2. Suba estes arquivos para um repositório no seu GitHub.
3. Clique em **"Add New Project"** na Vercel e selecione o repositório.
4. O deploy é automático e você receberá um link HTTPS gratuito: `https://seu-projeto.vercel.app`.

### 2. Netlify (Arrastar e Soltar)
1. Crie uma conta em [netlify.com](https://netlify.com).
2. Vá até a aba **"Sites"** e arraste a pasta inteira do projeto para a área de upload.
3. Em segundos o site estará online com domínio gratuito `https://seu-nome.netlify.app`.

---

## 🛠️ Como Adicionar sua Própria Build de WebGL (Opcional)

Se você possuir os arquivos exportados da build WebGL do Unity (pastas `Build/`, `TemplateData/` e `index.html`):
1. Crie uma subpasta chamada `game/` neste projeto.
2. Cole os arquivos da sua build dentro de `game/`.
3. No arquivo `index.html`, altere o `src` do `iframe` para:
   ```html
   <iframe id="game-frame" src="./game/index.html" ...></iframe>
   ```
Dessa forma, o jogo rodará 100% hospedado no seu próprio domínio sem depender de servidores externos!

---

## ⚠️ Aviso de Direitos Autorais e Segurança
*Subway Surfers* é uma marca registrada de **SYBO Games** e **Kiloo**. Este projeto é de cunho educacional e recreativo feito por fãs. Nunca solicite senhas ou dados bancários dos usuários.


# Portfólio Profissional — Rafael Augusto Carmona

Portfólio moderno, ultra responsivo e de alta performance desenvolvido com **React + Vite + Tailwind CSS + Node.js**.

---

## 🚀 Como Executar Localmente

No terminal, dentro da pasta do projeto, execute:

```bash
# 1. Instalar as dependências
npm install

# 2. Iniciar o servidor de desenvolvimento
npm run dev
```

Abra o link local exibido no terminal (normalmente `http://localhost:5173`) no seu navegador.

---

## 📸 Como Adicionar Sua Foto de Perfil e Imagens dos Projetos

### 1. Sua Foto de Perfil
Basta salvar sua foto com o nome **`profile.jpg`** dentro da pasta:
```
public/profile.jpg
```
*O portfólio reconhecerá e exibirá sua foto automaticamente com a moldura e efeitos brilhantes.*

### 2. Fotos dos Projetos
Coloque as imagens/screenshots dos seus projetos na pasta:
```
public/projects/
  ├── vinharia-edge.jpg (ou .png/.svg)
  ├── finance-app.jpg
  ├── space-missions.jpg
  └── web-react.jpg
```
*Se você usar nomes ou formatos diferentes, basta atualizar o campo `image` no arquivo `src/data/projectsData.js`.*

---

## 🌐 Como Fazer Deploy na Vercel (Gratuito e Público)

### Opção 1: Via GitHub (Recomendado — atualiza automaticamente a cada commit)
1. Crie um novo repositório no seu GitHub ([github.com/new](https://github.com/new)), por exemplo: `meu-portfolio`.
2. No seu computador, inicialize o git e envie o código:
   ```bash
   git init
   git add .
   git commit -m "feat: meu portfolio profissional"
   git branch -M main
   git remote add origin https://github.com/rafa212007/meu-portfolio.git
   git push -u origin main
   ```
3. Acesse [vercel.com](https://vercel.com) e faça login com seu GitHub.
4. Clique em **"Add New..."** > **"Project"** e selecione o repositório `meu-portfolio`.
5. A Vercel detectará o **Vite** automaticamente. Basta clicar no botão **"Deploy"**!
6. Em cerca de 30 segundos, seu site estará no ar com link público oficial (ex: `portfolio-rafael.vercel.app`).

### Opção 2: Via Vercel CLI (Direto do Terminal)
```bash
npx vercel
```
Siga as instruções rápidas na tela e o deploy será concluído em instantes.

---

## 🛠️ Tecnologias Utilizadas
* **React 18**
* **Vite** (Build e HMR veloz)
* **Tailwind CSS** (Estilização utilitária e responsiva)
* **Lucide React** (Ícones modernos e leves)
* **Node.js**

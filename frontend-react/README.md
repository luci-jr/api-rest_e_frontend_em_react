# ⚛️ Front-end React — Celebridades & Personalidades

Interface de usuário web (Single Page Application - SPA) desenvolvida em **React** para consumir e exibir as informações da **API REST em Go (Golang)** de personalidades históricas.

Este projeto foi inicializado através do [Create React App](https://github.com/facebook/create-react-app) e customizado para consumir a API rodando em `http://localhost:8000`.

---

## 🚀 Como Iniciar

No diretório deste projeto (`frontend-react`), certifica-te de ter as dependências instaladas e roda:

```bash
npm install
npm start
```

O aplicativo iniciará em modo de desenvolvimento.\
Abre [http://localhost:3000](http://localhost:3000) no teu navegador para visualizar.

A página recarrega automaticamente sempre que tu fizeres alterações no código.\
Erros de compilação ou alertas também serão exibidos no console do navegador e no terminal.

---

## 📜 Scripts Disponíveis

Tu podes executar os seguintes comandos:

### `npm start`
Inicia o servidor de desenvolvimento local na porta **3000** com suporte pré-configurado para Node.js moderno via OpenSSL legacy provider.

### `npm test`
Inicia o executor de testes automatizados no modo interativo (*watch mode*).\
Para mais detalhes, consulta a documentação sobre [execução de testes no React](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`
Compila a aplicação otimizada para o ambiente de produção dentro da pasta `build/`.\
O build é minificado, os arquivos recebem hashes para cache eficiente e os assets são otimizados para máxima performance.

### `npm run eject`
> [!WARNING]
> **Atenção: Esta é uma operação sem volta! Uma vez executado o `eject`, tu não poderás reverter.**
>
> Se não estiveres satisfeito com as configurações padrão da ferramenta de build, tu podes ejetar a qualquer momento. Esse comando removerá a dependência do `react-scripts` e copiará todos os arquivos de configuração (Webpack, Babel, ESLint) diretamente para o projeto, dando controle manual total.

---

## 🔌 Integração com o Back-end Go

O componente principal [Personalidades.js](file:///home/lucivaldo-junior/Documentos/GitHub/estudos/Trilha-Go/Go4%20-%20Desenvolvendo%20uma%20API%20Rest/celebridades/frontend-react/src/components/Personalidades.js) consome a API através da biblioteca **Axios**:

```javascript
componentDidMount() {
    axios.get('http://localhost:8000/api/personalidades')
        .then(res => {
            const personalidades = res.data;
            this.setState({ personalidades });
        })
        .catch(error => console.error("Erro ao conectar à API Go:", error));
}
```

> [!NOTE]
> **Requisito de CORS:**
> Para que as requisições do React (`localhost:3000`) funcionem sem serem bloqueadas pelo navegador, a API Go precisa estar rodando na porta `8000` com os cabeçalhos de CORS habilitados via `gorilla/handlers`.

---

## 🛠️ Compatibilidade com Versões Recentes do Node.js

Como este projeto utiliza o `react-scripts 4.0.3` (Webpack 4), as versões mais novas do Node.js (Node 17 até Node 26+) exigem a ativação de algoritmos legados do OpenSSL.

O arquivo [package.json](file:///home/lucivaldo-junior/Documentos/GitHub/estudos/Trilha-Go/Go4%20-%20Desenvolvendo%20uma%20API%20Rest/celebridades/frontend-react/package.json) já vem configurado de fábrica com:
- `NODE_OPTIONS=--openssl-legacy-provider`: Evita o erro `ERR_OSSL_EVP_UNSUPPORTED`.
- `DISABLE_ESLINT_PLUGIN=true`: Evita conflito de versões de plugins legados de linting.

---

## 📂 Estrutura de Pastas do Front-end

```text
frontend-react/
├── public/                     # Arquivos estáticos (index.html, ícones, manifest)
├── src/
│   ├── components/             # Componentes específicos de interface
│   │   ├── Personalidades.js   # Componente que consome a API Go e renderiza a lista
│   │   └── Personalidades.css  # Estilização visual dos cards
│   ├── App.css                 # Estilos globais do App
│   ├── App.js                  # Componente raiz da aplicação
│   ├── App.test.js             # Testes unitários básicos
│   ├── index.css               # Folha de estilo base
│   ├── index.js                # Ponto de entrada (renderiza o App no DOM)
│   ├── logo.svg                # Logo do React
│   └── logo-go.png             # Logo da linguagem Go
├── package.json                # Manifesto de dependências e scripts npm
└── README.md                   # Esta documentação em português
```

---

## 📚 Saiba Mais

- [Documentação Oficial do React](https://reactjs.org/)
- [Guia do Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- [Documentação do Axios](https://axios-http.com/)

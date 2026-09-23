# 🎓 Projeto de Conclusão: API RESTful em Go & Front-end Retro Synthwave (React)

<p align="center">
  <img src="https://img.shields.io/badge/Status-Conclu%C3%ADdo-success?style=for-the-badge&logo=checkmarx" alt="Status Concluído" />
  <img src="https://img.shields.io/badge/Go-1.22+-00ADD8?style=for-the-badge&logo=go&logoColor=white" alt="Go" />
  <img src="https://img.shields.io/badge/PostgreSQL-18.4-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Docker-Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/React-Retro%20Arcade-ff007f?style=for-the-badge&logo=react&logoColor=white" alt="React Retro" />
</p>

Repositório prático contendo o projeto final de conclusão da formação **"Go: Desenvolvendo uma API Rest"** (Trilha Go).

O projeto é composto por:
1. **Back-end (API Go):** Arquitetura RESTful robusta desenvolvida em Go, roteamento flexível com **Gorilla Mux**, controle de fluxo via **Middlewares**, liberação de origens seguras via **CORS (Gorilla Handlers)** e persistência em banco relacional **PostgreSQL** através do ORM **GORM**.
2. **Infraestrutura (Docker Compose):** Banco PostgreSQL e interface visual **pgAdmin 4** provisionados em containers com persistência e migrations automáticas.
3. **Front-end SPA (React Retro Arcade):** Interface temática estilo **Retro 80s/90s Synthwave**, com fontes pixeladas (`Press Start 2P`, `VT323`), neon glow, linhas de varredura CRT e consumo assíncrono via **Axios**.

> [!NOTE]
> **Contexto Cultural & Histórico:** O dataset do projeto homenageia personalidades históricas e referências conectadas à cidade de **Belém do Pará** (*Papa João Paulo II* e *Almirante Barroso*).

---

## ⚡ Guia Rápido de Execução (Quick Start)

Para subir a aplicação completa do zero na tua máquina em **3 passos**:

```
[Terminal 1: Banco]   docker compose up -d
[Terminal 2: API Go]  go run main.go
[Terminal 3: React]   cd frontend-react && npm install && npm start
```

### 📋 Pré-requisitos
- [Git](https://git-scm.com/)
- [Docker](https://docs.docker.com/get-docker/) e [Docker Compose](https://docs.docker.com/compose/)
- [Go (Golang)](https://golang.org/dl/) (versão 1.22 ou superior)
- [Node.js](https://nodejs.org/) (versão 18 até 26+) e `npm`

---

## 🛠️ Passo a Passo Detalhado para Qualquer Pessoa Subir

### Passo 1: Clonar o Repositório e Entrar na Pasta
```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
cd "Go4 - Desenvolvendo uma API Rest/celebridades"
```

---

### Passo 2: Subir os Containers do Banco de Dados (Docker Compose)
No diretório `celebridades`, executa:

```bash
docker compose up -d
```

> [!TIP]
> **O que acontece por baixo dos panos:**
> - O PostgreSQL inicia na porta **`5432`** e cria o banco **`celebridades`**.
> - O script `./migration/docker-database-initial.sql` é executado automaticamente pelo Docker, criando a tabela `personalidades` e inserindo os dados iniciais.
> - O pgAdmin 4 sobe na porta **`54321`** com volume persistente.

---

### Passo 3: Executar a API em Go (Back-end)
Ainda no diretório `celebridades`:

```bash
# Baixar dependências do módulo Go
go mod download

# Iniciar o servidor
go run main.go
```

Deverás ver no terminal:
```text
Iniciando servidor Rest em Go
```
A API estará pronta e respondendo em: 👉 **`http://localhost:8000`**

---

### Passo 4: Executar o Front-end Retro Arcade (React)
Abre um novo terminal (mantendo o servidor Go ativo no anterior) e navega até a pasta do React:

```bash
cd "Go4 - Desenvolvendo uma API Rest/celebridades/frontend-react"

# Instalar os pacotes
npm install

# Iniciar a aplicação
npm start
```

A interface retro arcade abrirá automaticamente no teu navegador em:
👉 **`http://localhost:3000`**

---

## 🕹️ O Novo Visual do Front-end: Retro Synthwave / Arcade

A interface em React foi desenvolvida com estética nostálgica dos anos 80 e 90:

- **Paleta de Cores Neon Synthwave:** Ciano elétrico (`#00f3ff`), Rosa Magenta (`#ff007f`), Roxo Cibernético (`#9d4edd`), Âmbar (`#ffb703`) e Verde Terminal (`#05ffa1`).
- **Tipografia Retrô (Google Fonts):**
  - `'Press Start 2P'`: Títulos, badges de registros e marcadores arcade.
  - `'VT323'`: Comandos de console estilo terminal CRT dos anos 80.
  - `'Space Grotesk'`: Leitura limpa e confortável dos relatos históricos.
- **Efeitos Visuais:**
  - Efeito sutil de linhas de varredura CRT (*scanlines*).
  - Cards com cantoneiras cortadas no estilo cartucho/arcade com efeito de levitação e borda neon pulsante no `hover`.
  - Barra de status no topo indicando conexão com a API Go (`PORT: 8000`) em tempo real.
  - Mensagens de erro e loading simulando terminais de linha de comando.

---

## 🔑 Credenciais e Conexões

### 🐘 PostgreSQL (Banco de Dados)
- **Host (para a API Go local):** `localhost`
- **Host (dentro da rede Docker / pgAdmin):** `postgres`
- **Porta:** `5432`
- **Database:** `celebridades`
- **Usuário:** `root`
- **Senha:** `root`
- **String de Conexão GORM:** `host=localhost user=root password=root dbname=celebridades port=5432 sslmode=disable`

### 🖥️ pgAdmin 4 (Interface Gráfica Web)
- **URL de Acesso:** [http://localhost:54321](http://localhost:54321)
- **Usuário / E-mail de Login:** `admin@admin.com`
- **Senha de Login:** `admin1234`

> [!IMPORTANT]
> **Como Registrar o Servidor no pgAdmin pela Primeira Vez:**
> 1. Acessa [http://localhost:54321](http://localhost:54321) e faz o login com **`admin@admin.com`** e senha **`admin1234`**.
> 2. Clica com botão direito em **Servers** > **Register** > **Server...**
> 3. Na aba **General**: Digite um nome (ex: `Postgres Celebridades`).
> 4. Na aba **Connection**:
>    - **Host name/address:** `postgres` *(obrigatório usar 'postgres' e NUNCA 'localhost', pois o pgAdmin roda dentro de container)*
>    - **Port:** `5432`
>    - **Maintenance database:** `celebridades`
>    - **Username:** `root`
>    - **Password:** `root`
> 5. Clica em **Save**.

---

## 📡 Endpoints da API RESTful

| Método | Endpoint | Descrição |
| :---: | :--- | :--- |
| `GET` | `/` | Status da API / Home |
| `GET` | `/api/personalidades` | Lista todas as personalidades (Consumido pelo React) |
| `GET` | `/api/personalidades/{id}` | Retorna detalhes de uma personalidade específica |
| `POST` | `/api/personalidades` | Cria uma nova personalidade no banco |
| `PUT` | `/api/personalidades/{id}` | Edita dados de uma personalidade existente |
| `DELETE` | `/api/personalidades/{id}` | Exclui uma personalidade |

---

### 🧪 Exemplos de Chamadas (`curl`)

```bash
# 1. Listar todas as personalidades
curl -i http://localhost:8000/api/personalidades

# 2. Buscar por ID
curl -i http://localhost:8000/api/personalidades/1

# 3. Criar nova personalidade
curl -i -X POST http://localhost:8000/api/personalidades \
  -H "Content-Type: application/json" \
  -d '{"nome": "Fafá de Belém", "historia": "Ícone da cultura e música paraense com projeção internacional."}'

# 4. Atualizar registro
curl -i -X PUT http://localhost:8000/api/personalidades/1 \
  -H "Content-Type: application/json" \
  -d '{"nome": "João Paulo II", "historia": "Primeiro pontífice a visitar a Amazônia em julho de 1980."}'

# 5. Deletar registro
curl -i -X DELETE http://localhost:8000/api/personalidades/3
```

---

## 🏛️ Arquitetura, Middlewares & CORS

```text
[ React Retro SPA (localhost:3000) ]
                 │
                 │ Axios GET http://localhost:8000/api/personalidades
                 ▼
[ Gorilla Handlers (CORS) ] ──▶ Injeta "Access-Control-Allow-Origin: *"
                 │
                 ▼
[ Gorilla Mux (routes.go) ]
                 │
                 ▼
[ ContentTypeMiddleware (middleware.go) ] ──▶ Injeta "Content-Type: application/json"
                 │
                 ▼
[ Controller (controllers.go) ] ──▶ database.DB.Find(&p) ──▶ PostgreSQL (:5432)
                 │
                 ▼
[ json.NewEncoder(w).Encode(p) ] ──▶ HTTP 200 OK com Payload JSON
                 │
                 ▼
[ React Component: Personalidades.js ] ──▶ Renderiza Cards Retro Arcade na Tela
```

---

## 🛠️ Resolução de Dúvidas & Problemas Frequentes (FAQ)

### 1. Erro: `digital envelope routines::unsupported (ERR_OSSL_EVP_UNSUPPORTED)`
- **Causa:** Ocorre ao rodar versões recentes do Node.js (Node 17 até Node 26+) com versões legadas do Webpack (`react-scripts 4`).
- **Solução:** O arquivo `package.json` já vem configurado de fábrica com a flag `NODE_OPTIONS=--openssl-legacy-provider`, resolvendo automaticamente.

### 2. Erro: `Environment key "jest/globals" is unknown`
- **Causa:** Conflito de versão de plugins antigos do ESLint ao executar `npm update`.
- **Solução:** Já contornado no projeto através da diretiva `DISABLE_ESLINT_PLUGIN=true` no script `start`.

### 3. Como resetar o banco de dados para o estado original?
Se quiseres apagar todos os testes e recriar as tabelas do zero:
```bash
docker compose down -v
docker compose up -d
```

---

## 📂 Estrutura de Pastas do Projeto

```text
celebridades/
├── controllers/              # Handlers HTTP com regras de negócio e CRUD
│   └── controllers.go
├── database/                 # Conexão com PostgreSQL via GORM
│   └── db.go
├── frontend-react/           # Front-end SPA em React com tema Retro Arcade
│   ├── public/               # HTML base, metadados e fontes Google
│   ├── src/
│   │   ├── components/       # Componentes de UI (Personalidades.js e Personalidades.css)
│   │   ├── App.js            # Cabeçalho arcade com status da API
│   │   ├── App.css           # Estilos do cabeçalho synthwave
│   │   ├── index.js          # Montagem do React no DOM
│   │   └── index.css         # Variáveis de cores neon, grid cyber e scanlines
│   └── package.json          # Dependências do Node e scripts de execução
├── middleware/               # Interceptores de cabeçalhos JSON
│   └── middleware.go
├── migration/                # Script SQL de inicialização do banco
│   └── docker-database-initial.sql
├── models/                   # Structs de dados mapeadas para o banco
│   └── personalidades.go
├── routes/                   # Roteamento Gorilla Mux e envelopamento com CORS
│   └── routes.go
├── docker-compose.yaml       # Subida do PostgreSQL e pgAdmin 4
├── go.mod                    # Manifesto do módulo Go
├── go.sum                    # Checksums de segurança das dependências
├── main.go                   # Ponto de entrada (entrypoint) da API Go
└── README.md                 # Documentação completa oficial
```

---

<p align="center">
  Desenvolvido por <strong>Lucivaldo Junior</strong> como projeto de conclusão de curso na trilha <strong>Go (Golang)</strong>.
</p>

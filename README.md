# 🚀 API Rest de Personalidades Históricas (Celebridades) — Go

Uma API REST desenvolvida em **Go (Golang)** como projeto de estudo prático, utilizando o roteador **Gorilla Mux**, o ORM **GORM** e banco de dados **PostgreSQL**, com gerenciamento visual via **pgAdmin 4** provisionado via **Docker Compose**.

Os dados iniciais carregam personalidades históricas com ligação marcante à cidade de Belém do Pará (*Papa João Paulo II* e *Almirante Barroso*).

---

## 🛠️ Tecnologias Utilizadas

- **Linguagem:** [Go](https://go.dev/) (v1.25+)
- **Roteador HTTP:** [Gorilla Mux](https://github.com/gorilla/mux) (v1.8.1)
- **ORM:** [GORM](https://gorm.io/) (v1.31+) com driver PostgreSQL
- **Banco de Dados:** [PostgreSQL](https://www.postgresql.org/) (18.4) via Docker
- **Gerenciador de Banco:** [pgAdmin 4](https://www.pgadmin.org/) (`dpage/pgadmin4:9.18`) com persistência de volume via Docker
- **Orquestração de Containers:** [Docker Compose](https://docs.docker.com/compose/)

---

## 📋 Pré-requisitos

Antes de iniciar, certifica-te de ter instalado na tua máquina:
- [Git](https://git-scm.com/)
- [Go (Golang)](https://golang.org/dl/) (versão 1.22 ou superior)
- [Docker](https://docs.docker.com/get-docker/) e [Docker Compose](https://docs.docker.com/compose/install/)

---

## 🐳 Infraestrutura Local (Docker & pgAdmin)

O projeto disponibiliza um arquivo `docker-compose.yaml` com o PostgreSQL e o pgAdmin 4 pré-configurados para estudo local.

### 1. Subindo os Containers

No diretório raiz do projeto (`celebridades`), executa no teu terminal:

```bash
docker compose up -d
```

> [!TIP]
> **Inicialização do Zero:**
> Na primeira vez em que os containers são iniciados, o PostgreSQL cria automaticamente o banco **`celebridades`** e executa o script `./migration/docker-database-initial.sql`, gerando a tabela e os registros das personalidades.
> 
> Caso tu ou alguém que esteja estudando queira resetar o ambiente para o estado inicial a qualquer momento, basta rodar:
> ```bash
> docker compose down -v
> docker compose up -d
> ```

---

## 🔑 Credenciais de Acesso & Endpoints dos Serviços

Para facilitar a execução na tua máquina ou de quem estiver estudando o projeto, seguem as credenciais e parâmetros configurados:

### 🐘 PostgreSQL (Banco de Dados)

| Parâmetro | Valor |
| :--- | :--- |
| **Host (Para a API Go rodando localmente)** | `localhost` |
| **Host (Para o pgAdmin e outros containers)** | `postgres` |
| **Porta** | `5432` |
| **Database** | `celebridades` |
| **Usuário** | `root` |
| **Senha** | `root` |
| **String de Conexão (GORM)** | `host=localhost user=root password=root dbname=celebridades port=5432 sslmode=disable` |

---

### 🖥️ pgAdmin 4 (Interface Web)

O pgAdmin permite visualizar tabelas, esquemas e rodar queries SQL direto pelo navegador:

| Configuração | Valor |
| :--- | :--- |
| **Imagem Docker** | `dpage/pgadmin4:9.18` |
| **URL de Acesso** | [http://localhost:54321](http://localhost:54321) |
| **E-mail de Login** | `lucivaldojr25@gmail.com` |
| **Senha de Login** | `luci1987` |
| **Persistência de Dados** | Volume nomeado `pgadmin_data` (preserva conexões e sessões) |

#### 🧭 Como conectar o pgAdmin ao PostgreSQL pela primeira vez:

> [!IMPORTANT]
> **Atenção crucial ao campo "Host name/address":**
> Como o pgAdmin está rodando **dentro de um container Docker**, deves preencher obrigatoriamente **`postgres`** (que é o nome do serviço na rede interna do Docker) e **NUNCA `localhost`**. 
> Se colocares `localhost`, ele tentará se conectar a si mesmo e a conexão será recusada (*Connection refused*).

1. Acessa [http://localhost:54321](http://localhost:54321) e faz o login com as credenciais acima.
2. Clica com o botão direito em **Servers** > **Register** > **Server...**
3. Na aba **General**:
   - **Name:** `Postgres Celebridades` (ou qualquer nome de tua preferência).
4. Na aba **Connection**:
   - **Host name/address:** `postgres` ⚠️ *(atenção: usar o nome do serviço, não localhost)*
   - **Port:** `5432`
   - **Maintenance database:** `celebridades`
   - **Username:** `root`
   - **Password:** `root`
   - Marca a opção **Save password?**.
5. Clica em **Save**. Pronto! Agora podes navegar na árvore lateral em `Databases > celebridades > Schemas > public > Tables > personalidades`.

---

## 💻 Executando a API em Go

Com o banco de dados ativo, segue os passos abaixo para rodar a aplicação:

### 1. Baixar as dependências do módulo:
```bash
go mod download
```

### 2. Iniciar a API:
```bash
go run main.go
```

Deverás ver a mensagem no terminal:
```text
Iniciando servidor Rest em Go
```

A API estará disponível e ouvindo requisições na porta **8000**:
👉 [http://localhost:8000](http://localhost:8000)

---

## 📡 Endpoints da API

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `GET` | `/` | Rota raiz de boas-vindas / status |
| `GET` | `/api/personalidades` | Retorna a lista de todas as personalidades cadastradas |
| `GET` | `/api/personalidades/{id}` | Retorna uma personalidade específica com base no `id` |
| `POST`* | `/api/personalidades` | Criação de uma nova personalidade *(controlador implementado)* |

---

### 🧪 Exemplos de Requisição (`curl`)

#### 1. Rota Raiz
```bash
curl -X GET http://localhost:8000/
```
**Resposta:**
```text
Home Page
```

#### 2. Listar Todas as Personalidades
```bash
curl -X GET http://localhost:8000/api/personalidades
```
**Resposta:**
```json
[
  {
    "id": 1,
    "nome": "João Paulo II",
    "historia": "O Papa João Paulo II, nascido Karol Józef Wojtyła, foi o líder da Igreja Católica e o primeiro pontífice a visitar a Amazônia, em julho de 1980. Em sua homenagem, a antiga Avenida 1º de Dezembro, local onde ele celebrou uma missa campal histórica para mais de 300 mil pessoas em Belém, teve seu nome alterado para Avenida João Paulo II."
  },
  {
    "id": 2,
    "nome": "Almirante Barroso",
    "historia": "Francisco Manoel Barroso da Silva, o Almirante Barroso, foi um destacado oficial da Armada Imperial Brasileira e Barão do Amazonas, célebre por liderar a vitória na Batalha Naval do Riachuelo durante a Guerra do Paraguai. Sua história também se conecta a Belém por sua atuação militar na província do Pará durante o período da Cabanagem."
  }
]
```

#### 3. Buscar Personalidade por ID
```bash
curl -X GET http://localhost:8000/api/personalidades/1
```

---

## 📂 Estrutura do Projeto

```text
celebridades/
├── controllers/              # Manipuladores de requisições HTTP (handlers)
│   └── controllers.go
├── database/                 # Configuração e conexão com o banco PostgreSQL via GORM
│   └── db.go
├── migration/                # Scripts SQL de inicialização do banco
│   └── docker-database-initial.sql
├── models/                   # Estruturas de dados (structs)
│   └── personalidades.go
├── routes/                   # Definição e mapeamento das rotas da API
│   └── routes.go
├── docker-compose.yaml       # Subida de serviços PostgreSQL e pgAdmin 4
├── go.mod                    # Gerenciamento de dependências Go
├── go.sum                    # Checksums das dependências
├── main.go                   # Ponto de entrada (entrypoint) da aplicação
└── README.md                 # Guia e documentação do projeto
```

---

## 🛑 Parando os Serviços

Para pausar ou encerrar os containers Docker mantendo os dados preservados:

```bash
docker compose stop
```

Para remover completamente os containers:
```bash
docker compose down
```

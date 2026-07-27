# GitHub Finder

Aplicação para buscar usuários do GitHub, visualizar seus detalhes e explorar repositórios.

## Tecnologias

- **React 19** com **TypeScript**
- **Vite** como bundler
- **React Router 8** para navegação
- **Axios** para requisições HTTP
- **CSS Modules** para estilos com escopo por componente

## Funcionalidades

- Buscar usuário do GitHub pelo nome
- Visualizar detalhes do usuário (avatar, bio, e-mail, seguidores e seguindo)
- Listar repositórios ordenados por número de estrelas
- Filtrar repositórios por nome
- Alterar a ordenação da listagem (mais estrelas, menos estrelas, A→Z, Z→A)
- Ver detalhes de um repositório (nome, descrição, estrelas, linguagem)
- Acessar o repositório diretamente no GitHub

## Pré-requisitos

- [Node.js](https://nodejs.org/) v22 ou superior
- npm v10 ou superior

## Instalação

Clone o repositório:

```bash
git clone https://github.com/Olinadss/desbravadorsoftware.git
cd desbravadorsoftware
```

Instale as dependências:

```bash
npm install
```

## Rodando o projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse em [http://localhost:5173](http://localhost:5173)

## Build para produção

```bash
npm run build
```

Os arquivos gerados ficam na pasta `dist/`.

Para visualizar o build localmente:

```bash
npm run preview
```

## Estrutura de pastas

```
src/
├── components/       # Componentes reutilizáveis (Button, Input, Header, Sidebar...)
├── hooks/            # Hooks personalizados (useHome, useRepoDetails, useSearch)
├── pages/            # Páginas da aplicação (Home, RepoDetails)
├── routes/           # Configuração das rotas
├── service/          # Serviço de comunicação com a API do GitHub
├── utils/            # Utilitários (mapa de cores de linguagens)
└── main.tsx          # Entrada da aplicação
```

## Rotas

| Rota                             | Descrição                                    |
| -------------------------------- | -------------------------------------------- |
| `/`                              | Página inicial com busca                     |
| `/user/:username`                | Perfil do usuário e listagem de repositórios |
| `/user/:username/repo/:repoName` | Detalhes de um repositório                   |

## API

O projeto consome a [API REST do GitHub](https://docs.github.com/en/rest) sem autenticação.

> **Atenção:** sem autenticação, o limite é de **60 requisições por hora** por IP. Se atingir o limite, aguarde alguns instantes antes de tentar novamente.

## Demo

Acesse a aplicação em produção: [https://git-hub-repo-finder-theta.vercel.app/]

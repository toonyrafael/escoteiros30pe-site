# GITscout

Site institucional para um grupo escoteiro, com área administrativa (CMS) para que os próprios membros publiquem conteúdo sem precisar mexer em código.

## Propósito

O GITscout centraliza a presença online do grupo escoteiro:

- **Site público**: apresentação do grupo, atividades, posts e galeria de fotos.
- **CMS simples**: criar e editar posts, criar atividades, enviar fotos e personalizar as cores do site.

## Contexto acadêmico

O projeto é desenvolvido por alunos da **UNIT PE** (Centro Universitário Tiradentes, Pernambuco) como parte da disciplina **Experiência Extensionista 2**, com o objetivo de aplicar os conhecimentos do curso em uma demanda real de uma comunidade.

## Tecnologias

| Camada | Tecnologia |
| --- | --- |
| Front-end + API | Next.js |
| Linguagem | TypeScript |
| Runtime / gerenciador de pacotes | Bun |
| Banco de dados | PostgreSQL |

## Estrutura de arquivos

``` md
gitscout/
├── public/             # assets estáticos
├── src/
│   ├── app/            # rotas do Next.js (App Router)
│   ├── components/     # componentes reutilizáveis de UI
│   ├── lib/            # utilitários e acesso a dados
│   └── types/          # tipos TypeScript compartilhados
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

> A estrutura é uma base e pode mudar conforme o desenvolvimento avançar.

## Desenvolvimento

Pré-requisitos: [Bun](https://bun.sh) e PostgreSQL.

```bash
# instalar dependências
bun install

# subir o servidor local
bun run dev
```

Acesse `http://localhost:3000`.

## Build

```bash
bun run build
bun run start
```

## Roadmap

- [ ] Configurar projeto Next.js + TypeScript com Bun
- [ ] Modelar o banco de dados
- [ ] Construir o CMS
- [ ] Construir o site público
- [ ] Deploy

# Hairday

Aplicação de agendamento de cortes de cabelo, desenvolvida como desafio da [Rocketseat](https://www.rocketseat.com.br/). Com ela é possível agendar atendimentos escolhendo data, horário e nome do cliente, além de consultar e cancelar os agendamentos de cada dia.

## Funcionalidades

- **Agendar atendimento**: selecione a data, um horário disponível e informe o nome do cliente.
- **Horários por período**: os horários são organizados em Manhã (09h–12h), Tarde (13h–18h) e Noite (19h–21h).
- **Bloqueio de horários**: horários já agendados na data escolhida, ou que já passaram, ficam indisponíveis.
- **Agenda do dia**: consulte os agendamentos de qualquer data, agrupados por período e ordenados por horário.
- **Cancelar agendamento**: remova um agendamento diretamente da agenda.
- **Persistência local**: os agendamentos ficam salvos no `localStorage` do navegador (chave `hairday:appointments`).

## Tecnologias

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) com [React Compiler](https://react.dev/learn/react-compiler)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [class-variance-authority](https://cva.style/) para variantes de componentes
- [React Router](https://reactrouter.com/)
- [use-local-storage](https://github.com/nas5w/use-local-storage)
- [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr) para importar SVGs como componentes

## Como executar

Pré-requisitos: [Node.js](https://nodejs.org/) e [pnpm](https://pnpm.io/).

```bash
# Instalar as dependências
pnpm install

# Iniciar o servidor de desenvolvimento
pnpm dev
```

A aplicação ficará disponível em `http://localhost:5173`.

### Scripts

| Comando        | Descrição                                      |
| -------------- | ---------------------------------------------- |
| `pnpm dev`     | Inicia o servidor de desenvolvimento           |
| `pnpm build`   | Verifica os tipos e gera o build de produção   |
| `pnpm preview` | Serve localmente o build de produção           |
| `pnpm lint`    | Executa o ESLint                               |

## Rotas

| Rota          | Descrição                                           |
| ------------- | --------------------------------------------------- |
| `/`           | Página principal com o formulário e a agenda        |
| `/components` | Vitrine dos componentes de UI usados no projeto     |

## Estrutura do projeto

```
src/
├── assets/           # Ícones e imagens (SVG)
├── components/       # Componentes de UI reutilizáveis (Button, Text, InputText...)
├── core-components/  # Componentes de domínio (formulário de agendamento, agenda...)
├── contexts/         # Contexto e provider dos agendamentos
├── helpers/          # Funções utilitárias de data
├── hooks/            # Hooks customizados (useAppointments, useLocalStorage)
├── models/           # Tipos do domínio (Appointment)
├── pages/            # Layout e páginas da aplicação
├── App.tsx           # Definição das rotas
└── main.tsx          # Ponto de entrada
```

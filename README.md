# Ionic Front

Este é um projeto de aplicativo móvel desenvolvido com Ionic Vue, utilizando TypeScript para criar uma interface responsiva e moderna.

## Tecnologias Utilizadas

- **Ionic Vue**: Framework para desenvolvimento de aplicativos móveis híbridos.
- **Vue 3**: Framework JavaScript progressivo com Composition API.
- **TypeScript**: Superset do JavaScript para tipagem estática.
- **Vite**: Ferramenta de build rápida para desenvolvimento.
- **Capacitor**: Para empacotamento e execução nativa em dispositivos móveis.

## Estrutura do Projeto

```
src/
├── main.ts                 # Ponto de entrada da aplicação
├── App.vue                 # Componente raiz
├── router/
│   └── index.ts            # Configuração das rotas
├── views/                  # Páginas da aplicação
│   ├── HomePage.vue        # Página inicial
│   ├── CadastroPage.vue    # Página de cadastro de usuário
│   ├── LoginPage.vue       # Página de login
│   ├── RecuSenhaPage.vue   # Página de recuperação de senha
│   └── DetalhesPage.vue    # Página de detalhes
├── theme/
│   └── variables.css       # Variáveis de estilo do Ionic
└── vite-env.d.ts           # Tipos para Vite
```

## Funcionalidades Implementadas

### Páginas

1. **HomePage**: Página inicial do aplicativo.
2. **CadastroPage**: Formulário para cadastro de novos usuários com campos para nome, email e senha. Inclui botões de navegação para outras páginas.
3. **LoginPage**: Formulário de login com campos para email e senha.
4. **RecuSenhaPage**: Formulário para recuperação de senha via email.
5. **DetalhesPage**: Página de detalhes com conteúdo básico.

### Navegação

- Sistema de roteamento configurado com Vue Router.
- Botões de navegação entre páginas implementados na CadastroPage.
- Redirecionamento automático para a página inicial (/home) na rota raiz (/).

### Componentes

- Utilização de componentes Ionic como `ion-page`, `ion-header`, `ion-toolbar`, `ion-title`, `ion-content`, `ion-item`, `ion-label`, `ion-input`, `ion-button`.
- Formulários com validação básica (campos obrigatórios).
- Estilos responsivos com Ionic CSS utilities.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/isadoraTorres31/ionicfront.git
   cd ionicfront
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Para build de produção:
   ```bash
   npm run build
   ```

5. Para preview da build:
   ```bash
   npm run preview
   ```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento com Vite.
- `npm run build`: Compila o projeto para produção (TypeScript + Vite).
- `npm run preview`: Visualiza a build de produção localmente.
- `npm run test:e2e`: Executa testes end-to-end com Cypress.
- `npm run test:unit`: Executa testes unitários com Vitest.
- `npm run lint`: Executa o linter ESLint.

## Desenvolvimento

### Adicionando Novas Páginas

1. Crie um novo arquivo Vue em `src/views/`.
2. Adicione a rota no `src/router/index.ts`.
3. Importe e configure o componente na lista de rotas.

### Estilos

- Utilize as variáveis CSS do Ionic em `src/theme/variables.css`.
- Adicione estilos scoped nos componentes Vue para isolamento.

### Testes

- Testes unitários em `tests/unit/`.
- Testes E2E em `tests/e2e/`.

## Deploy

Para deploy em dispositivos móveis:

1. Instale o Capacitor CLI globalmente (se necessário):
   ```bash
   npm install -g @capacitor/cli
   ```

2. Adicione plataformas (Android/iOS):
   ```bash
   npx cap add android
   npx cap add ios
   ```

3. Sincronize e execute:
   ```bash
   npx cap sync
   npx cap run android  # ou ios
   ```

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
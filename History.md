# Histórico de Versões

## [0.7.0] - 07-06-2025

### Adicionado

- Uso do `cy.session` para reutilizar sessões de login.
- Novo comando customizado `loginWithSession`.
- Adequação dos testes de homepage e checkout para utilizar a nova sessão.

## [0.6.1] - 07-06-2025

### Corrigido

- Removendo função `.only` que ficou no teste.
- Adicionando função `.screenshot()` ao final do teste para tirar prints ao finalizar de executar o teste.

## [0.6.0] - 07-06-2025

### Adicionado

- Mais um cenário do carrinho.
- Criação de comando customizado `RemoveProductToCart.ts`

## [0.5.0] - 07-06-2025

### Adicionado

- Allure reports

### Modificado

- Adicionado função `.screenshot()` após a finalização dos cenários para adicionar os prints no relatório do allure.

## [0.4.0] - 07-06-2025

### Adicionado

- Testes de validação de checkout (Finalizar pedido, validações do formulário de checkout)
- Comando customizados: `fillCheckoutForm`, `validateCheckoutError` e `finishCheckout`.
- Criado arquivo `TestData.ts` para ajudar na centralizar os dados em único arquivo, auxiliando o preenchimento apenas dos campos que são necessários para o teste e além de tudo é mais seguro.
- Criações de métodos customizados para retornar elementos e tornar o código menos repetitivo.

### Modificado

- Criação da função `visitSite` apenas para fazer a limpeza de cache antes de cada teste.
- Adequação de todos os testes para utilizar o padrão de interfaces.

## [0.3.1] - 06-06-2025

### Corrigido

- Conflito de merge

## [0.3.0] - 06-06-2025

### Adicionado

- Testes de validação de produtos (ordenação de itens, validações de imagens, adicionar produtos ao carrinho.)
- Comandos customizados: `validateDifferentImages`, `compareProductInfo`, `sortItems`

### Modificado

- Validações do elemento ocorrendo no arquivo de pageObjects ao invés no arquivo de commands.

## [0.2.1] - 06-06-2025

### Corrigido

- Correção no arquivo `History.md`.

## [0.2.0] - 06-06-2025

### Adicionado

- Testes de validação de login (campos vazios, credenciais inválidas)
- Comandos customizados: `doLogin`, `loginSuccessfully`, `validateLoginError`
- Mascaramento de senha nos logs do Cypress
- Arquivo HISTORY.md para versionamento

### Corrigido

- Remoção de código duplicado entre arquivos
- Remoção do arquivo `.gitattributes`

### Modificado

- Refatoração da estrutura de comandos

## [0.1.0] - 05-06-2025

### Adicionado

- Setup inicial do projeto com Cypress + TypeScript
- Estrutura de Page Objects
- Testes para funcionalidade de carrinho
- Comando `addProductToCart`

### Modificado

- Estrutura inicial do projeto

# WEBDRIVERIOJS

Projeto GFT web

Testes automatizados utilizando Chai e WebdriverIO. Projeto de automação web (end-to-end).

Para mais: https://webdriver.io/docs/gettingstarted

# **Intalação e execução dos testes**

- **Instalação do NODE no Windows**

1º Passo: Baixar e instalar o [node.js](https://nodejs.org/dist/v14.16.1/node-v14.16.1-x64.msi);
2º Passo: Verificar o node instalado `node --version` e `npm --version`;
3º Passo: Realizar o git clone do projeto;
4º Passo: No diretório raiz do projeto, executar o comando `npm install`;

## Rodando os testes

- **Executando todos os testes:** 'local'
  
  Exemplo:`npm run test`

- **Executando a suite de teste:** 'suite de teste'

  Exemplo: `npm run login`

Os arquivos que serão executados através do comando 'npm run nome_suite', estão localizados no arquivo 'wdio.config.js'.

# **Estrutura do projeto**

- **data**: Pasta que contém informações dos dados da massa de teste e validações esperadas;

- **helpers**: Pasta com classes e métodos genéricos e auxiliares para os testes
   - **actions**: class é utilizada para criar métodos genéricos que possam ser utilizados em todos os testes e class de pageObject;

- **pageobjects**: Modelo PageObjects de cada tela;

- **test**: Cenários de testes;

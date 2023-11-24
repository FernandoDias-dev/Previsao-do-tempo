# Previsão-do-tempo 
 App de Previsão do tempo com HTML, CSS e JavaScript
# Documentação do Código de Previsão do Tempo

Este é um aplicativo web simples que exibe a previsão do tempo para uma cidade específica. Ele consiste em uma página HTML, estilizada com CSS e interativa com JavaScript. Abaixo está a documentação para cada parte do código.

## Estrutura HTML (`index.html`)

### Meta Tags
- `charset`: Define o conjunto de caracteres para UTF-8.
- `viewport`: Configura a escala inicial e largura da tela para dispositivos móveis.

### Estilos Externos
- `styles.css`: Arquivo externo contendo as regras de estilo para a aplicação.

### Fontes Externas
- `Open Sans`: Fonte do Google Fonts utilizada na aplicação.

### Scripts Externos
- `scripts.js`: Arquivo externo contendo a lógica do JavaScript para interação com a API de previsão do tempo.

### Conteúdo Principal
- `box-video`: Elemento de vídeo em tela cheia reproduzindo um vídeo de clima como plano de fundo.
- `bigger-box`: Contêiner principal para o formulário de pesquisa e exibição da previsão do tempo.
- `input-city`: Campo de entrada para o nome da cidade.
- `button-search`: Botão de pesquisa que aciona a função `iClickedTheButton()` ao ser clicado.
- `medium-box`: Contêiner para exibir informações da cidade, temperatura, condição climática e umidade.
- `city`, `temp`, `text-forecast`, `humidity`: Elementos para exibir informações específicas.
- `smaller-box`: Contêiner para a exibição do ícone da condição climática e a descrição associada.

## Estilos CSS (`styles.css`)

### Reset de Estilos
- Reseta as margens, preenchimentos e caixa-modelo padrão para todos os elementos.

### Estilo Global do Corpo
- Define estilos globais para o corpo da página, centralizando e alinhando itens.

### Estilos para `bigger-box`
- Define estilos para o contêiner principal que exibe a previsão do tempo.
- `background`: Cor de fundo preta com opacidade.
- `border-radius`: Borda arredondada.
- `width`: Largura máxima de 450px.
- `padding`: Preenchimento interno.
- `max-width`: Garante que a caixa não ultrapasse a largura máxima especificada.

### Estilos para `input-city` e `button-search`
- Configurações para o campo de entrada e botão de pesquisa.
- `border`, `outline`, `padding`, `border-radius`: Removem bordas, contornos e ajustam o preenchimento e borda arredondada.
- `background-color`, `color`: Cores de fundo e texto.
- `width`: Largura ajustada para o campo de entrada.
- `cursor`: Altera o cursor ao pairar sobre o botão.

### Estilos para Textos e Ícones
- Define estilos para diversos elementos de texto e ícones utilizados na aplicação.

### Estilos Responsivos
- Mídia consultada para dispositivos com largura máxima de 600px.
- Ajusta estilos para melhor experiência em dispositivos menores.

## Script JavaScript (`scripts.js`)

### Variável `key`
- Contém a chave da API necessária para fazer chamadas à OpenWeatherMap.

### Função `putDataOnScreen(data)`
- Atualiza os elementos HTML com os dados recebidos da API.
- `data`: Objeto contendo os dados da previsão do tempo.

### Função `searchCity(city)`
- Realiza uma chamada assíncrona à API da OpenWeatherMap para obter dados da previsão do tempo para uma cidade específica.
- `city`: Nome da cidade a ser pesquisada.

### Função `iClickedTheButton()`
- Captura o valor do campo de entrada e aciona a função `searchCity(city)`.

## Considerações Finais
Este aplicativo utiliza a API da OpenWeatherMap para obter dados de previsão do tempo e exibe essas informações em uma interface simples e responsiva. Certifique-se de que a chave da API (`key`) seja mantida em segredo para evitar o uso indevido.

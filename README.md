# Teste técnico

Nesse repositório tem uma alternativa de solução para o teste técnico para vaga de Estagio Front-End na Sun4.

# Questão 1

```
function q1RemoverDuplicados(nums) {
  /**
   * Retorna uma lista com apenas um registro de cada elemento
   * 
   * Saída esperada: [1, 2, 3, 4, 5]
  */
  return nums;
}

console.log(q1RemoverDuplicados([1, 2, 2, 3, 4, 4, 5]));
```

- <a href="./q1.js">Resolução</a>

# Questão 2

```
function q2ContarFrequenciaPalavra(text) {
  /**
   * Realiza uma contagem de quantas vezes uma determinada palavra ocorre.
   * Ao final, preferencialmente, ordenar o objeto pelo volume de ocorrência.
   * 
   * Saída esperada: { 'hello': 2, 'world': 1 }
  */
  return {};
}

console.log(q2ContarFrequenciaPalavra("Hello world hello"));
```

- <a href="./q2.js">Resolução</a>

# Questão 3

```
function q3TratarDatas(data) {
  /**
   * Tratar e converter datas para o formato americano AAAA-MM-DD.
   * 
   * Saída esperada: 2022-11-30
  */
  return data;
}

const datasParaTratar = [
  '30/11/2022',
  '01 dez 2022', 
  '25/12/2022', 
  '31 de dezembro de 2022'
];

datasParaTratar.forEach(data => {
  console.log(q3TratarDatas(data));
});
```
- <a href="./q3.js">Resolução</a>

# Questão 4

```
function q4CriarEstruturaHtmlCss() {
  /**
   * Crie uma estrutura básica de layout utilizando `display: flex` para criar um grid responsivo com 3 colunas.
   * 
   * - A estrutura deve conter um cabeçalho, uma área de conteúdo principal com 3 colunas e um rodapé.
   * - Cada coluna deve conter um texto ou um número que indique sua posição (ex: "Coluna 1").
   * - A estrutura deve ser responsiva, onde em telas menores as 3 colunas devem se empilhar verticalmente.
   * - **Diferencial:** Utilize Tailwind CSS para estilizar o layout.
 */
}

```
- <a href="./q4">Resolução código</a>
- <a href="https://teste-tecnico-sun4-q4.vercel.app">Link</a>

# Questão 5

```
function q5CriarLandingPage() {
  /**
   * Crie uma landing page para um produto chamado Jurídico SUN4
   * Esse produto consiste onde advogados podem contratar automações jurídicas
   * para acompanhar seus processos.
   * P.s.: considere que há planos com volume de casos diferentes, ex.: plano I (5000 processos), plano II (10000 processos), etc.
   * 
   * Atente-se a adição de chamadas, preço, descrição, formulário de contato, etc.
   * 
   * Diferencial: utilize tailwind css para estilizar o layout
  */
}
```
- <a href="./q5">Resolução código</a>

- <a href="https://teste-tecnico-sun4.vercel.app">Link</a>
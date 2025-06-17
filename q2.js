function q2ContarFrequenciaPalavra(text) {

    /**
    * Realiza uma contagem de quantas vezes uma determinada palavra ocorre.
    * Ao final, preferencialmente, ordenar o objeto pelo volume de ocorrência.
    * 
    * Saída esperada: { 'hello': 2, 'world': 1 }
    * 
    */
    const list_keys = text.toLowerCase().split(" ")
    const response = list_keys.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr] += 1

        } else {
            acc[curr] = 1

        }
        return acc
    }, {})
    return response;
}

console.log(q2ContarFrequenciaPalavra("Hello world hello"));
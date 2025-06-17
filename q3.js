function q3TratarDatas(data) {
    /**
     * Tratar e converter datas para o formato americano AAAA-MM-DD.
     * 
     * Saída esperada: 2022-11-30
    */
    const meses = {
        "janeiro": '01',
        "fevereiro": "02",
        "março": "03",
        "abril": "04",
        "maio": "05",
        "junho": "06",
        "julho": "07",
        "agosto": "08",
        "setembro": "09",
        "outubro": "10",
        "novembro": "11",
        "dezembro": "12"
    };
    if (data.indexOf("/") > 0) {
        const [dia, mes, ano] = data.split("/")
        return `${ano}-${mes}-${dia}`
    }

    if (data.indexOf(" de ") > 0) {
        const [dia, mes, ano] = data.split(" de ")
        return `${ano}-${meses[mes]}-${dia}`
    }
    if (data.indexOf(" ") > 0) {
        const [dia, mes, ano] = data.split(" ")
        const key_mes = Object.keys(meses).find(mes_key => mes_key.startsWith(mes));
        return `${ano}-${meses[key_mes]}-${dia}`

    }

    return data
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
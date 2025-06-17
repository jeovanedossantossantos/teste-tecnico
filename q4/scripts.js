const render = () => {

    var principal = document.getElementById("principal")
    const valor = document.getElementById("numero").value || 3;
    principal.innerHTML = ""

    for (var i = 0; i < valor; i++) {
        principal.innerHTML += `<div class="w-full md:w-[30%] bg-red-100 p-4 rounded shadow">Card ${i + 1}</div>`
    }

}
render()
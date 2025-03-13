// Função para calcular a diferença entre duas datas e horários
function calcularDiferenca() {
    // Obtém os valores dos campos de entrada e cria objetos Date
    const dataInicial = new Date(document.getElementById('dataInicial').value);
    const dataFinal = new Date(document.getElementById('dataFinal').value);

    // Verifica se as datas são válidas
    if (isNaN(dataInicial) || isNaN(dataFinal)) {
        // Exibe uma mensagem de erro se as datas forem inválidas
        document.getElementById('resultado').innerHTML = "Por favor, insira datas e horários válidos.";
        return; // Sai da função
    }

    // Calcula a diferença entre as datas em milissegundos
    const diferencaEmMilissegundos = Math.abs(dataFinal - dataInicial);

    // Calcula os dias, horas e minutos a partir da diferença em milissegundos
    const dias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24)); // 1000ms * 60s * 60min * 24h
    const horas = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Resto da divisão por dias, dividido por horas
    const minutos = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60)) / (1000 * 60)); // Resto da divisão por horas, dividido por minutos

    // Calcula o total de horas de diferença
    const totalHoras = diferencaEmMilissegundos / (1000 * 60 * 60);

    // Exibe o resultado na div "resultado"
    document.getElementById('resultado').innerHTML = `
        Diferença: ${dias} dias, ${horas} horas e ${minutos} minutos.<br>
        Total de horas: ${totalHoras.toFixed(2)} horas.
    `;
}
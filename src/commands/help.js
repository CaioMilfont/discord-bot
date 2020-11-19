const data = [
    'Comandos: !link aula (número da aula)',
    'Aulas:',
    '1 => Aspectos Teóricos da Computação',
    '2 => Sistemas Distribuídos',
    '3 => Processamento de Imagens',
    '4 => Projeto de Banco de Dados',
]


module.exports = async (msg, args) => {
    msg.channel.send(data)
}
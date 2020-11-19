const data = {
    '1': 'Aspectos Teóricos da Computação => https://meet.google.com/osc-ooub-enu',
    '2': 'Sistemas Distribuídos => http://meet.google.com/awg-pkhp-etu',
    '3': 'Processamento de Imagens => https://meet.google.com/csm-msve-hyz',
    '4': 'Projeto de Banco de Dados => https://meet.google.com/opd-wkyx-mgq'
}


module.exports = async (msg, args) => {
    msg.channel.send(`Aqui esta o Link da Aula ${args[1]} - ${data[args[1]]}`)
}
/*
Problema

Muito popular nos Estados Unidos e na Europa, na lavanderia self service, como o próprio nome indica, o cliente utiliza os serviços dos estabelecimentos para lavar e secar suas roupas por conta própria. O maquinário e os produtos necessários para a lavagem são disponibilizados pela empresa.

Uma empresa de lavanderia self service te contratou para programa um novo sistema de pesagem de roupa que eles estão desenvolvendo, que irá evitar que o cliente coloque mais roupa que a lavadora suporta ou menos roupa do que o permitido. Nesse sitema, o cliente coloca suas roupas em uma balança e uma mensagem é impresa em um visor avisando o cliente se ele pode ou não colocar as roupas na máquina.

A empresa solicitou que esse sistema imprima o seguinte na tela:

• POUCA ROUPA: caso o cliente queira colocar na máquina 10kg ou menos do que a máquina suporta. Isso evitará que o cliente tente colocar pouca roupa para lavar e ocupe a máquina que poderia estar sendo usada por outras pessoas;
• MUITA ROUPA: caso o cliente tente colocar mais roupa, em peso, que a quantidade de roupa que a lavadora suporta;
• PERMITIDO: caso contrário;

Entrada

Sua entrada será formada por duas variáveis:

• peso: do tipo numérico. Peso da roupa do cliente;
• pesoSuportado: do tipo numérico. Peso suportado pela balança;

Saída

Você deve imprimir na tela:

• POUCA ROUPA: caso o cliente queira colocar na máquina 10kg ou menos do que a máquina suporta;
• MUITA ROUPA: caso o cliente tente colocar mais roupa, em peso, que a quantidade de roupa que a lavadora suporta;
• PERMITIDO: caso contrário.

Exemplos
Exemplo de entrada 1
40
45

Saída esperada para 1
PERMITIDO

Explicação de 1

O peso das roupas do cliente é menor que o peso permito em 5kg.

Exemplo de entrada 2
50
65

Saída esperada para 2
POUCA ROUPA

Explicação de 2

O cliente está tentando colocar 50kg em uma máquina que suporta 65kg. Ou seja, ele está tentando colocar 15kg a menos, o que configura pouco peso.
*/

function solucao(peso,pesoSuportado) {
	let differ = pesoSuportado - peso;
	if (differ >= 10) {
		console.log('POUCA ROUPA');
	} else if (peso > pesoSuportado) {
		console.log('MUITA ROUPA');
	} else {
		console.log('PERMITIDO');
	}
}

function naoMexer(input) {
	const [peso,pesoSuportado] = input.trim().split("\n").map(x => Number(x));
	solucao(peso,pesoSuportado);
}
let input = `40
50`;
// require('fs').readFileSync('/dev/stdin','utf8');
naoMexer(input);

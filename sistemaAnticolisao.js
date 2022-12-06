/*
Problema

A Tesla, empresa automotiva e de armazenamento de energia norte americana, está desenvolvendo carros autômatos, que são carros que oferecem algumas funções autônomas importantes da condução e uma direção sem qualquer interferência humana.

Você, como programador da empresa, está responsável por desenvolver o sistema que evitará que a colisão desses carros em rodovias. Para isso, o sistema inteligente desses veículos deve tomar alguma ação nas seguintes situações abaixo:

• Diminuir levemente a velocidade do carro: caso o sensor de distância identifique algum objeto a menos de 200 metros do carro;
• Diminuir drasticamente a velocidade do carro: caso o sensor de distância identifique algum objeto a menos 100 metros do carro;
• Parar o carro: caso o sensor de distância identifique algum objeto a uma distância menor ou igual a 50 metros do carro.

Sendo:

• Uma diminuição leve de velocidade é diminuir 15km/h;
• Uma diminuição drástica de velocidade é diminuir a velocidade do carro pela metade;
• Parar o carro e levar a velocidade do carro para 0.

Entrada

Sua entrada será composta por duas variáveis:

• velocidade: variável numérica que mostra a velocidade atual do carro;
• leituraSensor: variável numérica que mostra a leitura que o sensor de distância está tendo.
Saída

Você deve imprimir na tela velocidade do carro após receber a leitura do sensor e conseguir realizar a ação a ser tomada.

Exemplos
Exemplo de entrada 1
120
150

Saída esperada para 1
105

Explicação de 1

O sensor indica que existe algum objeto a 150m do carro. Portanto, o carro vai diminuir 15km/h da sua velocidade atual, que é de 120km/h (120 - 15 = 105).
*/



function solucao(velocidade,sensor) {
	let saida = velocidade;
	if (sensor < 200 && sensor >= 100) {
		saida = velocidade - 15;	
	} else if (sensor < 100 && sensor > 50) {
		saida = velocidade / 2;
	} else if (sensor <= 50) {
		saida = 0;
	}
	console.log(saida);
}

function naoMexer(input) {
	const [velocidade, sensor] = input.trim().split("\n").map(x => Number(x));
	solucao(velocidade, sensor);
}
let input = `120
200`;
// require('fs').readFileSync('/dev/stdin','utf8');
naoMexer(input);

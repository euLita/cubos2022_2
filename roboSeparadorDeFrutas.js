/**
Problema

Um robô precisa coletar frutas de uma esteira e colocar numa caixa. Ele usa um sistema de câmeras para identificar quais frutas estão passando.

Você foi contratado pela empresa para realizar a programação deste robô e criar um sistema que mostre aos operadores a quantidade de frutas que o robô coletou. A esteira de frutas é representada por um array em que cada posição armazena uma fruta diferente que passou pela esteira. O robô recebe como parâmetro qual fruta ele deve coletar.
Entrada

Sua entrada será composta de duas variáveis:

• frutaColetada: variável do tipo string que armazena a fruta a ser coletada pelo robô;
• esteira: array de strings em que cada posição armazena uma fruta que passou pela esteira;
Saída

Você deve imprimir na tela a quantidade de frutas que o robô coletou.

Exemplos
Exemplo de entrada 1
BANANA
UVA ACEROLA MANGA PERA CAJU CAJU BANANA UVA LARANJA MARACUJA MELANCIA

Saída esperada para 1
1

Explicação de 1

A fruta que o robô deveria coletar é a banana. Somente uma banana passou pela esteira.
**/



function solucao(frutaColetada,esteira) {
	let totalFruta = 0;
  	for (let i = 0; i < esteira.length; i++) {
  		if (esteira[i] == frutaColetada) {
  			totalFruta++;
  		}
  	}
  	console.log(totalFruta);
}
function naoMexer(input) {
	const array = input.trim().split("\n");
	const frutaColetada = array[0];
	const esteira = array[1].trim().split(" ");
	solucao(frutaColetada,esteira);
}
let input = `CAJU
UVA ACEROLA MANGA PERA CAJU CAJU BANANA UVA LARANJA MARACUJA MELANCIA`
// require('fs').readFileSync('/dev/stdin','utf8');
naoMexer(input);


frutaColetada = "UVA";

esteira = ["UVA", "ACEROLA", "MANGA", "PERA", "CAJU", "CAJU", "BANANA", "UVA", "LARANJA", "MARACUJA", "MELANCIA"];
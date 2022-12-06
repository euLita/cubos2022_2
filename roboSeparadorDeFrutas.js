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
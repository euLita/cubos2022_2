
function solucao(notaAlunoA,notaAlunoB) {
	const differ = Math.abs(notaAlunoA - notaAlunoB);
	if ( differ < 1.5) {
		console.log('DUPLA VALIDA');
	} else {
		console.log('DUPLA INVALIDA');
	}
}
function naoMexer(input) {
	const [notaAlunoA, notaAlunoB] = input.trim().split("\n").map(x => Number(x));
	solucao(notaAlunoA,notaAlunoB);
}
let input = '6.5\n8' //require('fs').readFileSync('/dev/stdin','utf8');
naoMexer(input);
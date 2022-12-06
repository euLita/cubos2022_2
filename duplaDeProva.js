/*
Problema

Uma escola resolveu implementar um sistema de provas no qual a última prova de cada matéria é feita em dupla. A escola espera que isso ajude os alunos que estão indo mal a não desistirem.

Para não prejudicar os bons alunos, a escola decidiu que a diferença entre as notas dos dois alunos da dupla deveria ser menor que 1.5 pontos, pois, desta forma, a dupla estaria equilibrada com estudantes que estão com rendimentos próximo. Isso evitaria que algum aluno que estivesse com nota alta tivesse que fazer dupla com algum com nota muito baixa.

Você foi contratado pela escola para implementar o programa que indique aos professores se a dupla que eles estão formando é ou não válida de acordo com critério estabelecido acima.
Entrada

Seu programa será composto por duas entradas:

• notaAlunoA: variável numérica que armazena a nota de um dos alunos da dupla;
• notaAlunoB: variável numérica que armazena a nota do outro aluno da dupla.
Saída

Seu programa deve imprimir:

• DUPLA VALIDA: os membros da dupla tenham notas próximas;
• DUPLA INVALIDA: caso contrário;

Exemplos
Exemplo de entrada 1
8
6

Saída esperada para 1
DUPLA INVALIDA

Explicação de 1

A nota de um dos alunos é 8 e a do outro 6. Uma dupla formada por esses alunos teriam uma diferença entre as notas de 8 - 6 = 2, que é maior que a diferença permitida.
*/



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
/*
Problema

Você foi contratado por uma universidade, que realiza uma prova de vestibular anual, para criar um programa que mostre a quantidade de alunos que vão ingressar em cada ano na instituição.

Todo ano a instituição divulga qual deve ser a nota mínima na prova (nota de corte) que o candidato deve tirar para que ele não seja eliminado do processo seletivo. Além disso, é divulgado também o número máximo de vagas serão disponibilizadas naquele ano.

Entrada

Sua entrada será composta por três variáveis:

• notaMinima: do tipo numérico e que armazena o valor mínimo que o candidato deve tirar na prova para não ser eliminado;
• totalDeVagas: do tipo numérico e que armazena o número de vagas que serão disponibilizadas no ano analisado;
• notasDoVestibular: array de números que armazena as notas tiradas pelos candidatos naquele ano.

Saída

Você deve imprimir na tela a quantidade de alunos que vão ingressar na universidade naquele ano.

Exemplos
Exemplo de entrada 1
65
15
30 56 43 23 56 78 98 76 98 88 77 34.5 67.8 90.5 76.8 94.2 25.6 73 26 33

Saída esperada para 1
11

Explicação de 1

Apesar da universidade ter disponibilizado 15 vagas, somente 11 pessoas obtiveram notas maiores ou iguais a 15, que foi a nota de corte.
*/



function solucao(notaMinima,totalDeVagas,notasDoVestibular) {
	console.log('vagas disponiveis: ', totalDeVagas)
	let i = 0;
	let aptos = [];
	let selecionados = 0;
	// Pega os aptos;
	while (notasDoVestibular.length > i) {
		if (notasDoVestibular[i] >= notaMinima) {
			aptos.push(notasDoVestibular[i]);
		}
		i++;
	}

	aptos = aptos.sort().reverse(); //Ordena do maior para o menor;
	console.log('aptos', aptos)
	/**
	 * Sobrepondo o numero de alunos aptos em relacao ao numero de vagas disponiveis elimine com base no total de vagas disponiveis;
	 */
	let classificados = aptos.slice(0, totalDeVagas);

	selecionados = classificados.length;
	console.log(`classificados:`, classificados)
	console.log(selecionados);
}

function naoMexer(input) {
	const array = input.split("\n");
	const notaMinima = Number(array[0]);
	const totalDeVagas = Number(array[1]);
	const notasDoVestibular = array[2].trim().split(" ").map(x => Number(x));
	solucao(notaMinima,totalDeVagas,notasDoVestibular);
}
let input = `65
1
30 56 95 23 56 78`;
// require('fs').readFileSync('/dev/stdin','utf8');
naoMexer(input);

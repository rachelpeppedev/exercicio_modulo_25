const alunos = [
    {nome: 'Ana', nota: '7'},
    {nome: 'Jose', nota: '5'},
    {nome: 'Andre', nota: '6'},
    {nome: 'Leticia', nota: '8'}
];

function alunosAprovados(arrayAlunos) {
    return arrayAlunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovadosArray = alunosAprovados(alunos);

console.log("Alunos aprovados:");
console.log(alunosAprovadosArray);

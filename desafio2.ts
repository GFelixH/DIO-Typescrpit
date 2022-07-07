interface pessoa {
  nome: string;
  idade: number | string;
  profissao: profissoes;
}
enum profissoes {
  ATRIZ,
  PADEIRO,
}
let pessoa1 = {} as pessoa;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = profissoes.ATRIZ;

let pessoa2 = {} as pessoa;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = profissoes.PADEIRO;

let pessoa3: pessoa = {
  nome: "laura",
  idade: "32",
  profissao: profissoes.ATRIZ,
};

let pessoa4 = {
  nome: "carlos",
  idade: 19,
  profissao: profissoes.PADEIRO,
};

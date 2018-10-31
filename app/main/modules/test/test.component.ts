import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"]
})
export class TestComponent implements OnInit {
  //CONFIGURAÇÃO E PERMISSÃO DO TESTE
  public canMakeTest: boolean;
  public username: string = "Gabriel";
  public testConfig = {
    type: "",
    math: "",
    tech: "",
    fund: ""
  };
  public testTypes: string[] = ["Simulado Aleatório", "Simulado Personalizado"];

  // MOCK
  public mockMath = [
    {
      id: 5,
      statement: "Qual é o valor do determinante da matriz 5x5?",
      alt_a: "325",
      alt_b: "5",
      alt_c: "120",
      alt_d: "1",
      alt_e: "0",
      answer: "b",
      identifier: "math_2017_01",
      category: "math",
      second_statement: "",
      url: "https://image.ibb.co/dZTyWV/math-2017-01.png"
    },
    {
      id: 6,
      statement:
        "Em relação às figuras geométricas planas, a circunferência possui excentricidade:",
      alt_a: "e = 0",
      alt_b: "e = 1",
      alt_c: "e < 1",
      alt_d: "e > 1",
      alt_e: "e = √ 2",
      answer: "a",
      identifier: "math_2017_04",
      category: "math",
      second_statement: "",
      url: ""
    },
    {
      id: 8,
      statement:
        "Dadas as retas 𝑟 : 3𝑥 + 𝑦 − 1 = 0 e 𝑠 : 2𝑥 + 𝑚𝑦 − 8 = 0, qual dos seguintes é um valor de m que faz com que as retas r e s formem um ângulo de 45°?\n",
      alt_a: "1",
      alt_b: "√2\n",
      alt_c: "0\n",
      alt_d: "-1\n",
      alt_e: "2\n",
      answer: "d",
      identifier: "math_2017_08",
      category: "math",
      second_statement: "",
      url: ""
    },
    {
      id: 9,
      statement: "Qual a solução do seguinte sistema de equações?",
      alt_a: "(x1, x2, x3) = (1,1,0)",
      alt_b: " (x1, x2, x3) = (2,0, −1)\n",
      alt_c: "(x1, x2, x3) = (0,1,0)\n",
      alt_d: " (x1, x2, x3) = (2,1,0)\n",
      alt_e: "(x1, x2, x3) = (2,2, −1)\n",
      answer: "b",
      identifier: "math_2017_07",
      category: "math",
      second_statement: "",
      url: "https://image.ibb.co/mZdyWV/math-2017-07.png"
    },
    {
      id: 10,
      statement:
        "Considere as seguintes premissas sobre os alunos de uma universidade:\nI. Algum aluno que é estagiário não recebe bolsa.\nII. Todos aqueles alunos que estão no último período recebem bolsa.",
      alt_a: "algum aluno do último período é estagiário.",
      alt_b: "todos os alunos do último período não são estagiários.",
      alt_c: "algum aluno que é estagiário não está no último período.",
      alt_d: "algum aluno do último período não é estagiário.",
      alt_e: "todos os alunos que são estagiários não estão no último período.",
      answer: "c",
      identifier: "math_2017_11",
      category: "math",
      second_statement: "Portanto,",
      url: ""
    },
    {
      id: 11,
      statement:
        "De um grupo composto por 12 estudantes, apenas 6 estão habilitados para dirigir. Quantas equipes com 7 estudantes são possíveis formar considerando que em cada equipe deve haver ao menos um que seja habilitado?",
      alt_a: "722",
      alt_b: "792",
      alt_c: "836",
      alt_d: "894",
      alt_e: "908",
      answer: "b",
      identifier: "math_2017_13",
      category: "math",
      second_statement: "",
      url: ""
    },
    {
      id: 12,
      statement:
        "Considere a seguinte afirmação: “Há uma sorveteria onde todos os sorvetes são doces, mas não contém adoçantes.”",
      alt_a: "Não há sorveteria que faz sorvetes doces e com adoçantes.",
      alt_b:
        "Há uma sorveteria em que sorvete algum é doce ou contém adoçante.",
      alt_c:
        "Em toda sorveteria, há um sorvete que não é doce, mas contém adoçante.",
      alt_d:
        "Em toda sorveteria, há sempre algum sorvete que não é doce ou que contém adoçante.",
      alt_e:
        "Há uma sorveteria em que há algum sorvete que não é doce ou que contém adoçante.",
      answer: "d",
      identifier: "math_2017_15",
      category: "math",
      second_statement:
        "A negação da afirmação acima é logicamente equivalente à afirmação:",
      url: ""
    },
    {
      id: 13,
      statement:
        "Em uma farmácia, trabalham 6 farmacêuticos e 9 atendentes. De quantas maneiras distintas é possível organizar um plantão de fim de semana composto por 2 farmacêuticos e 5 atendentes?\n",
      alt_a: "1.260",
      alt_b: " 1.620",
      alt_c: " 1.890",
      alt_d: "1.960",
      alt_e: "2.040",
      answer: "c",
      identifier: "math_2017_17",
      category: "math",
      second_statement: "",
      url: ""
    },
    {
      id: 14,
      statement:
        "Uma variável aleatória está definida pela seguinte função de densidade de probabilidade:\n",
      alt_a: "0,76",
      alt_b: "0,25",
      alt_c: "0,31",
      alt_d: "0,80",
      alt_e: "0,38",
      answer: "c",
      identifier: "math_2017_18",
      category: "math",
      second_statement:
        "Qual é a probabilidade para que a variável aleatória tenha um valor entre 0,25 e 0,75?",
      url: "https://image.ibb.co/mKyMkq/math-2017-18.png"
    },
    {
      id: 15,
      statement:
        "Deseja-se preparar um recipiente com 100g de um produto extremamente caro, sendo necessário minimizar o erro na hora da pesagem. Para isso, se dispõe de uma balança que possui erro de medição, σ, dependente da quantidade pesada (μ), da forma σ = 0,1μ. Com qual dos seguintes métodos se obtém maior precisão na pesagem?\n",
      alt_a: "Pesando as 100g de uma vez",
      alt_b:
        "Pesando 10 recipientes de 100g, realizando a média e escolhendo um recipiente aleatório.",
      alt_c: "Pesando 5 porções de 20g e depois juntando-as.",
      alt_d: "Pesando 10 porções de 10g e depois juntando-as.",
      alt_e: "Pesando 2 porções de 50g e depois juntando-as",
      answer: "d",
      identifier: "math_2017_20",
      category: "math",
      second_statement: "",
      url: ""
    }
  ];
  public mockTech = [
    {
      id: 24,
      statement:
        "Em Rede de Computadores, qual entidade indica o processo que receberá o pacote de entrada?",
      alt_a: "Porta.",
      alt_b: "Endereço IP.",
      alt_c: "Endereço Ethernet.",
      alt_d: "Identificador do processo.",
      alt_e: "Endereço URL.",
      answer: "a",
      identifier: "tech_2017_54",
      category: "tech",
      second_statement: "",
      url: ""
    },
    {
      id: 25,
      statement:
        "Em consultas escritas em SQL, quando há pelo menos um NULL no predicado da cláusula WHERE, o resultado da avaliação é “desconhecido” (exceto quando são explicitamente empregados IS NULL ou IS NOT NULL); por exemplo, o resultado da avaliação de 3+NULL>7 é “desconhecido”. Portanto, “verdadeiro”, “falso” e “desconhecido” são os resultados possíveis na avaliação de predicados da cláusula WHERE. A regra geral é que são selecionadas apenas as combinações de tuplas em que o predicado é avaliado como “verdadeiro”. Seja a relação R que possui quatro tuplas – (12, 15, 5100), (13, NULL, 3500), (14, NULL, NULL) e (15, 12, NULL) – em que o primeiro, o segundo e o terceiro valores em cada tupla referem-se aos atributos at1, at2 e at3, respectivamente. Os comandos a seguir representam consultas sobre R:",
      alt_a: "dois, um e dois.",
      alt_b: "dois, dois e um.",
      alt_c: "um, um e dois.",
      alt_d: "um, dois e um.\n",
      alt_e: "dois, dois, dois.",
      answer: "d",
      identifier: "tech_2017_55",
      category: "tech",
      second_statement:
        "(C1) select * from R where (at1>=12) AND (at2>14)\n\n(C2) select * from R where (at2>12) OR (at3>3000)\n\n(C3) select * from R where (NOT (at1<at2))\n\nA quantidade de tuplas retornadas pelas execuções dos comandos (C1), (C2) e (C3), respectivamente, é:",
      url: ""
    },
    {
      id: 26,
      statement:
        "São técnicas de processamento digital todas as opções abaixo, EXCETO:",
      alt_a: "Processamento morfológico.",
      alt_b: "Amostragem e quantização.",
      alt_c: "Segmentação.",
      alt_d: "Têmpera simulada.\n",
      alt_e: "Limiarização.",
      answer: "d",
      identifier: "tech_2017_59",
      category: "tech",
      second_statement: "",
      url: ""
    },
    {
      id: 27,
      statement:
        "Qual protocolo faz o mapeamento de endereço IP em endereço Ethernet?",
      alt_a: "IEEE 802.11",
      alt_b: "DNS",
      alt_c: "TCP",
      alt_d: "IP",
      alt_e: "ARP",
      answer: "e",
      identifier: "tech_2017_60",
      category: "tech",
      second_statement: "",
      url: ""
    },
    {
      id: 28,
      statement:
        "Uma representação intermediária do programa fonte pode ser gerada com a transformação da árvore de derivação em um segmento de código. Em relação à etapa de geração de código intermediário do compilador, qual das alternativas está INCORRETA?",
      alt_a:
        "Definindo-se uma representação intermediária adequada, um compilador construído pode combinar um front-end para uma linguagem x com um back-end para a linguagem y.\n",
      alt_b:
        "Árvores de sintaxe e códigos de três endereços são algumas das possibilidades de representação intermediária.",
      alt_c:
        "Linguagens de alto nível, como, por exemplo, a linguagem C, podem ser utilizadas como uma forma de representação intermediária.",
      alt_d:
        "Na geração de código intermediário, são realizadas tarefas como seleção de instruções, alocação e atribuição de registrador e escalonamento de instruções que dependem do conhecimento da máquina-alvo para a qual será gerado o código objeto.",
      alt_e:
        "Uma das vantagens da aplicação da fase de geração de código intermediário é a possibilidade de realização de otimização e a tradução do código para diversas máquinas.",
      answer: "d",
      identifier: "tech_2017_63",
      category: "tech",
      second_statement: "",
      url: ""
    },
    {
      id: 29,
      statement:
        "Em sistemas de arquivos distribuídos, o requisito no qual os programas clientes não devem conhecer a distribuição de arquivos, sendo que um único conjunto de operações é fornecido para acesso a arquivos locais e remotos, é denominado transparência de",
      alt_a: "acesso.",
      alt_b: "desempenho.",
      alt_c: "escala.",
      alt_d: "localização.",
      alt_e: "mobilidade.",
      answer: "a",
      identifier: "tech_2017_64",
      category: "tech",
      second_statement: "",
      url: ""
    },
    {
      id: 30,
      statement:
        "Inteligência Artificial é uma área da ciência que se propõe a elaborar algoritmos que simulem a capacidade cognitiva humana. Assinale a técnica computacional que NÃO faz parte de Inteligência Artificial. ",
      alt_a: "Sistemas multiagentes.",
      alt_b: "Redes neurais artificiais.",
      alt_c: "Algoritmos genéticos.",
      alt_d: "Filtros de transformação espacial.",
      alt_e: "Lógica difusa.",
      answer: "d",
      identifier: "tech_2017_66",
      category: "tech",
      second_statement: "",
      url: ""
    },
    {
      id: 31,
      statement:
        "A tarefa principal de um analisador léxico consiste em ler os caracteres da entrada do programa-fonte, agrupá-los em lexemas e gerar uma sequência de tokens que será enviada ao analisador sintático. Sobre o analisador léxico, analise as assertivas abaixo:\n\nI. Além da identificação de lexemas, outras tarefas podem ser realizadas por esse analisador, tais como: remoção de comentários e espaços em branco e a associação de mensagens de erros às linhas do programa-fonte.\nII. Token é a unidade básica do texto-fonte. Pode ser representado por três informações: a classe do token, que representa o tipo do token reconhecido, o valor do token, que é o texto do lexema reconhecido e a posição que indica o local do texto-fonte (linha e coluna) onde ocorreu o token.\nIII. Expressões regulares e geradores de analisadores léxicos são notações utilizadas para especificar os padrões de lexemas.\nIV. Na análise léxica, uma representação intermediária do tipo árvore é criada. Esta apresenta a estrutura gramatical da sequência de tokens.",
      alt_a: "Apenas I. ",
      alt_b: "Apenas II.",
      alt_c: "Apenas IV.",
      alt_d: "Apenas I e II.",
      alt_e: "Apenas III e IV.",
      answer: "a",
      identifier: "tech_2017_68",
      category: "tech",
      second_statement: "Quais estão corretas?",
      url: ""
    },
    {
      id: 32,
      statement:
        "O termo Aprendizado de Máquina pode ser corretamente definido como:",
      alt_a: "A capacidade de um dispositivo eletrônico resolver um problema.",
      alt_b:
        "A construção de sistemas capazes de adquirir conhecimento a partir de exemplos.",
      alt_c:
        "Um programa de computador que toma decisões baseado em experiências não mapeadas.",
      alt_d: "Um programa de computador que executa com perfeição uma tarefa.",
      alt_e:
        "Um programa de computador que evolui automaticamente para versões aprimoradas.",
      answer: "b",
      identifier: "tech_2017_69",
      category: "tech",
      second_statement: "",
      url: ""
    },
    {
      id: 33,
      statement:
        "Requisitos não funcionais de software são aqueles que não dizem respeito às funções específicas de software, mas, sim, a propriedades que o sistema deve possuir, ou restrições que deve atender. Existem diferentes tipos de requisitos funcionais. Abaixo estão listados exemplos para diferentes tipos de requisitos não funcionais:\n- ________________: o software deve ser desenvolvido utilizando a linguagem de programação Java versão 7.4.\n- ________________: deve ser possível acessar o sistema a partir dos browsers Chrome, Internet Explorer e Safari.\n- ________________: o sistema deve extrair os tweets da plataforma Twitter utilizando a API REST disponível para este fim (detalhes de acesso à API em www.twitter.com/API).",
      alt_a: "Desempenho – Portabilidade – Padrões",
      alt_b: "Eficiência – Padrões – Portabilidade",
      alt_c: "Implementação – Interoperabilidade – Portabilidade",
      alt_d: "Implementação – Portabilidade – Interoperabilidade",
      alt_e: "Eficiência – Padrões – Interoperabilidade",
      answer: "d",
      identifier: "tech_2017_70",
      category: "tech",
      second_statement:
        "Assinale a alternativa que preenche, correta e respectivamente, as lacunas do trecho acima.",
      url: ""
    }
  ];
  public mockFund = [
    {
      id: 1,
      statement: "Dado o trecho de código:",
      alt_a: "O(n log n)",
      alt_b: "O(log n)",
      alt_c: "O(n)",
      alt_d: "O(n)²",
      alt_e: "O(?n)",
      answer: "A",
      identifier: "fund_2018_22",
      category: "fund",
      second_statement:
        "Assumindo que a instrução c=c+1 é O(1), a expressão que melhor define a ordem de complexidade desse trecho é:",
      url: "https://image.ibb.co/kUWkBV/fund-2018-22.png"
    },
    {
      id: 4,
      statement: "Sobre árvores binárias, é correto afirmar que:",
      alt_a:
        "É uma árvore em que todo nó interno contém um registro e, para cada nó, a seguinte propriedade é verdadeira: todos os registros com chaves menores estão na subárvore esquerda e todos os registros com chaves maiores estão na subárvore direita.",
      alt_b:
        "A altura de um nó é o comprimento do caminho mais longo deste nó até um nó folha. A altura de uma árvore é a altura do nó raiz.",
      alt_c:
        "Se o nível do nó raiz de uma árvore binária é zero; se um nó está no nível i, a raiz de suas duas subárvores está no nível i+2.",
      alt_d:
        "O número de subárvores de um nó é chamado de grau. Um nó de grau dois é chamado de nó externo ou nó folha.",
      alt_e:
        "Para encontrar um registro que contém a chave x em uma árvore binária de pesquisa, primeiro compare-a com a chave que está na raiz. Se é menor, vá para a subárvore da direita; se é maior, vá para a subárvore da esquerda.",
      answer: "B",
      identifier: "fund_2018_24",
      category: "fund",
      second_statement: "",
      url: ""
    },
    {
      id: 16,
      statement:
        "Considere o problema de somar os n elementos de um mesmo arranjo A de inteiros. O problema é resolvido da seguinte forma: (i) somam-se recursivamente os elementos da primeira metade de A; (ii) somam-se recursivamente os elementos da segunda metade de A; e (iii) soma-se esses dois valores juntos. Que tipo de recursão foi utilizada para a solução do problema?",
      alt_a: "Linear.",
      alt_b: "Binária.",
      alt_c: "Ternária.",
      alt_d: "Final.",
      alt_e: "Final.",
      answer: "b",
      identifier: "fund_2017_23",
      category: "fund",
      second_statement: "",
      url: ""
    },
    {
      id: 17,
      statement:
        "A análise de algoritmos que estabelece um limite superior para o tempo de execução de qualquer entrada é denominada análise",
      alt_a: "do melhor caso.",
      alt_b: " do caso médio.",
      alt_c: " do pior caso. ",
      alt_d: "da ordem de crescimento.",
      alt_e: "do tamanho da entrada.",
      answer: "c",
      identifier: "fund_2017_25",
      category: "fund",
      second_statement: "",
      url: ""
    },
    {
      id: 18,
      statement:
        "O caminhamento pré-fixado à esquerda para uma Árvore Binária de Pesquisa (ABP)\né 44, 30, 12, 26, 36, 33, 92, 64, 46, 98.",
      alt_a: "26, 12, 33, 36, 30, 46, 64, 98, 92, 44",
      alt_b: "44, 92, 98, 64, 46, 30, 36, 33, 12, 26",
      alt_c: "12, 26, 30, 33, 36, 44, 46, 64, 92, 98",
      alt_d: "98, 46, 64, 92, 33, 36, 26, 12, 30, 44",
      alt_e: "98, 92, 64, 46, 44, 36, 33, 30, 26, 12",
      answer: "b",
      identifier: "fund_2017_26",
      category: "fund",
      second_statement:
        "O caminhamento pré-fixado à direta para a mesma árvore é:",
      url: ""
    },
    {
      id: 19,
      statement: "A saída do trecho de código em C abaixo é:",
      alt_a: "i: 1 j: 4 k:1",
      alt_b: "i: 15 j: 1 k:0",
      alt_c: "i: 10 j: 14 k:2",
      alt_d: "i: 13 j: 2 k:3",
      alt_e: "i: 3 j: 1 k:4",
      answer: "b",
      identifier: "fund_2017_27",
      category: "fund",
      second_statement: "",
      url: "https://image.ibb.co/nHmwJA/fund-2017-27.png"
    },
    {
      id: 20,
      statement:
        "De acordo com o diagrama de classes UML a seguir, assinale a alternativa que se relaciona diretamente com o conceito de polimorfismo da programação orientada a objetos.",
      alt_a: "A relação entre as classes “Livro” e “Capítulo”.",
      alt_b:
        "Os atributos “número: int” e “númeroDePágs: int” da classe “Capítulo”.",
      alt_c: "O método “ImprimeNome” das classes “Artefato” e “Livro”.",
      alt_d: "O atributo “autor: String” da classe “Livro”.",
      alt_e: "A relação entre as classes “Capítulo” e “Página”.",
      answer: "c",
      identifier: "fund_2017_28",
      category: "fund",
      second_statement: "",
      url: "https://image.ibb.co/d89GJA/fund-2017-28.png"
    },
    {
      id: 21,
      statement:
        "Analise as assertivas a seguir sobre compressão de dados:\nI. A técnica de codificação corrida (do inglês RLE – run-length encoding) é adequada quando existem longas sequências de bits repetidos, pois utiliza contadores representando sequências alternadas de 0s e de 1s.\nII. A técnica de compressão de Huffman é baseada em códigos de tamanho variável, tal que os códigos de menor comprimento são atribuídos aos caracteres mais frequentes, e os de maior comprimento aos de menor frequência.\nIII. Quando o método LZW (Lempel–Ziv–Welch) é utilizado, a mensagem resultante da compressão inclui também uma representação dos códigos utilizados para a compressão.\nIV. Não existe um algoritmo de compressão de dados universal, isto é, que transforme qualquer sequência de bits (bitstream) de entrada em uma outra sequência de bits menor. ",
      alt_a: "Apenas I.",
      alt_b: "Apenas II.",
      alt_c: "Apenas III.",
      alt_d: "Apenas III.",
      alt_e: "Apenas III e IV.",
      answer: "c",
      identifier: "fund_2017_29",
      category: "fund",
      second_statement: "Quais estão INCORRETAS?",
      url: ""
    },
    {
      id: 22,
      statement:
        "Um dos erros mais comuns que pode ocorrer durante a avaliação de uma expressão aritmética em um programa é quando o resultado de uma operação não pode ser representado na célula de memória para o qual ele foi alocado. Esse erro é chamado de transbordamento (_____________) e transbordamento negativo (_____________), dependendo se o resultado é muito grande ou muito pequeno.",
      alt_a: "big error – small error ",
      alt_b: "coerção – sobrecarga",
      alt_c: "encapsulamento – abstração",
      alt_d: "overflow – underflow",
      alt_e: "transparência – efeito colateral",
      answer: "d",
      identifier: "fund_2017_30",
      category: "fund",
      second_statement:
        "Assinale a alternativa que preenche, correta e respectivamente, as lacunas do trecho acima.",
      url: ""
    },
    {
      id: 23,
      statement:
        "Em relação ao grafo da Figura (a), as Figuras (b) e (c) representam, respectivamente,",
      alt_a: "matriz de arestas e lista de incidências. ",
      alt_b: "matriz de adjacências e lista de adjacências.",
      alt_c: "matriz de conexões e lista de arestas.",
      alt_d: "matriz de incidências e lista de vértices.",
      alt_e: "matriz de vértices e lista de conexões.",
      answer: "b",
      identifier: "fund_2017_32",
      category: "fund",
      second_statement: "",
      url: "https://image.ibb.co/jD7QBV/fund-2017-32.png"
    }
  ];
  public questionToGo;

  // VARIÁVEIS USADAS NO TESTE EM SI
  public nQuestions: number = 1;
  public answered: number = 0;
  public questionNumber: number = 0;
  public questionYear: number = 0;
  public questionClass: string = "";
  public testProgress: number = 0;
  constructor(private toastrService: ToastrService) {}
  ngOnInit() {
    let q = this.getRandomInt(10);
    this.questionToGo = this.mockFund[q];
    let splitted = this.mockFund[q].identifier.toString().split("_");
    this.questionNumber = parseInt(splitted[2]);
    this.questionYear = parseInt(splitted[1]);
    this.questionClass =
      splitted[0] === "math"
        ? "Matemática"
        : splitted[0] === "fund"
          ? "Fundamentos da computação"
          : "Tecnologias da computação";
  }

  changedTestType(e) {
    this.testConfig.type = e.value;
  }

  clearChoices() {
    this.testConfig = {
      type: "",
      math: "",
      tech: "",
      fund: ""
    };
  }

  skipQuestion() {}

  confirmAnswer() {}

  validateForm() {
    this.canMakeTest = false;
    if (this.testConfig.type === "Simulado Personalizado") {
      if (
        this.testConfig.math !== "" &&
        this.testConfig.tech !== "" &&
        this.testConfig.fund !== ""
      ) {
        if (
          parseInt(this.testConfig.math) <= 10 &&
          parseInt(this.testConfig.math) <= 10 &&
          parseInt(this.testConfig.math) <= 10
        ) {
          this.canMakeTest = true;
          this.nQuestions =
            parseInt(this.testConfig.math) +
            parseInt(this.testConfig.tech) +
            parseInt(this.testConfig.fund);
        } else {
          this.toastrService.error(
            "O número máximo de questões de cada tipo é 10.",
            "Erro"
          );
        }
      } else {
        this.toastrService.error("Há campos que não foram preenchidos", "Erro");
      }
    } else if (this.testConfig.type === "Simulado Aleatório") {
      this.canMakeTest = true;
    } else {
      this.toastrService.error("Preencha o tipo do simulado", "Erro");
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}

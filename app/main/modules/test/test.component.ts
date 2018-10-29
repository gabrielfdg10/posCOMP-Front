import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { HttpService } from "src/app/services/http.service";
import { Test } from "src/app/classes/test";
import { QuestionOnTest } from "src/app/classes/questionOnTest";
import { Router } from "@angular/router";

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

  // VARIÁVEIS USADAS NO TESTE EM SI
  public nQuestions: number = 1;
  public answered: number = 0;
  public questionNumber: number = 0;
  public questionYear: number = 0;
  public questionClass: string = "";
  public testProgress: number = 0;
  public loadingTest = false;
  public currentQuestion: any;
  public currentIndex: number;
  public selectedAlternative: string = "";
  public questionsId: any;
  public questionsToGo: any;
  public score;
  public test: Test;
  public testResults: any;
  public finishedTest: boolean = false;

  public barChartLabels:string[];
  public barChartData:any[];

  public accuracy = {
    math: null,
    fund: null,
    tech: null
  };

  constructor(
    private toastrService: ToastrService,
    private httpService: HttpService,
    private router: Router
  ) {}

  ngOnInit() {}

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

  skipQuestion() {
    this.currentIndex++;
    this.makeQuestion();
    this.testProgress = (this.currentIndex / this.nQuestions) * 100;
    this.answered++;
  }

  confirmAnswer() {
    this.currentIndex++;
    let correct = 0;
    console.log(this.currentQuestion.answer, this.selectedAlternative);
    if (this.currentQuestion.answer === this.selectedAlternative) {
      correct = 1;
      switch (this.currentQuestion.category) {
        case "math":
          this.test.math_correct_answers++;
          break;
        case "fund":
          this.test.fund_correct_answers++;
          break;
        case "tech":
          this.test.tech_correct_answers++;
          break;
      }
      this.score++;
    }
    this.testResults.push({
      id: this.currentQuestion.id, correct: correct, question_type: this.currentQuestion.category
    });
    this.makeQuestion();
    this.testProgress = (this.currentIndex / this.nQuestions) * 100;
    this.answered++;

    if (this.answered === this.nQuestions) {
      this.finalizeTest();
    }
  }

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
      this.testConfig.math = "5";
      this.testConfig.fund = "5";
      this.testConfig.tech = "5";
      this.canMakeTest = true;
    } else {
      this.toastrService.error("Preencha o tipo do simulado", "Erro");
    }

    if (this.canMakeTest) {
      this.startTest();
    }
  }

  startTest() {
    this.finishedTest = false;
    this.test = new Test(
      null, null, "", "", null, null, null,
      null, null, null, null, ''
    );
    this.testResults = [];
    //SETANDO O ID DO USUARIO QUE FEZ O TESTE
    this.test.id = 0;
    this.test.user_id = 1;
    this.test.timestart = new Date().toString();
    this.test.math_number_questions = parseInt(this.testConfig.math);
    this.test.tech_number_questions = parseInt(this.testConfig.tech);
    this.test.fund_number_questions = parseInt(this.testConfig.fund);
    this.test.math_correct_answers = 0;
    this.test.tech_correct_answers = 0;
    this.test.fund_correct_answers = 0;
    this.test.type = this.testConfig.type;

    this.score = 0;
    this.loadingTest = true;
    this.nQuestions =
      parseInt(this.testConfig.math) +
      parseInt(this.testConfig.tech) +
      parseInt(this.testConfig.fund);
    let mathNumber = parseInt(this.testConfig.math);
    let techNumber = parseInt(this.testConfig.tech);
    let fundNumber = parseInt(this.testConfig.fund);

    let x = 0;
    this.questionsToGo = [];
    this.answered = 0;
    this.httpService
      .getQuestionsByClass("math", mathNumber)
      .subscribe((response: any) => {
        console.log(response);
        response.forEach(element => {
          this.questionsToGo.push(element);
        });

        this.httpService
          .getQuestionsByClass("tech", techNumber)
          .subscribe((response: any) => {
            response.forEach(element => {
              this.questionsToGo.push(element);
            });
            this.httpService
              .getQuestionsByClass("fund", fundNumber)
              .subscribe((response: any) => {
                response.forEach(element => {
                  this.questionsToGo.push(element);
                });
                this.questionsToGo = this.shuffleArray(this.questionsToGo);
                this.questionsId = [];
                this.questionsToGo.forEach(element => {
                  this.questionsId.push(element.id);
                });
                this.makeQuestion();
              });
          });
        this.loadingTest = false;
      });

    this.currentIndex = 0;
    this.makeQuestion();
  }

  finalizeTest() {
    console.log(this.test);
    this.accuracy = {
      math: (this.test.math_correct_answers/ this.test.math_number_questions * 100).toFixed(0).toString() + ' %',
      fund: (this.test.fund_correct_answers/ this.test.fund_number_questions * 100).toFixed(0).toString() + ' %',
      tech: (this.test.tech_correct_answers/ this.test.tech_number_questions * 100).toFixed(0).toString() + ' %',
    }
    this.test.timeend = new Date().toString();
    this.test.accuracy = (this.score/this.nQuestions) *100;
    let testId: number;
    this.httpService.postNewTest(this.test).subscribe(
      (response: number) => {
        testId = response;
        this.testResults.forEach(element => {
          this.httpService.postNewRelation(new QuestionOnTest(testId, element.id, element.correct, element.question_type)).subscribe(
            (response) => {
              console.log(response);
            }
          );
        });
      }
    )
    this.finishedTest = true;
    this.barChartLabels = ['Matemática', 'Tecnologias', 'Fundamentos'];
    this.barChartData = [
      {data: [this.test.math_number_questions, this.test.tech_number_questions, this.test.fund_number_questions], label: 'Total de questões'},
      {data: [this.test.math_correct_answers, this.test.tech_correct_answers, this.test.fund_correct_answers], label: 'Respostas corretas'},
      {data: [this.test.math_number_questions-this.test.math_correct_answers, this.test.tech_number_questions-this.test.tech_correct_answers, this.test.fund_number_questions-this.test.fund_correct_answers], label: 'Respostas erradas'},
    ];
  }

  makeQuestion() {
    this.selectedAlternative = "";
    this.currentQuestion = {};
    this.currentQuestion = this.questionsToGo[this.currentIndex];
    let splitted = this.currentQuestion
      ? this.currentQuestion.identifier.toString().split("_")
      : [];
    this.questionNumber = parseInt(splitted[2]);
    this.questionYear = parseInt(splitted[1]);
    this.questionClass =
      splitted[0] === "math"
        ? "Matemática"
        : splitted[0] === "fund"
          ? "Fundamentos da computação"
          : "Tecnologias da computação";
  }

  shuffleArray(arr) {
    return arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

  resetTest(){
    this.finishedTest = false;
    this.canMakeTest = false;
    this.testProgress = 0;
    this.clearChoices();
  }

  changedAlternative(e: any) {
    this.selectedAlternative = e;
  }
  goToHome(){
    this.router.navigateByUrl('/dashboard/profile');
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizDataService } from '../services/quiz-data.service';
import { QuestionAnswerModel } from './question-answer.model'

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent implements OnInit {

  constructor(private _quizService: QuizDataService, private router: Router) { }
  currentQuestion: string = "What is the correct HTML for inserting an image?";
  currentQuestionOption_A: string = "<img alt='My image'>image.jpg</img>"
  currentQuestionOption_B: string = "<img alt='My image' src='image.jpg'>"
  currentQuestionOption_C: string = "<img alt='My image' href='image.jpg'>"
  currentQuestionOption_D: string = "<image alt='My image' src='image.jpg'>"
  currentcorrectAnswer: string = ""
  correctAnswerCount: number = 0
  quizQuestionList: QuestionAnswerModel[] = [];
  currentIndex: number = 0
  ngOnInit(): void {
    this.resetQuizData();
  }

  validateAnswer(selectedAnswer: string) {
    this.quizQuestionList[this.currentIndex].SelectedAnswer = selectedAnswer;
    this.updateScore();
    this.displayNextQuestion();
  }
  displayNextQuestion() {
    if (this.currentIndex < this.quizQuestionList.length - 1) {
      this.currentIndex++;
      this.displayNewQuestion();
    }
    else {
      this.prepareScore();
    }
  }

  displayNewQuestion() {
    let currentQuestionItem: QuestionAnswerModel = this.quizQuestionList[this.currentIndex]
    this.currentQuestion = currentQuestionItem.Question
    let optionArray = [];
    optionArray.push(currentQuestionItem.Option_A);
    optionArray.push(currentQuestionItem.Option_B);
    optionArray.push(currentQuestionItem.Option_C);
    optionArray.push(currentQuestionItem.Option_D);
    optionArray = this.suffleArray(optionArray);
    this.currentQuestionOption_A = optionArray[0]
    this.currentQuestionOption_B = optionArray[1]
    this.currentQuestionOption_C = optionArray[2]
    this.currentQuestionOption_D = optionArray[3]
  }

  suffleArray(itemArray): any {
    for (let index = itemArray.length - 1; index > 0; index--) {
      let randomIndex = Math.floor(Math.random() * (index + 1))
      const currentElement = itemArray[index];
      const randomElement = itemArray[randomIndex];
      itemArray[randomIndex] = currentElement;
      itemArray[index] = randomElement;
    }
    return itemArray;
  }
  prepareScore() {
    document.getElementById("slideBg").style.display = "block";
    document.getElementById("resultModal").style.display = "block";
    document.getElementById("resultModal").classList.add("show")
    
  }

  //Update Scores After Select Any Option based on correct Answer
  updateScore() {
    this.correctAnswerCount = this.quizQuestionList.filter(el => el.CorrectAnswer == el.SelectedAnswer).length
  }

  closeModel(isRetry: boolean = false) {
    document.getElementById("slideBg").style.display = "none";
    document.getElementById("resultModal").style.display = "none";
    document.getElementById("resultModal").classList.remove("show")
    if (isRetry)
      this.resetQuizData();
    else
      this.router.navigate(['/']);
  }

  resetQuizData() {
    this.currentIndex = 0;
    this.correctAnswerCount = 0;
    this._quizService.getDataFromLocal('assets/QuestionAnswerData.json').subscribe((resp: QuestionAnswerModel[]) => {
      if (resp != null) {
        this.quizQuestionList = this.suffleArray(resp['QuestionList']);
        this.displayNewQuestion();
      }
    })
  }
}

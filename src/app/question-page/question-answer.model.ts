export class QuestionAnswerModel {
    QuestionNo: number;
    Question: string;
    Option_A: string;
    Option_B: string;
    Option_C: string;
    Option_D: string;
    CorrectAnswer: string;
    SelectedAnswer: string;
    isDone: boolean = false

    public QuestionAnswerModel(_questionNo: number,_question: string,_option_A: string,_option_B: string,
        _option_C: string,_option_D: string,_correctAnswer: string,_selectedAnswer: string,_isDone: boolean = false){
        this.QuestionNo=_questionNo;
        this.Question=_question;
        this.Option_A=_option_A;
        this.Option_B=_option_B;
        this.Option_C=_option_C;
        this.Option_D=_option_D;
        this.CorrectAnswer=_correctAnswer;
        this.SelectedAnswer=_selectedAnswer;
    }
}
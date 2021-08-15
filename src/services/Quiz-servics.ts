import { Quiz, Questiontype } from './type/quiz-type';


const sheffleArray = (array: any[])=>
[...array].sort(()=> Math.random() - .5)
export const getquzDetails  = async(totalQuestion: number, level: string): Promise<Questiontype[]> =>{
    const res = await fetch (`https://opentdb.com/api.php?amount=${totalQuestion}&difficulty=${level}&type=multiple`)


     let {results} = await res.json();
    // console.log(data)

    const quiz:Questiontype[] = results.map((questionObj: Quiz, ind: number)=> {
        return{
            question: questionObj.question,
            answer: questionObj.correct_answer,
            correct_answer: questionObj.correct_answer , 
            option: sheffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer))      
        }
    })
    return quiz

}

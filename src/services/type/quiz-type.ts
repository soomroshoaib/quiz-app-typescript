

export type Quiz = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string

}
export type  Questiontype  = {
    question: string
    answer: string
    option: string[]
    correct_answer: string



}

export type questionPropstype = {
    question: String,
    option: String
    callback:(e:React.FormEvent<EventTarget>, ans: string)=>void
}

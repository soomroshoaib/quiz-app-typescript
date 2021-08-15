import React,{useState} from 'react'
import { questionPropstype  } from "./../services/type/quiz-type";

const QuestionCard: React.FC<questionPropstype> = ({question,options, callback})=> {
    //console.log(question,options)
    const [selectedAns, setselectedAns] = useState("")
    const handleSetect=(e: any )=>{
        // console.log(e.target.value);
         setselectedAns(e.target.value)
    }

    return (
        <div>
            <div className="question-container">
              <h3 className="question1">{question}</h3>

              <form onSubmit={(e:React.FormEvent<EventTarget>)=>{callback(e, selectedAns)}}
              className="question-from"
              >
                  {
                      options.map((opt:String, ind, number)=>{
                          return(
                            <div key={ind}>
                              <label className="redio">
                                  
                                  <input type="radio"
                                  name="opt"
                                  required
                                  value={opt} 
                                  checked={selectedAns === opt}
                                  onChange={handleSetect}
                                  />
                                  

                             {opt}
                              </label>
                              
                              </div>
                          )
                      })
                  }
                  <input type="submit" className="submit" />
              </form>
            </div>
        </div>
    )
}

export default QuestionCard

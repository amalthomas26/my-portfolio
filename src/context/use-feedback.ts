import {useContext} from  'react'
import {FeedbackContext} from './FeedbackContext'


export function useFeedback(){
const context = useContext(FeedbackContext)

if(!context){
    throw new Error(
        "user feedback must be used inside feedback provider"
    )
}
return context
}

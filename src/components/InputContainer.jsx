import { useState } from "react"
import { NewsletterForm } from "./NewsletterForm"
import { SubscribedMessage } from "./SuscribedMessage"

export const InputContainer = () => {

  const [valid, setValid] = useState(null)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  
  const handleEmailValue = (e) => {
    const newEmail = e.target.value
    setEmail(newEmail)

    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    setValid(regex.test(newEmail))
  }

  const validEmail = (e) => {
    e.preventDefault()
    if (valid) {
      setValid(true)
      setSubmitted(true)
    } else {
      setValid(false)
    }
  }

  return (
    <article className="w-full h-full rounded-none lg:w-fit lg:h-fit bg-white shadow-lg md:rounded-lg flex items-center justify-center p-0 lg:p-6">
      {
      submitted 
        ? (<SubscribedMessage email={email} />) 
        : (<NewsletterForm handleEmailValue={handleEmailValue} validEmail={validEmail} email={email} valid={valid} />)
      }
    </article>
  )
}

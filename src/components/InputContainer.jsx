import { useState } from "react"
import { NewsletterForm } from "./NewsletterForm"
import { SubscribedMessage } from "./SuscribedMessage"

export const InputContainer = () => {

  const [valid, setValid] = useState(true)

  return (
    <article className="w-full h-full rounded-none lg:w-fit lg:h-fit bg-white shadow-lg md:rounded-lg flex items-center justify-center p-0 lg:p-6">
      {valid ? (<SubscribedMessage />) : (<NewsletterForm />)}
    </article>
  )
}

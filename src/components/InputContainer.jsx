import { useState } from "react"
import { IllustrationSection } from "./IllustrationSection.jsx"
import { FormComponent } from "./FormComponent.jsx"
import { TextComponent } from "./TextComponent.jsx"

export const InputContainer = () => {

  const [valid, setValid] = useState(false)

  return (
    <article className="w-full h-full rounded-none lg:w-[60%] lg:h-[520px] bg-white shadow-lg md:rounded-lg flex justify-between items-center flex-col lg:flex-row-reverse p-0 lg:p-6">
      <IllustrationSection />
      <section className="w-full h-full basis-[60%] mt-8 px-4 lg:py-8 lg:px-4">
        <TextComponent />
        <FormComponent />
      </section>
    </article>
  )
}

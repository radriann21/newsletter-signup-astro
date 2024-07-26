import { IllustrationSection } from "./IllustrationSection.jsx"
import { FormComponent } from "./FormComponent.jsx"
import { TextComponent } from "./TextComponent.jsx"

export const NewsletterForm = () => {
	return (
		<div className="w-full h-full flex justify-between items-center flex-col lg:flex-row-reverse">
			<IllustrationSection />
			<section className="w-full h-full basis-[60%] mt-8 px-4 lg:py-8 lg:px-4">
				<TextComponent />
				<FormComponent />
			</section>
		</div>
	)
}
import { IllustrationSection } from "./IllustrationSection.jsx"
import { TextComponent } from "./TextComponent.jsx"

export const NewsletterForm = ({ handleEmailValue, email, validEmail, valid }) => {
	return (
		<div className="w-full h-full flex justify-between items-center flex-col lg:flex-row-reverse">
			<IllustrationSection />
			<section className="w-full h-full basis-[60%] mt-8 px-4 lg:py-8 lg:px-4">
				<TextComponent />

				<section className="mt-8">
					<form onSubmit={validEmail}>
						<label className="flex w-full justify-between" htmlFor="email">
							<span className="text-sm font-global font-bold">Email address</span>
							<span className={`${valid === false ? '' : 'hidden'} text-sm font-global font-bold text-red-600`}>
								Valid email required
							</span>
						</label>
						<input 
							onChange={handleEmailValue} 
							className={`border-2 ${valid === false ? 'border-red-600' : ''} p-3 w-full rounded-md outline-none ${valid === false ? 'focus:border-red-600' : 'focus:border-dark-slate-grey'}`} 
							type="email" 
							name="email" 
							placeholder="email@company.com" 
							value={email} 
							autoComplete="off" 
						/>
						<button
							className="text-white text-sm w-full rounded-md p-3 mt-4 font-global font-bold bg-dark-slate-grey text-center transition-colors duration-300 ease-in hover:bg-charcoal-grey">
							Subscribe to monthly newsletter
						</button>
					</form>
				</section>
			</section>

		</div>
	)
}
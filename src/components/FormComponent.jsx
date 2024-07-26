export const FormComponent = () => {
  return (
    <div className="mt-8">
      <form>
        <label className="flex w-full justify-between" htmlFor="email">
          <span className="text-sm font-global font-bold">Email address</span>
          <span className="hidden text-sm font-global font-bold text-red-600">Valid email required</span>
        </label>
        <input className="border-2 p-3 w-full rounded-md outline-none focus:border-dark-slate-grey" type="email" name="email" id="email" placeholder="email@company.com" autoComplete="off" />
        <button
          className="text-white text-sm w-full rounded-md p-3 mt-4 font-global font-bold bg-dark-slate-grey text-center transition-colors duration-300 ease-in hover:bg-charcoal-grey">
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  )
}
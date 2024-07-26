export const FormComponent = () => {
  return (
    <div className="mt-8">
      <form>
        <label className="block text-sm font-global font-bold" htmlFor="email">Email address</label>
        <input className="border-2 p-3 w-full lg:w-[90%] rounded-md outline-none focus:border-dark-slate-grey" type="email" name="email" id="email" placeholder="email@company.com" autoComplete="off" />
        <button className="text-white text-sm w-full lg:w-[90%] rounded-md p-3 mt-4 font-global font-bold bg-dark-slate-grey text-center">Subscribe to monthly newsletter</button>
      </form>
    </div>
  )
}
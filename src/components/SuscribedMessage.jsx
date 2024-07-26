export const SubscribedMessage = ({ email }) => {
  return (
    <section className="w-full h-full lg:w-[430px] lg:px-8 lg:py-8 px-4 flex flex-col justify-center">
      <img className="w-16 h-16" src="/assets/images/icon-success.svg" alt="icon success" />
      <section className="mt-4">
        <h1 className="font-bold font-global text-5xl text-dark-slate-grey mb-4">Thanks for subscribing!</h1>
        <p className="mb-4">
          A confirmation email has been sent to <b>{email}</b>. 
        Please open it and click the button inside to confirm your subscription.</p>
        <button onClick={() => location.reload()} className="text-white text-sm w-full rounded-md p-3 mt-4 font-global font-bold bg-dark-slate-grey text-center transition-colors duration-300 ease-in hover:bg-charcoal-grey">
          Dissmiss Message
        </button>
      </section>
    </section>
  )
}
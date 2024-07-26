export const TextComponent = () => {
  return (
    <div>
      <h1 className="font-global text-5xl lg:text-6xl font-bold text-dark-slate-grey">Stay updated!</h1>
      <p className="mt-4">Join 60,000+ product managers receiving monthly updates on:</p>

      <ul className="py-4 flex flex-col space-y-3">
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>
    </div>
  )
}
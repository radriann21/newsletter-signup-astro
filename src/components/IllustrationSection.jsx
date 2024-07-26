export const IllustrationSection = () => {
  return (
    <>
      <picture className="basis-2/5 w-full h-full lg:w-2/5 lg:h-full">
        <source srcSet="/assets/images/illustration-sign-up-desktop.svg" media="(min-width: 600px)" />
        <img className="object-cover w-full h-full rounded-b-lg lg:rounded-lg" src="/assets/images/illustration-sign-up-mobile.svg" alt="illustration" />
      </picture>
    </>
  )
}



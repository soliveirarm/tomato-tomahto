/* eslint-disable react/prop-types */
export default function Timer({ children }) {
  return (
    <main className="cursor-default max-w-screen-md md:mx-auto md:w-full m-2 transition ease-in-out text-white flex flex-col gap-8 justify-evenly items-center rounded-xl p-6">
      {children}
    </main>
  )
}

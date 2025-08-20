import { ChevronDownIcon } from '@heroicons/react/16/solid'

export default function Contact() {
  return (
    <section>
      <p className="text-3xl font-semibold py-8 bg-primary text-white text-center">Kontakt os</p>
      <div className="isolate bg-white px-6 py-2 lg:px-8">        
        <form action="#" method="POST" className="mx-auto mt-6 max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="navn" className="block text-sm/6 font-semibold text-gray-900">
                Navn
              </label>
              <div className="mt-2.5">
                <input
                  id="navn"
                  name="navn"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Indtast dit navn"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>          
            <div className="">
              <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Indtast din email"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="emne" className="block text-sm/6 font-semibold text-gray-900">
                Emne
              </label>
              <div className="mt-2.5">
                <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">                
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="text"
                    placeholder="Indtast emne"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  // id="message"
                  name="message"
                  placeholder="Indtast din besked..."
                  rows={4}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  defaultValue={''}
                />
              </div>
            </div>
            <div className="sm:col-span-2 flex items-center space-x-2">
              <input
                id="newsletter"
                type="checkbox"
                // checked={subscribed}
                // onChange={(e) => setSubscribed(e.target.checked)}
                className="h-6 w-6 border-gray-500 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="newsletter"
                className="text-sm text-gray-900 cursor-pointer"
              >
                Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.
              </label>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Send besked
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

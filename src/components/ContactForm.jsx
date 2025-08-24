import { useState, useEffect } from 'react';
import { Form, useActionData, useNavigate } from 'react-router';

const ContactForm = ({ nPholder, ePholder, emnePholder, bksPholder, showNewsletter }) => {

  const [subscribed, setSubscribed] = useState(false);
  const errors = useActionData();
  const navigate = useNavigate();
  
  // Show dialog and redirect after 5 seconds if success
  useEffect(() => {
    if (errors?.success) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors, navigate]); 

  return (
    <div className="isolate bg-white px-6 py-2 lg:px-8">        
        <Form method="POST" className="mx-auto max-w-xl">
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
                  placeholder={nPholder}
                  className="block w-full rounded-xs bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
                <p>{errors && errors?.navn?.errors[0]}</p>
              </div>
            </div>          
            <div className="">
              <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={ePholder}
                  className="block w-full rounded-xs bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
                <p>{errors && errors?.email?.errors[0]}</p>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="emne" className="block text-sm/6 font-semibold text-gray-900">
                Emne
              </label>
              <div className="mt-2.5">
                <div className="flex rounded-xs bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">                
                  <input
                    name="emne"
                    type="text"
                    placeholder={emnePholder}
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
                  <p>{errors && errors?.emne?.errors[0]}</p>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  placeholder={bksPholder}
                  rows={4}
                  className="block w-full rounded-xs bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600
                  resize-none"
                  defaultValue={''}
                />
                <p>{errors && errors?.message?.errors[0]}</p>
              </div>
            </div>
            {showNewsletter && (
              <div className="sm:col-span-2 flex items-center space-x-2">
              <input
                type="checkbox"
                name="newsletter"
                value="true"
                checked={subscribed}
                onChange={(e) => setSubscribed(e.target.checked)}
                className="h-6 w-6 border-gray-100 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="newsletter"
                className="text-[0.6rem] md:text-xs text-gray-900 cursor-pointer"
                >
                Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.
              </label>
                <p>{errors && errors?.newsletter?.errors[0]}</p>
            </div>
            )}
          </div>
          <div className="mt-8 w-30">
            <button
              type="submit"
              className="block w-full bg-primary px-3 py-2.5 text-center text-xs font-semibold text-white shadow-xs hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Send besked
            </button>
          </div>
        </Form>
        {/* Success Dialog */}
        {errors?.success && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
              <svg className="h-12 w-12 text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-xl font-semibold text-green-700 mb-2">Formularen er sendt!</p>
              <p className="text-gray-600">Du bliver sendt til forsiden om et øjeblik...</p>
            </div>
          </div>
        )}
      </div>
  )
}

export default ContactForm
import { useState, useEffect } from 'react';
import { Form, useNavigate, useNavigation, useActionData } from 'react-router';
import FormBtn from './FormBtn';

const ContactForm = ({ nPholder, ePholder, emnePholder, bksPholder, showNewsletter }) => {

  const [subscribed, setSubscribed] = useState(false);
  
  const navigate = useNavigate();
  const actionData = useActionData();
  const isSubmitting = navigation.state === 'submitting';

  console.log(actionData);
  

  // Show dialog and redirect after 2 seconds if success
  useEffect(() => {
    if (actionData?.success) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [actionData, navigate]);

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
                <p className="text-red-400 text-xs">{actionData?.navn?.errors}</p>
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
                <p className="text-red-400 text-xs">{actionData?.email?.errors}</p>
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
                  <p className="text-red-400 text-xs">{actionData?.emne?.errors}</p>
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
                <p className="text-red-400 text-xs">{actionData?.message?.errors}</p>
              </div>
            </div>
            {showNewsletter && (
              <div className="sm:col-span-2">
                <div className="flex items-center space-x-2">
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
                </div>
              </div>
            )}
          </div>
          <FormBtn />
        </Form>
      </div>
  )
}
export default ContactForm
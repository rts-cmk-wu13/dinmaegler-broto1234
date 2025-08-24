import Banner from '../components/Banner';
import { Form } from 'react-router';

const LogIn = () => {
  return (
    <section className="log-in" >
      <Banner bannerText="Account Login" secondText={true}/>
      <div className="w-90 mx-auto mt-6 py-12 flex flex-col gap-4">
        <p className="font-semibold text-center text-lg text-headingColor">Log ind på din konto</p>
        <Form className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" className="border border-borderLine rounded-md p-2" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" className="border border-borderLine rounded-md p-2" required />
          </div>
          <button type="submit" className="w-full bg-inputbg text-white text-xl py-4 rounded-xs">Log ind</button>
        </Form>
      </div>
    </section>
  )
}

export default LogIn
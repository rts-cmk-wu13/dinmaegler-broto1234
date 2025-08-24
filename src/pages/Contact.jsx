import Banner from '../components/Banner'
import ContactForm from '../components/ContactForm'
import ContactLink from '../components/footer/ContactLink'

export default function Contact() {
  
  return (
    <section>
      <Banner bannerText="Kontakt os" />
      <div className="container py-2 sm:py-14">
        <div className="mb-6">
          <p className="text-sm font-semibold -mb-3">Vi sidder klar til at besvare dine spørgsmål</p>
          <span className="border-1 inline-block w-12 text-black"></span>
          <p className="max-w-120 text-xs mt-3">Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang med at sælge sin bolig. Vores medarbejdere sider klar alle ugens dage til at svare på dine spørgsmål.</p>
        </div>
        <div className="sm:grid grid-cols-3 gap-4">
          <div className="col-span-2 p-2 border-1 border-borderLine">
            <ContactForm nPholder="Indtast dit navn" ePholder="Indtast din email" emnePholder="Indtast emne" bksPholder="Indtast din besked" showNewsletter={true} />
          </div>
          <div className="mt-4 sm:mt-0 p-2 border-1 border-borderLine">
            <ContactLink extraStyle="contactPage" fConText={false} />
          </div>
        </div>
      </div>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.44789019306!2d12.077728974888322!3d55.64090351514623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525fda8582267b%3A0x3a79b4f713b2bf83!2sSt%C3%A6ndertorvet%2078%2C%204000%20Roskilde!5e1!3m2!1sen!2sdk!4v1755858523278!5m2!1sen!2sdk" width="100%" 
        height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        className="border-0"
        ></iframe>
    </section>
  )
}

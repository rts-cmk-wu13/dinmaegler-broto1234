import { contactLinks } from '../../../data/footerLinks';
import { mixData } from '../../../data/mixData';

export default function ContactLink() {
  return (
    <div className="pl-4 pt-4">
      {contactLinks.map(link => (
        <div key={link.id} className="flex items-center space-y-4">
          <div className="mr-2 p-3 rounded-full bg-inputbg flex items-center justify-center">
            <link.Image className="text-white text-xl" />
          </div>
          <div>
            <p className="text-cPara">{link.name}</p>
            <p className="font-semibold">{link.info}</p>
          </div>
        </div>
      ))}
      <p className="mt-2 max-w-64">{mixData[1].footerContactText}</p>
    </div>
  )
}

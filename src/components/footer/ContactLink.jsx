import { contactLinks } from '../../../data/footerLinks';
import { mixData } from '../../../data/mixData';

export default function ContactLink() {
  const { footerContactText } = mixData[3];
  return (
    <div className="p-6 w-72 rounded-sm bg-white space-y-2 shadow-lg">
      {contactLinks.map(link => (
        <div key={link.id} className="flex items-center gap-1">
          <div className="mr-2 p-3 rounded-full bg-inputbg flex items-center justify-center">
            <link.Image className="text-white text-xl" />
          </div>
          <div>
            <p className="text-cPara text-xs">{link.name}</p>
            <p className="font-semibold text-xs">{link.info}</p>
          </div>
        </div>
      ))}
      <p className="mt-4 max-w-44 text-xs">{footerContactText}</p>
    </div>
  )
}

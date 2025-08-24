import { contactLinks } from '../../../data/footerLinks';
import { mixData } from '../../../data/mixData';

export default function ContactLink( { extraStyle, fConText } ) {
  const { footerContactText } = mixData[3];
  return (
    <div className={`p-6 max-w-72 space-y-2 ${extraStyle === "contactPage" ? "w-[215px] p-2 flex flex-col mx-auto space-y-6" : ""}`}>
      {contactLinks.map((link, idx) => (
        <div key={link.id} className={`flex items-center gap-1 ${extraStyle === "contactPage" && idx < 3 ? "inline-block text-center" : ""} 
        ${extraStyle === "contactPage" && idx !== contactLinks.length-1 ? "border-b border-borderLine pb-4" : ""}`
        }>
          <div className={`mr-2 p-3 rounded-full bg-inputbg flex items-center justify-center ${extraStyle === "contactPage" ? "w-11 mx-auto mr-0 inline-block" : ""}`}>
            <link.Image className="text-white text-xl" />
          </div>
          <div>
            <p className="text-cPara text-xs">{link.name}</p>
            <p className="font-semibold text-xs">{link.info}</p>
          </div>
        </div>
      ))}
      {fConText && <p className="mt-4 max-w-44 text-xs">{footerContactText}</p>}
    </div>
  )
}

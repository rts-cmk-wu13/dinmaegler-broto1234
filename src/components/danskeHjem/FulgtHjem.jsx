import { danskeHjemData } from "/data/danskeHjem";

export default function FulgtHjem() {
  return (
    <div className="container md:grid grid-cols-2 gap-6 space-y-6">
        <div className="w-80 h-80">
          <img src={danskeHjemData.hjemImage} alt="hjem" className="" />
        </div>
        <div className="space-y-2">
          <p className="text-2xl font-bold w-80">{danskeHjemData.title}</p>
          <p className="text-base font-semibold">{danskeHjemData.subtitle}</p>
          <p className="text-cPara text-sm">{danskeHjemData.descriptionOne}</p>
          <p className="text-cPara text-sm">{danskeHjemData.descriptionTwo}</p>
          <div className="flex justify-between my-6">
            {danskeHjemData.stats.map(stat => (
              <div key={stat.id} className="flex gap-2">
                <div className="">
                  <img src={stat.image} alt={stat.label} className="w-full h-full" />
                </div>
                <div>
                  <p className="font-bold">{stat.number}</p>
                  <p className="text-cPara text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

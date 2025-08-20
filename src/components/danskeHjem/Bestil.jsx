import { danskeHjemData } from "/data/danskeHjem";

export default function Bestil() {
  return (
    <div className="container sm:grid justify-between grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2  mt-10">
        {danskeHjemData.butikInfos.map(butik => (
          <div key={butik.id} className="flex gap-4 py-4 max-w-66">
            <div className="w-8 sm:w-16 lg:w-20 h-4 sm:h-6 md:h-8 mt-2">
              <img src={butik.image} alt={butik.name} className="w-full h-full" />
            </div>
            <div>
              <p className="font-bold">{butik.name}</p>
              <p className="text-cPara text-sm">{butik.title}</p>
            </div>
          </div>
        ))}
      </div>
  )
}

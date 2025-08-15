import UpdateLeft from "./UpdateLeft";
import UpdateRight from "./UpdateRight";

export default function Update() {
  
  return (
    <section className="bg-primary">
      <div className="container space-y-6 sm:space-y-0 sm:grid grid-cols-2 gap-2 p-6 pb-0">
        <UpdateLeft />
        <UpdateRight />
      </div>
    </section>
  )
}

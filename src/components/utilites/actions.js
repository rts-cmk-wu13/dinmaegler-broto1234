import { redirect } from "react-router";
import { z } from "zod/v4";

const schema = z.object({
  navn: z.string().min(2, { message: "Name is required" }).max(50, { message: "Name is too long" }),
  email: z.email(),
  emne: z.string().min(2, { message: "Emne is required" }),
  message: z.string().min(6, { message: "Message is too short" }).max(50, { message: "Message is too long" }),
  newsletter: z.preprocess(
  val => val === "true",
  z.boolean()
)
});

const handleSubmit = async ({ request }) => {
  const formData = await request.formData();
  const result = schema.safeParse(Object.fromEntries(formData.entries()));
  // const newsletter = formData.get("newsletter") === "true";

  console.log(result);

  if (!result.success) {
    const errors = z.treeifyError(result.error)
      console.log(errors);   
      return errors.properties
  }

  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(result.data),
  });

  console.log(response);
  
  if (!response.ok) {
    throw new Error("Failed to submit contact form");
  }

  // return redirect("/");
  return { success: true };
}

export default handleSubmit;
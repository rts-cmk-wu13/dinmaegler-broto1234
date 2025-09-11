import { redirect } from "react-router";
import { z } from "zod/v4";
import { API_BASE_URL } from "../../config";

const signupSchema = z.object({
  navn: z.string().min(2, { message: "Name is required" }).max(50, { message: "Name is too long" }),
  email: z.email(),
  emne: z.string().min(2, { message: "Emne is required" }),
  message: z.string().min(6, { message: "Message is too short" }).max(50, { message: "Message is too long" }),
  newsletter: z.preprocess(
    val => val === "true",
    z.boolean().optional()
  )
});

const handleSubmit = async ({ request }) => {
  const formData = await request.formData();
  const result = signupSchema.safeParse(Object.fromEntries(formData.entries()));
  console.log(result);

  if (!result.success) {
    const errors = z.treeifyError(result.error)
      console.log(errors);   
      return errors.properties
  }
  
  // const response = await fetch(`${API_BASE_URL}/auth/local/`, {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(result.data),
  });
  // console.log(response);
  
  if (!response.ok) {
    throw new Error("Failed to submit contact form");
  }
  // return redirect("/");
  return { success: true };
}
export default handleSubmit;


// Registration schema for user registration
const RegistrationSchema = z.object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(30, "Username too long"),
    email: z
      .string()
      .email("Invalid email address"),
    password: z
      .string()
      .min(4, "Password must be at least 4 characters")
      .max(72, "Password too long"),
    confirmPassword: z.string(),
})
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords matcher ikke.",
    path: ["confirmPassword"],
  });

const registerSubmit = async ({request}) => {
    const formData = await request.formData();
    const formRes = Object.fromEntries(formData.entries());
    const validation = RegistrationSchema.safeParse(formRes);
    if (!validation.success) {
      const errors = validation.error.format();
      // setErrors(errors);
      return errors;
    }

    // Add empty favorites list for new user
    const payload = {
      ...formRes,
      homes: [], // <-- This creates a new empty favorite list for the user
    };

    const response = await fetch(`${API_BASE_URL}/auth/local/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const userData = await response.json();
    console.log(userData);
    
    if(!response.ok) {
        const errorText = await response.text();
        console.error("API error:", errorText);
        throw new Error("Failed to submit contact form");
    } 
    sessionStorage.removeItem('favorites');
    return { success: true };
  };

export { registerSubmit };

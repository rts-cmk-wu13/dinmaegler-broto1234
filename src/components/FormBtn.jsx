import { useNavigation } from "react-router-dom"

const FormBtn = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div className="form-Btn mt-8 w-30">
      <button
        type="submit"
        className="block w-full bg-primary px-3 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        disabled={isSubmitting}
        >
          {isSubmitting
            ? "Submitting..."
              : "Send message"}
        </button>            
    </div>
  )
}

export default FormBtn
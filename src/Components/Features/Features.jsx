import { FaCheckCircle } from "react-icons/fa"

const Features = ({feature}) => {
  return (
    <div>
      <p className="flex items-center"><FaCheckCircle className="text-green-600 mr-2"/> {feature}</p>
    </div>
  )
}

export default Features

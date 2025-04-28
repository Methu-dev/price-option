import Features from "../Features/Features";

const PriceOption = ({option}) => {  
const {name, features, price}= option;
  return (
    <div className='bg-blue-500 rounded-md p-4 flex-col flex text-white '>
      <h2 className='text-center'>
        <span className='text-7xl font-extrabold'>{price}</span>
        <span className='text-2xl'>/mon</span>
        <h4 className='text-3xl my-4'>{name}</h4>
      </h2>
      <div className="pl-6 flex-grow">
        {
       features.map(feature => <Features key={feature.id} feature={feature}/>) 
      }
      </div>
      <button className="bg-green-500 w-full p-2 rounded-md cursor-pointer hover:bg-green-900 font-bold">Buy Now</button>
    </div>
  )
}

export default PriceOption

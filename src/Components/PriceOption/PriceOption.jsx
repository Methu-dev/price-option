const PriceOption = ({option}) => {  
const {name, features, price}= option;
  return (
    <div className='bg-blue-500 rounded-md p-4 text-white text-center'>
      <h2 className=''>
        <span className='text-7xl font-extrabold'>{price}</span>
        <span className='text-2xl'>/mon</span>
      </h2>
      <h4 className='text-3xl my-4'>{name}</h4>
    </div>
  )
}

export default PriceOption

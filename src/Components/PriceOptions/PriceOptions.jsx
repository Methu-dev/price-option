
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const gymPricingOptions = [
  {
    id: 1,
    name: "Basic Membership",
    price: 29,
    features: [
      "Access to gym equipment",
      "Locker room access",
      "1 Group class per week",
      "Free Wi-Fi"
    ]
  },
  {
    id: 2,
    name: "Standard Membership",
    price: 49,
    features: [
      "Access to gym equipment",
      "Locker room & showers",
      "Unlimited group classes",
      "One personal training session per month",
      "Access to yoga studio",
      "Nutrition consultation (once)"
    ]
  },
  {
    id: 3,
    name: "Premium Membership",
    price: 79,
    features: [
      "24/7 Gym Access",
      "Private locker",
      "Unlimited group & specialty classes",
      "Weekly personal trainer sessions",
      "Full nutrition plan",
      "Sauna and spa access",
      "Free guest pass (2/month)"
    ]
  },
  {
    id: 4,
    name: "Student Special",
    price: 19,
    features: [
      "Gym access (6 AM - 9 PM)",
      "Limited group classes",
      "Student locker area",
      "Discounted personal training sessions",
      "Free orientation session"
    ]
  }
];

  return (
    <div>
      <h2 className='text-5xl'>Best prices in the twon</h2>
      <div className='grid md:grid-cols-4 gap-5 py-12'>
        {
        gymPricingOptions.map(option => <PriceOption key={option.id} option={option}/>)
      }
      </div>
    </div>
  )
}

export default PriceOptions

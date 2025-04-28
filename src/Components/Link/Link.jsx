const Link = ({route}) => {
  return (
    <li className='hover:bg-green-600 px-4 py-2 rounded'>
      <a href={route.path}>{route.name}</a>
    </li>
  )
}
export default Link

import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='Nav'>
        <Link to = '/'>
            <div>iStocks</div>
        </Link>
        <Link to = '/stocks'>
            <div>Stocks</div>
        </Link>
        <Link to = '/about'>
            <div>About</div>
        </Link>
    </div>
  )
}

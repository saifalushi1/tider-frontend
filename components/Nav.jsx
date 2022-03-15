import Link from "next/link"
import RedditLogo from "../images/redditlogo.svg"

const Nav = () => {
	return (
		<>
			<div className='fixed inset-x-0 top-0 z-10 flex items-center justify-center h-12 px-5 bg-whitesmoke'>
				{/* Logo and title */}
				<div className='flex items-center'>
					<Link href='/'>
						<a>
							<img src={RedditLogo} classname="w-8 h-8 mr-2" alt="tider logo" />
						</a>
					</Link>
					<span className='text-2xl font-semibold'>
						<Link href='/'>tider</Link>
					</span>
				</div>
				{/* Serach Input */}
				<div className='search'>
					<i className='pl-4 pr-3 text-gray-500 fas fa-search '></i>
					<input
						type='text'
						className='py-1 pr-3 bg-transparent rounded w-160 focus:outline-none'
						placeholder='Search'
					/>
				</div>
				{/* Auth buttons */}
				<div className='flex'>
					<Link href='/login'>
						<a className='w-32 py-1 mr-4 leading-5 hollow blue button'>
							log in
						</a>
					</Link>
					<Link href='/register'>
						<a className='w-32 py-1 leading-5 blue button'>sign up</a>
					</Link>
				</div>
			</div>
		</>
	)
}

export default Nav

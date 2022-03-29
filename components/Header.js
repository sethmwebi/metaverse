import React from 'react'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'
import ChangeUsername from "./ChangeUsername"

const Header = () => {
	const { user } = useMoralis()
	return (
		<div className="sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-700 text-pink-500">
			<div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
				<div className="relative mx-auto hidden h-24 w-24 lg:inline-grid">
					<Image
						layout="fill"
						className="rounded-full object-cover object-top"
						src="https://links.papareact.com/3pi"
					/>
				</div>

				<div className="col-span-4 text-left lg:text-center">
					<div className="relative h-48 w-48 rounded-full border-8 border-pink-500 lg:mx-auto">
						<Avatar logoutOnPress />
					</div>
					<h1 className="text-3xl">Welcome to the Metaverse</h1>
					<h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
					<ChangeUsername />
				</div>
			</div>
		</div>
	)
}

export default Header

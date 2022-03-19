import React from 'react'
import Image from "next/image"
import { useMoralis } from "react-moralis"

const Login = () => {
	const { authenticate } = useMoralis()

	return (
		<div  className="bg-black relative">
			<div className="flex flex-col absolute z-50 h-5/6 w-full items-center justify-center space-y-4">
				<Image 
          src="https://links.papareact.com/3pi" 
          height={200}
          width={200}
          className="object-cover object-top rounded-full"
				/>
				<button onClick={authenticate} className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">Login to the Metaverse</button>
			</div>
			<div className="w-full h-screen">
				<Image 
					src="https://i.imgur.com/WYAjt3T.jpeg" 
					layout="fill"
					obectfit="cover"
				/>
			</div>
		</div>
	)
}

export default Login
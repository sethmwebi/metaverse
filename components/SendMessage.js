import React, { useState } from 'react'
import { useMoralis } from 'react-moralis'

const SendMessage = ({ endOfMessagesRef }) => {
	const { user, Moralis } = useMoralis()
	const [message, setMessage] = useState('')

	const sendMessage = (e) => {
		e.preventDefault()

		if (!message) return

		const Messages = Moralis.Object.extend('Messages')
		const messages = new Messages()

		messages
			.save({
				messages: message,
				username: user.getUsername(),
				ethAddress: user.get('ethAddress'),
			})
			.then(
				(message) => {
					console.log("message: " + message + " was saved successfully")
				},
				(error) => {
					console.log(error.message)
				}
			)

		endOfMessagesRef.current.scrollIntoView({
			behavior: 'smooth',
		})

		setMessage('')
	}
	return (
		<form
			className="fixed bottom-10 flex w-11/12 max-w-2xl rounded-full border-4 border-blue-400 bg-black px-6 py-4 opacity-80 shadow-xl"
			autoComplete="off"
		>
			<input
				autoComplete="false"
				name="hidden"
				type="text"
				style={{ display: 'none' }}
			/>
			<input
				className="flex-grow bg-transparent pr-5 text-white placeholder-gray-500 outline-none"
				placeholder={`Enter a username ${user.getUsername()}...`}
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				type="text"
				role="presentation"
				autoComplete="off"
			/>
			<button
				type="submit"
				onClick={sendMessage}
				className="font-bold text-pink-500"
			>
				Send
			</button>
		</form>
	)
}

export default SendMessage

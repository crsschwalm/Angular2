//interfaces are models for the "Nouns" of our project. we have Users, Events, Sessions
//Interfaces add structure to what an element is, and what it should have
//when an attribut in an interface is optional, set the key with a ? --> key?: value

export interface IEvent {
	id: number
	name: string
	date: Date
	time: string
	price: number
	imageUrl: string
	location?: {
		address: string
		city: string
		country: string
	},
	onlineUrl?: string
	sessions: ISession[]
}

export interface ISession {
	id: number
	name: string
	presenter: string
	duration: number
	level: string
	abstract: string
	voters: string[]
}
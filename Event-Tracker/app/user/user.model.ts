//interfaces are models for the "Nouns" of our project. we have Users, Events, Sessions
//Interfaces add structure to what an element is, and what it should have
//when an attribut in an interface is optional, set the key with a ? --> key?: value

export interface IUser {
	id: number
	firstName: string
	lastName: string
	username: string
}
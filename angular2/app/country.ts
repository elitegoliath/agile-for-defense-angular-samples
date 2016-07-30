/**
 * This is our simple Country model used in other places of our application.
 */
export class Country {
	/**
	 * This id is simply an integer to represent some uid for Country objects.
	 * Emulates data from databases.
	 *
	 * You might have noticed the type annotation next to the declaration. It
	 * is entirely optional, but helps the TypeScript compiler catch errors.
	 * If we assign a value of a different type to id for any Country object,
	 * it will throw an error during compilation.
	 * 
	 * @type {number}
	 */
	id: number;

	/**
	 * This is the name of the country. It's a simple String object.
	 *
	 * This variable is also annotated and the TypeScript compiler will complain
	 * if code assigns a value of a different type to it.
	 * 
	 * @type {String}
	 */
	name: string;
}
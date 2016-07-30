/**
 * Important that Country model again. Type annotations all day!
 */
import { Country } from './country';

/**
 * This is a constant value, it cannot be modified. The objects
 * in the array can be modified though.
 * 
 * @type {const Country[]}
 */
export const COUNTRIES: Country[] = [
	// Each one of these is a Country object. TypeScript can infer their type
	// from the Type annotation above.
	{id: 11, name: 'USA'},
	{id: 12, name: 'India'},
	{id: 13, name: 'China'},
	{id: 14, name: 'United Kingdom'},
	{id: 15, name: 'Australia'}
];
/**
 * Here we import Injectable so that we can use Angular's built in Dependency
 * injection framework.
 */
import { Injectable } from '@angular/core';

/**
 * We also import the COUNTRIES mock data defined in our mock-countries file.
 */
import { COUNTRIES } from './mock-countries';

/**
 * Annotate the class with Injectable let's Angular know that we want to be
 * able to inject this into Components.
 */
@Injectable()
export class CountryService {

	/**
	 * Get the Countries data. Notice, it returns a Promise here.
	 * This is so that we don't break our API when we implement a real
	 * web service.
	 * 
	 * @return {Promise} A promise that will resolve with a list of Countries.
	 */
	getCountries() {
		return Promise.resolve(COUNTRIES);
	}
}
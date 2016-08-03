// Imports from Angular2 core library.
// The core library is one of the dependencies that are installed through 
// the package.json file.
// 
// Here we are importing Component, so we can define our app's root component.
// We also import OnInit, one of the component lifecycle interfaces so that
// we can override our components default lifecycle behavior during the OnInit
// stage. If you've done any Android development, this type of thing should be
// familiar to you.
import { Component, OnInit } from '@angular/core';

// Here we import our CountryService from the country.service file in our project's
// root directory. We use this in the AppComponent to get the list of countries from
// our mock web service.
import { CountryService } from './country.service';

// We also import the Country class, which is a simple JavaScript class. We bring this
// in since we are going to be working on a Country[]. TypeScript provides optional,
// Strong typing to JavaScript, so we help ourselves out by giving variables type 
// annotations.
import { Country } from './country';

// Component is simply an annotation on a JavaScript class.
@Component({
	// selector is what the html element name will be.
    selector: 'my-app',
    // Template defines the component's html. We use an ES6 multiline string here for formatting purposes.
    templateUrl: `app/app.html`,
  	// Definition of which providers to use for dependency injection of other components.
    providers: [CountryService]
})

/**
 * Our root AppComponent. Pretty basic stuff here. Stores our apps title and a list of countries.
 */
export class AppComponent implements OnInit {

	/**
	 * The title of our application.
	 * @type {String}
	 */
	title = 'Angular2 Example - Country Details';

	/**
	 * The list of countries.
	 * @type {[Country[]}
	 */
	countries: Country[];

	/**
	 * Constructor for our component. Defines how the component will be initialized with little boiler plate code.
	 * 
	 * @param  {CountryService} countryService
	 * @constructor
	 */
	constructor(private countryService: CountryService) {}

	/**
	 * Lifecycle method inherited from the OnInit interface. Override this allows us
	 * to modify how our component behaves during the OnInit stage of Component lifecycles.
	 */
	ngOnInit() {
		this.getCountries();
	}

	/**
	 * Method to populate the countries array with countries from our countryService.
	 */
	getCountries() {
		// Uses shorthand syntax for an anonymous function.
		this.countryService.getCountries().then(countries => this.countries = countries);
	}
}

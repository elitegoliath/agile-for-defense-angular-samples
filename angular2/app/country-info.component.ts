// Imports from Angular2 core library.
// The core library is one of the dependencies that are installed through 
// the package.json file.
// 
// Here we are importing Component, so we can define our app's root component.
// We also import OnInit, one of the component lifecycle interfaces so that
// we can override our components default lifecycle behavior during the OnInit
// stage. If you've done any Android development, this type of thing should be
// familiar to you.
// TODO: describe Input
import { Component, Input } from '@angular/core';

// We also import the Country class, which is a simple JavaScript class. We bring this
// in since we are going to be working on a Country[]. TypeScript provides optional,
// Strong typing to JavaScript, so we help ourselves out by giving variables type 
// annotations.
import { Country } from './country';

// Component is simply an annotation on a JavaScript class.
@Component({
	// selector is what the html element name will be.
    selector: 'country-info',
    // Template defines the component's html. We use an ES6 multiline string here for formatting purposes.
    templateUrl: `app/country-info.html`
})

/**
 * Our root CountryInfo component object. Holds information for a single country
 */
export class CountryInfoComponent {
    
    /**
     * Allow a Country object to be given as input for the component.
     */
    @Input() country: Country;

}

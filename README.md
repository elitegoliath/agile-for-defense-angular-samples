# agile-for-defense-angular-samples
Angular and Angular 2 simple application examples.

Two applications able to be ran locally. 1 created with Angular, the other with Angular 2. While running, the application should look and operate identically. Should be well documented with in-code comments as well as an updated README.

### Outline:
* Introductions
* About Angular 2
    * What is Angular 2
    * Why pay attention to Angular 2
		* From Angular 1 
			* Angular 2 was completely rebuilt rather than using Angular 1.x and adding to it
			* Designed for mobile applications and optimized for memory efficiency and less CPU cycles
				* Designed with touch interfaces, limited screen real estate, and mobile hardware in mind
				* Also means increased computing performance and responsiveness on desktops
			* Improved integration with IDEs and development ecosystems
			* Documentation is improved as types are explicitly documented
			* No need for $scope
			* Everything encapsulated in a component, no need for controllers
				* A component is a directive with a template ( Angular 1.x controller + directive = Angular 2 component)
				* Considerably easier to read API with less jargon
			* Angular 1.x requires the entire stack to be written using Angular, whereas Angular 2 allows for segmentation within the app to be written independently of each other
		* From other Frameworks
			* Streamlined implementation of dependency injection
			* Can leverage performance gain by rendering HTML on the server or a web worker
    * The future of Angular 2
    * The intent behind the creation of Angular 2
* Why TypeScript
    * What is TypeScript
    * Why does Angular 2 work better with TypeScript
* Technical Details
    * Compare the simple application designed in Angular with the one designed with Angular 2
    * Compare Angular 2 to various other frameworks?

### Code Demonstration Concepts:
Items we're looking to demonstrate with this application include
* Components are a key difference between Angular 1 and 2. We want to show at least one component design.
* Change detection is another key difference. We want to show the page updating based on user input.
* Dependency injection appears to be designed differently. We want to show how dependencies are referenced within the application.
* Attribute binding for several key angular attributes is handled differently. We would like to show:
    * repeated elements
    * show/hide of elements
    * change of class or style on elements

### Application Design:
Load a list of items and display them. Each item can be starred using an icon that will change style when starred. Each item will have details that can be displayed when a show/hide button/icon/link is clicked.

### Sources:
* https://scotch.io/tutorials/why-you-shouldnt-be-scared-of-typescript
* https://angular.io/docs/ts/latest/cookbook/a1-a2-quick-reference.html
* https://angular.io/docs/ts/latest/guide/upgrade.html

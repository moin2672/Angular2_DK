# L12

# L12

# Angular CLI checklist: Commands

* ng help - Displays commands and flags
* ng new - Creates new Angular application
* ng serve -  Launches a server
* ng generate - Generates file from blueprint
* ng test - Runs unit tests using Karma
* ng e2e - Runs end to end tests using Protractor
* ng build - Compiles into an output directory


# Angular CLI
Command Line Interface

# Installing Angular CLI
npm install -g @angular/cli

# demo
* ng new hello-world
ng new --help
* ng serve
ng serve -o (to open it automatically in the default browser)
ng serve --help
* ng generate
ng g --help
ng g c welcome
* ng build


Before production, code should be:
1. minify/uglify
2. tree shaking
3. AOT: Ahead of Time compiler (ng build --prod)

when "ng build --prod" executed, we get 'dist' folder having a ash as part of the file name called as "cache busting technique".

ng build --help


# Angular CLI checklist: ng generate

class - ng g cl
component -  ng g c
directive - ng g d
enum - ng g e
guard - ng g g
interface -  ng g i
module -  ng g m
pipe - ng g pipe
service - ng g s

---------------------------------------------------------------------


# L11
# Bootstrap Array Truth
1. Every application must bootstrap atleast one component, the root application component

2. The bootstrap array should only be used in the root application module, AppModule

# Declarations Array Truth
1. Every component, directive and pipe we create must belong to one and only one Angular module

2. Only declare components, directives and pipes

3. Never re-declare components, directives or pipes that belong to another module

4. All declared components, directives and pipes are private by default.
	* They are only accessible to other components, directives and pipes declared in the same module

5. The Angular module provides the template resolution environment for its component templates.

# Imports array truth
1. Importing a module makes available any exported components, directives and pipes from that module.

2. Only import what this module needs.

3. Importing a module does NOT provide access to its imported module

# To create module
ng g m products/product --flat -m app.module

ng g m shared/shared --flat -m products/product.module

--flat (without folder)
-m (import)

# Module Structure checklist

1. Root application module(AppModule)
2. Feature Module
3. Shared Module (SharedModule)
4. Core module (CoreModule)
5. Routing Module

# NgModule Metadata

1. Bootstrap: Startup component(s)
2. Declarations: What belongs to this module
3. Exports: What an importing module can use
4. Imports: Supporting modules
5. Provideers: Service providers


-------------------------------------------------------


# L10

Protecting Routes with Guards

1. CanActivate
	* Guard navigation to a route
2. CanDeactivate
	* Guard navigation from a route
3. Resolve
	* Pre-fetch data before activating a route
4. CanLoad
	* Prevent asynchronous routing

# to create a service without declaration in app module
ng g s products/product-guard.service

# to create a service with declaration
ng g s products/product-guard.service -m app.module

# Passing parameters Checklist

1. Use the Router service
	* Import the service
	* Define it as a dependency
2. Create a method that calls the navigate method of the Router service
	* Pass in the link parameters array
3. Add a user interface element
	* Use event binding to bind to the created method

# Protecting Routes with Guards

1. Build a guard service
	* Implement the guard type (CanActivate)
	* Create a method (CanActivate())
2. Register the guard service provider
	* Must be in an Angular module
3. Add the guard to the desired route


-------------------------------------------------------------------


# L9

* to create a component with folder
ng g c products/product-detail.component

* without folder
ng g c products/product-detail.component --flat

# #product?.productName will not work for double binding

# How Routing works

1. Congfigure a route for each component
2. Define options/actions
3. Tie a route to each option/action
4. Activate the route based on user action
5. Activating a route dispays the component's view

# Displaying Components : Check List

1. Nest-able components
	* Define a selector
	* Nest in another component
	* No route

2. Routed Components
	* No selector
	* Configure routes
	* Tie routes to actions

# Doing Routing : CheckList
1. Configure routes
2. Tie routes to actions
3. Place the view

# Checklist: Configuring Routes 

1. Define the base element (index.html)
2. Add Router Module
	* Add each route (RouterModule.forRoot)
	* Order matters
3. path: URL segment for the route
	* No leading slash
	* '' for default route
	* '**' for wildcard route
4. component
	* Not string name not enclosed in quotes

# Checklist: Tying Routes to Actions

1. Add the Routerink directive as an attribute
	* Clickable element
	* Enclose in square brackets
2. Bind to a link parameters array
	* First element is the path
	* All other elements are route parameters

# Checklist : Placing the view

1. Add the RouterOutlet directive
	* Identifies where to display the routed component's view
	* Specified in the host component's template


--------------------------------------------------------------------


# L8

# Observables and Reactive Extensions

1. Help manage asynchronous data
2. Treat events as a collection
	* An array whose items arrive asynchronously over time
3. Are a proposed feature for ES 2016
4. Use Reactive Extension (RxJS)
5. Are used within Angular

# Observable Operators

1. methods on observables that compose new observables
2. Transform the source observable in some way
3. Process each value as it is emitted
4. Examples: map, filter, take, merge...

# Http Checklist: setup

* Add HttpClientModule to the imports array of one of the application's Angular Modules.

# Http checklist : Service 

1. Import what we need
2. Define a dependency for the http client service
	* Use a constructor parameter
3. Create a method for each http request
4. Call the desired http method, such as get
	* Pass in the Url
5. Use generics to specify the returned type
6. Add Error handling


# Http checklist: Subscribing

1. Call the subscribe method of the returned observable
2. Provide a function to handle an emitted item
	* Normally assigns a property to the returned JSON object
3. Provide an error function to handle any returned errors

---------------------------------------------------


# L7

# Registering a Service

1. Register a provider
	* Code that can create or return a service
	* Typically the service class itself

2. Define in component or Angular module metadat

* Registered in component:
	* Injectable to component AND its children

* Registered in Angular module:
	* Injectable everywhere in the population

# Creating a service

1. Service class
	* clear name
	* use pascalcasing
	* append  "service" to the name
	* export keyword

2. Service decorator
	* use injectable
	* prefix with @
	* suffix with ()

3. Import what we need


# Registering a service in a component

1. select the appropriate level in the hierarchy
	* Root component if service is used throughout the application
	* Specific component if only that component uses the service
	* otherwise, common ancestor

2. Component metadata
	* Set the providers property
	* Pass in an array

3. Import what we need

# Dependency Injection

1. Specify the service as a dependency
2. Use a constructor parameter
3. Service is injected when component is instantiated


-----------------------------------------------------------


# L6

# Nested Component Checklist

1. Input decorator
	* Attached to a property of any type 
	* Prefix with @;
	* Suffix with ()
2. Output decorator
	* Attached to a property declared as an EventEmitter
	* Use the generic argument to define the event payload type
	* Use the new keyword to create an instance of the Event Emitter
	* Prefix with @;
	* Suffix with ()

# Container Component checklist

1. Use the directive
	* Directive name -> nested component's selector
2. Use property binding to pass data to the nested component

3.  Use event binding to respond to events from the nested component
	* Use $event to access the event payload passed from the nested component


---------------------------------------------------------------


# L5

# Interfaces checklist

defines custom types
1. creatingn interfaces:
	* interface keyword
	* export it

2. Implementing interfaces:
	* implements keyword & interface name
	* write code for each property & method

# Encapsulating Styles checklist

1. styles property
	* specify an array of style  strings
2. styleUrls property
	* specify an array of stylesheet paths


# Using Lifecycle Hooks:

1. Import the lifecycle hook interface
2. Implement the lifecycle hook interface
3. Write code for the hook method

# Component Lifecycle Hooks:

* OnInit: Perform component initialization, retrieve data
* OnChanges: Perform action after change to input properties
* OnDestroy: Perform cleanup

# Building a custom Pipe

1. Import Pipe and PipeTransform
2. Create a class that implements PipeTransform
	* export the class
3. Write code for the Transform method
4. Decorate the class with the Pipe decorator

# Using a Custom Pipe

1. Import the custom pipe
2. Add the pipe to the declarations array of an Angular module
3. Any template associated with a component that is also declared in that Angular module can use that pipe
4. Use the Pipe in the template
	* Pipe character
	* Pipe name
	* Pipe arguments (separated with colons)


--------------------------------------------------------------


# L4

#Data Binding
#      Types        -->     Work Flow    -->    Example
1. Interpolation    --> Component to DOM --> {{pageTitle}}
2. Property Binding --> Component to DOM --> <img [src]='product.imageUrl'>
3. Event Binding    --> DOM to Component --> <button (click)='toggleImage()'>
4. Two-way Binding  --> C to D or D to C --> <input [(ngModel)]='listFilter' />


# ngModel Checklist

1. define ngModel in [()]
2. be sure to add FormsModule in app.module.ts in imports array

# Pipes Checklist

1. specify pipe character '|'
2. pipe name
3. pipe parameters
	* seperated with colons ':'

#Example

{{product.price | currency:'USD':true:'1.2-2' }}<


---------------------------------------------------------------------


# L3  
  # Templeate CheckList

  1. Inline Template
    * For short templates
    * specify the template property
    * Use the ES 2015 back ticks for multiple lines
    * watch syntax
  2. Linked Template
    * For longer templates
    * specify the templateUrl property
    * define the path to the HTML file

  # Interpolation Checklist

  ~> One way binding
    * From component class property to an element property.
  ~> Defined with double curly braces
    * Contains a template expression
    * No quote needed

  # Structural Directives Checklist

  *ngIf and *ngFor
    * Prefix with an asterisk
    * Assign to a quoted string expression
  
  1. *ngIf
    * Expression is evaluated as true or false value
  2. *ngFor
    * Define the local variable with let
    * Specify 'of': 'let product of products'
    

------------------------------------------------------------------------------


# L2 - Component Checklist

Class -> Code
Decorator -> Metadata
Import -> whichever needed

1. Class
  a. clear name
      ~> Use Pascalcasing
      ~> Append "Component" to the name
  b. export keyword
  c. Data in properties
      ~> Appropriate data type
      ~> Appropriate default value
      ~> camelCase with first letter lowercase
  d. Logic in methods
    ~> use camelCase with first letter lowercase

2. Metadata
  a. Component decorator
    ~> Prefix with @; suffix with ()
  b. selector: Component name in HTML
    ~> Prefix for clarity
  c. template: View's HTML
    ~> correct HTML syntax

3. Import: defines where to find the members that this component needs
  a. import keyword
  b. Member name
    ~> Correct spellin/casing
  c. Module path
    ~> Enclose in quotes

# Error: Check list
1. F12 key to check console
2. Recheck your code
    ~> HTML
      * close tags
      * Angular directives are case sensitive
    ~> Typescript
      * close braces
      * typescript is case sensitive
3. Check the issue solution on-line

# APM

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

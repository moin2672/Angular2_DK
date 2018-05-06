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

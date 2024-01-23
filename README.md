Hey, Documentation should be fun to read. You're welcome!

# DESING PATTERNS - Common in Object Orineted Program Design | Node.js

This Repositorys' main aim is to illustrate the variety of common Design Patterns used in Object Oriented Design; in this context Node.js was used (No frameworks).
Get started simply, by running `node index.js` the code in the terminal pointing to the directories [1. Without Pattern]() and [2. With Pattern](), to see the difference via console outputs of when the a design pattern has not been used and when it has been used.

## Overview

Each Pattern describes a problem which occurs over and over again in our environment, and then describes the core of the solution to that problem, in such a way that you can use this solution a million times over, without ever doing it the same way twice.

Design Pattern Essentials:

- Pattern name
- The Problem
- The Solution
- Consequences

### Example: Code Navigation to singleton pattern.

1. Navigate to [1. Creational Patterns](1.%20Creational%20Patterns/)/[1. Singleton Pattern](1.%20Creational%20Patterns/1.%20Singleton%20Pattern/)/[1. Without Pattern](./1.%20Creational%20Patterns/1.%20Singleton%20Pattern/1.%20Without%20Pattern/)/[index.js](1.%20Creational%20Patterns/1.%20Singleton%20Pattern/1.%20Without%20Pattern/index.js).
2. Read through the code files in the folder of [1. Without Pattern](./1.%20Creational%20Patterns/1.%20Singleton%20Pattern/1.%20Without%20Pattern/); when familiar with the code, get to the terminal pointing to the directory and run `node index.js`. See the console output.
3. Now navigate to [1. Creational Patterns](1.%20Creational%20Patterns/)/[1. Singleton Pattern](1.%20Creational%20Patterns/1.%20Singleton%20Pattern/)/[1. With Pattern](./1.%20Creational%20Patterns/1.%20Singleton%20Pattern/1.%20Witht%20Pattern/)/[index.js](1.%20Creational%20Patterns/1.%20Singleton%20Pattern/1.%20Without%20Pattern/index.js).
4. Read through the code and get familiar with the pattern used.Open the terminal now pointing to the current index.js directory and run `node index.js`. see the console output.
5. Repeat this procedure for each of the following Design patterns:

#### Creational Patterns

- [Singleton Pattern](./1.%20Creational%20Patterns/1.%20Singleton%20Pattern/)
- [Prototype Pattern](./1.%20Creational%20Patterns/2.%20Prototype%20Pattern/)
- [Factory Pattern](1.%20Creational%20Patterns/3.%20Factory%20Pattern/)
- [Builder Pattern](1.%20Creational%20Patterns/4.%20Builder%20Pattern/)

#### Structural Pattern

#### Behavioral Pattern

## Code Context

To start let's agree this; Learning node.js or any programming language is just a subtle thing of being a developer; Great node.js masterminds must use some kind of Design Pattern to solve code problems. Well, this Documentation (and Repository), gets you familiar with the code and the design patterns used in the code. The code examples reflect real world senario of an e-commerce enterprise, where you might at some point, have an employer, employee, shopper, distributer and more. We reflect on the concept of a store and make code solutions to solve various issues that may rise while making a virtual store in node.js.

## What I learned

![](./public-resources/creational-pattern-label.png)

### Singleton Pattern

Intent: "Ensure a class only has one instance, and provide a global point of access to it."

In the code samples, the [logger class](1.%20Creational%20Patterns/1.%20Singleton%20Pattern/2.%20With%20pattern/Logger.js) of the store activity is used to create a singleton. Notice in that file, the instantiation of the Logger, is done during the export of the class. so what is exported, is the Logger instance, which will be shared globally.
When the [index.js](1.%20Creational%20Patterns/1.%20Singleton%20Pattern/2.%20With%20pattern/index.js) file of the [2. With Pattern](1.%20Creational%20Patterns/1.%20Singleton%20Pattern/2.%20With%20pattern/) directory is executed, you'le notice that All four logs are created, as the logger class has been instantiated once, and is shared globally.

To see the difference; when singleton pattern is not implemented, run the [index.js](./1.%20Creational%20Patterns/1.%20Singleton%20Pattern/1.%20Without%20Pattern/index.js) file of [1. Without pattern](./1.%20Creational%20Patterns/1.%20Singleton%20Pattern/1.%20Without%20Pattern/) folder. You'll notice that even in the index.js, of the folder not implementing the singleton, the logger has been instantiated in the file its self. Meaning each of the files that instanciate the logger are not sharing a logger.

### Prototype Pattern

Intent: "Specify the kind of objects to create using a prototypical instance, and create new objects by copying this prototype."

Instead of spending time creating Objects that implement the same idea and are essentially sharing properties, we can create a prototype then let each individual object have a copy of the prototype, then the objects can elaborate more properties to be distinct from the prototype.

[without prototype](1.%20Creational%20Patterns/2.%20Prototype%20Pattern/1.%20Without%20Pattern/index.js): the index.js file has multiple instances of a shopper class, and most of the shoppers basically share the same item list; i.e., (camping knife, tent, backpack, and map). However we can create a [scout prototype](./1.%20Creational%20Patterns/2.%20Prototype%20Pattern/2.%20With%20Pattern/scout.js), where [each shopper](./1.%20Creational%20Patterns/2.%20Prototype%20Pattern/2.%20With%20Pattern/index.js), newly instantiated, can first aquire the scout prototype, then they can elaborate more properties like the name and extra items added to list, making them distinct from the prototype.

### Factory Pattern

Intent: "Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses."

Caveat: In this code, we'll not be using classes to defer subclasses instantiation, rather, we'll create a method, that will implement an if else statement, determining which subclass to instantiate.

Now, in the [index.js](./1.%20Creational%20Patterns/3.%20Factory%20Pattern/2.%20With%20Pattern/index.js) using a userFactory, you'll notice that we having a method userFactory(), that accepts multiple parameters and arguments. Now depending on the kind of of parameters passed, different subclasses get instantiated as it can be seen in [userFactory.js](./1.%20Creational%20Patterns/3.%20Factory%20Pattern/2.%20With%20Pattern/userFactory.js). Here, we create either an employee or a shopper, and the if else logic determines which user to instantiate.

Without a factory pattern, the code get so verbose, as we get to add multiple subclasses for instantiation. [see index.js without factory pattern](1.%20Creational%20Patterns/3.%20Factory%20Pattern/1.%20Without%20Pattern/index.js).

Next, let's look at at the the builder pattern. kind of helps suppliment the factory pattern much greater.

### Builder Pattern

Intent: "Separate the construction of a complex object from its representation so that the same construction process can create different representations."

Now, remember when discussing the Factory pattern, in the intent definition, we mentioned that a class can be used for instantiation of subclasses; the builder pattern actually does as the factory pattern specifies, and more. When looking at the [Index.js](1.%20Creational%20Patterns/3.%20Factory%20Pattern/2.%20With%20Pattern/index.js) file, that has the factory pattern applied to it, you'll almost notice that is difficult to know what's the meaning of each parameter passed during instantiation of a user. The Builder pattern, solves this problem.

In the [index.js]() using the builder pattern, we see that only the name of the person is being received as the instantiation parameter for the PersonBuiler. Now to apply other properties to the person object, the PersonBuilder class implements methods that when called by chaining on the PersonBuilder, they apply the properties to the Person class instantiation, after the build() method gets executed.

For example:

```
const jack = new PersonBuilder('Jack Weru Kioni').makeEmployee().makePartTime().build();
```

as compared to:

```
const jack = new Person("Jack Weru Kioni", 'employee', true, 0);
                    // Name, isEmployee, isPartime, hasMoney
```

The Builder Pattern, specifies that the factory pattern be used in class instansiation which intern instantiates specific subclasses; however to the main class instatiation should use class methods to build on towards specific subclass.

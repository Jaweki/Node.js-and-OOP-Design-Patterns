Hey, Documentation should be fun to read. You're welcome!

# DESING PATTERNS - Common in Object Orieneted Program Design | Node.js

This Repositorys' main aim is to illustrate the variety of common Design Patterns used in Object Oriented Design; in this context Node.js was used (No frameworks).
Get started simply, by running `node index.js` the code in the terminal pointing to the directories [1. Without Pattern]() and [2. With Pattern](), to see the difference via console outputs of when the a design pattern has not been used and when it has been used. Continue reading to understand...

## Overview

Each Pattern describes a problem which occurs over and over again in the software developement environment, and then describes the core of the solution to that problem, in such a way that you can use this solution a million times over, without ever doing it the same way twice.

Design Pattern Essentials:

- Pattern name
- The Problem
- The Solution
- Consequences

### Code Repo Navigation; Example: to understand singleton pattern.

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

##

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

##

![](./public-resources/structural-pattern-label.png)

### The Adapter Pattern

Intent: "convert the interface of a class into another clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces."

In this repository we consider the case of the local storage api. The localStorage api is readily available in the browser environment, but its not available in node environment. However, there are cases where you may need to program in a manner similar to the browser methods.

Now, in this Repo, we created a [class LocalStorage](2.%20Structural%20Patterns/1.%20The%20Adapter%20Pattern/2.%20With%20Pattern/localStorage.js), that when initialized, checks if there is a localStorage.json file already existing; if not, it will just initialize an empty item object. The LocalStorage class also offers methods for interacting with the class object e.g., get length(), getItem(), setItem(), clear(). This methods are similar to browser environment as in they allow seeking the lenght, retiving and setting a key value pair, as well as deleting the entire localStorage object and .json file.

When the code in the index.js is written, a similar interface to that of the browser environment is used, that can this time run in node.js environment, thanks to The Adapter Pattern.

### The Proxy Pattern

Intent: "Provide a surrogate or placeholder for another object to control access to it."

For a real life day to day example, we know a that company might have a CEO. now, the CEO is always busy and cannot directly be reached if employees, stakeholders, or clients need to communicate issues; rather, an assistant is always in place to relay only the important and immediate issues, to the CEO. A proxy, is similar to that CEO.

In addition to managing expensive objects, proxies can be used to:

- Manage a remote resource
- Provide data validation of input
- Provide security
- Cache Data
- Log event actions

Just as the Adapter pattern, proxies must provide the same interface as the adapter pattern.
In this repo, the [proxy code](./2.%20Structural%20Patterns/2.%20The%20Proxy%20Pattern/2.%20With%20Pattern/FS_Proxy.js) is used to control access to README files in that path. There are two kinds of README files in [the proxy pattern directory](2.%20Structural%20Patterns/2.%20The%20Proxy%20Pattern/2.%20With%20Pattern/); a README.txt and README.md. The FS_proxy, is a JavaScript class that wraps around the fs module of node.js. It offers the same interface as the fs module; i.e., the same methods available in fs module and their order of parameters they accept is similar in both FS_proxy and fs module; However, the fs module only allows reading of .txt files and blocks all .md files from being read.

Now the code example can be subject to modification and advancement, for example, the proxy can provide a security interface to check for access token and password, before allowing a read for the .md files.

### The Composite Pattern

Intent: "Composing objects into tree structures to represent part-whole hierachies. Composite lets clients treat individual objects and compositions of objects uniformly."

Composites work with trees, and when it comes to programming, trees are everywhere. One of the common trees developers interact with is the File System; where directories can be used to group other directories containing files in them.

- Tree Data-Structure terminology
  Nodes that contain groups of other nodes, are referred to as branches.
  In the file system, a file folder represents a branch.
  Traversing the tree, to nodes that don't contain or group other nodes,
  those node are referred to as leafs.

The Composite Pattern allows treating Leafs and branches uniformly.

To see the effect of the composite programming, execute the [index.js](2.%20Structural%20Patterns/3.%20The%20Composite%20Pattern/2.%20With%20Pattern/index.js) in the composite directory.
The code has a classes [Catalog Item]() and [Catalog Group](). The catalog group class allows programming for catalog items in groups. From executing the [code](./2.%20Structural%20Patterns/3.%20The%20Composite%20Pattern/2.%20With%20Pattern/index.js), you'll notice that the catalog groups are shown by UpperCase statements and catalog items have an item name and item price.

### Decorators

#### Disclimer - Not similar syntax as decorators in Typescript, but similar purpose.

Intent: "Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality."

In the Decorator directory we realize the following classes Shopper and InventoryItem. In this tutorial, we apply decorators to the InventoryItem class. Notice we have base inventoryItems Walkman and Neclace. What if, we wanted a diamond and golden-diamond Neclace and a diamond Walkman. In addition to adjusting the name an inventory item, the decorators adjust the price.

Now in some level, decorators can be mishandled as to replace class inheritance where a super class is extended; this should be avoided, as:

- decorators can be misused, especially by attempting to replicate the behavior of class inheritance, it can lead to confusion and unexpected results in the code.
- Class inheritance is a fundamental object-oriented programming concept. It establishes a hierarchical relationship between classes, where a subclass inherits properties and methods from a superclass. Using decorators as a substitute for class inheritance can lead to a loss of clarity in the code, as it deviates from the conventional and widely understood paradigm.
- Misusing decorators in this context could result in code that is harder to understand, maintain, and debug.

This code creates classes that wrap around other classes and act as decorator. This has been done, just to explain the context; but in real software environments, decorators are applied with the syntax below:

```js
function decorator(params) {
    // Some logic here...
}

class InventoryItem {

    @decorator

    constructor(itemName='unnamed item', price=0) {
        this.item = itemName;
        this.price = price;
    }

    // Additional code...
}
```

However, using decorators with the syntax in this repo, is useful when code functionality is to be applied dynamically; and I would highly advice, in this case consider class inheritance.

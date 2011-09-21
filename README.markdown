# Noop

## About
Noop gives Node.JS Object Oriented Programming in a traditional class style syntax.
"Node.js OOP"

Noop provides the extremely rich Joose system for letting you easily build
objects ("Classes") and use them with traditional patterns such as Singletons.

It also provides an autoloader like other languages, so you can specify where
your apps code base lies, and then simply never worry about requiring() and
storing the result to a variable to use, letting you rapidly build your
application.

## Install
Noop is ready to be installed from NPM, but may also be manually added
to your project with git submodules. First CD to your project root.
Ensure a directory named `node_modules` exists if using git.

  - Install with NPM:
     - `npm install noop`
     
  - Install with GIT:
     - As a submodule:
        - `git submodule add git://github.com/aikar/noop node_modules/noop`
        - `git submodule update --init --recursive`

## Usage
Noop returns a function from its module which allows you to register autoloaders.

First say you have projectroot/lib/Foo/Bar.js with

    Class({
        methods: {
            initialize: function() {
                console.log("Foo.Bar initialized")
            }
        }
    });

Then in your projectroot/mylib.js

    var autoload = require('noop')    
    autoload(__dirname + '/lib')
    
    new Foo.Bar();
    
Will echo to screen "Foo.Bar initialized"
    
## Contributing
If you would like to contribute, please fork the project on github, make changes
and submit pull requests back to me.

## License
> The MIT License
>
>  Copyright (c) 2011 Daniel Ennis <aikar@aikar.co>
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

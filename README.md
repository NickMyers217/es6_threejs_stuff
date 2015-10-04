# ECMAscript 6 and Three.js

How it works
  - Write your es6 modules
  - If you have multiple modules, use something like rollup to bundle them together
  - Use babel to convert the bundled file into standardized js that is implemented in all modern browsers
  - Use beefy to host the bundle on a local web server

### I've made most of that easy for you (assuming you're not on windows...)

You need git and npm installed.

```sh
$ git clone [this repository]
$ cd [this repository]
$ sudo npm install
```
At this point create your code in the js folder (don't have support for multiple modules just yet). If you're not feeling creative, just try out the default stuff that's already there. When you're ready to try it out use the makefile, or if you don't like UNIX Makefiles, run its commands manually or make your own shell script.
```sh
$ make
```
Go to your browser and open up localhost (port 1337 by default).

### Todos

 - Get support for multiple modules (not sure if I want to use es6 or node modules yet)
 - Find a way to trigger the bundling and transpiling upon file save, so that we can leverage BEEFY's live refresh for some real time coding fun (imagine creating a 3d scene in real time without really ever compiling or building anything)

----
Licensed with WTFPL

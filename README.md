# ECMAscript 6 and Three.js

How this works at a high level
  - Write your es6 in the modules folder, make sure you have a main file
  - Bundle up the modules into a single file with browserify
  - Set up browserify to run each file through babel to transpile the es6 code to es5
  - Use a task-runner like grunt to automate the process upon file saves so that you can edit in real time
  - Put the bundle on an HTML page and refresh it in your browser after changes

### I've made most of that easy for you (assuming you're not on windows...)

You're going to need git, npm, and grunt installed. Go get them right now if you're missing one.

```sh
$ git clone https://github.com/nickmyers217/es6_threejs_stuff ./cool
$ cd cool
$ sudo npm install
```
At this point create your code in the modules folder. Feel free to use es6 style modules, or common.js require style modules. The build system handles both. If you're not feeling creative, just try out the default stuff that's already there. When you're ready to try it out proceed onward!.
```sh
$ grunt
```
Grunt is now monitoring your files and building them. You can go ahead and open up the ./dist/index.html in your browser. Grunt will continue to run in the background and watch for changes to any of your modules, so that it can transpile again when neccessary. If you just want grunt to build the files once and not monitor you can try this.
```sh
$ grunt build
```
Have fun.

### Todos
 - Stats.js for fps

----
Licensed with WTFPL

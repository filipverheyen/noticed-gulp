# noticed-gulp

h1.INSTALLATION

h3.You need the following software on your system, Download and install!

nodeJS http://nodejs.org/
After you have installed nodeJS, you can go and install gulp globally with following command:

(sudo) npm install gulp -g
Also install Bower globally with ( Bower http://bower.io/ ):

(sudo) npm install bower -g
Now, open your terminal and go to your used theme folder and run following command to install all necessary node modules referenced in package.json file:

(sudo) npm install
Also get the bower components for susy(grid) and breakpoint-sass from the bower.json file.

(sudo) bower install
All your sass files will be compiled in the assets/build/css folder, So don't forget to at this to your theme.info file.

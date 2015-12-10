# noticed-gulp

<h1>INSTALLATION</h1>

<h2>You need the following software on your system</h2>
<dl>
<dt>nodeJS</dt> 
<dd>follow the instructions at http://nodejs.org/</dd>
<dt>After you have installed nodeJS, you can go and install gulp globally with following command:</dt>
<dd><code>(sudo) npm install gulp -g</code></dd>
<dt>Also install Bower globally with ( Bower http://bower.io/ ):</dt>
<dd><code>(sudo) npm install bower -g</code></dd>
<dt>Now, open your terminal and go to your used theme folder and run following command to install all necessary node modules referenced in package.json file:</dt>
<dd><code>(sudo) npm install</code></dd>
<dt>Also get the bower components for susy(grid) and breakpoint-sass from the bower.json file.</dt>
<dd><code>(sudo) bower install</code></dd>
</dl>
<p>All your sass files will be compiled in the assets/build/css folder, So don't forget to at this to your theme.info file.</p>

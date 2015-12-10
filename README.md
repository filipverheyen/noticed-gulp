# noticed-gulp

<h2>INSTALLATION</h2>
<p>Download this repository and extract the contents into your theme root.</p>
<p>Make sure you have nodeJS installed.<br> 
http://nodejs.org/</p>
<p>After you have installed nodeJS, you can go and install gulp globally with following command:<br>
<code>(sudo) npm install gulp -g</code></p>
<p>Also install Bower globally:<br>
<code>(sudo) npm install bower -g</code></p>
<p>Now, open your terminal and go to your used theme folder and run following command to install all necessary node modules referenced in package.json file:<br>
<code>(sudo) npm install</code></p>
<p>Also get the bower components for susy(grid) and breakpoint-sass from the bower.json file.<br>
<code>(sudo) bower install</code></p>
<p>All your sass files will be compiled in the assets/css folder,<br>
so don't forget to add this to your theme settings.</p>
<h2>USING GULP</h2>
<p>Run Gulp<br>
<code>gulp watch</code></p>

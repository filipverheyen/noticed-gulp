# NOTICED GULP

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
<p>Tell Gulp to watch for changes<br>
<code>gulp watch</code></p>
<p>Keep a few things in mind</p>
<ul>
<li>To make sure everything is compiled into a single CSS file, prefix all your .scss files with an underscore, like this:<br><code>_filename.scss</code></li>
<li>Split up your code! The 'partials' subdirectories are there to give you an idea, but feel free to make more.
<li>Keep your Sass variables together and easily accessible by putting them in the 'variables' directory.

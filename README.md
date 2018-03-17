# angular-nav-menu
Write a simple mobile nav menu using angular.io, typescript, bootstrap, font-awesome, and router.

# setup environment
install node.js

# Dependencies

angular-cli
angular-cli-ghpages
github-pages enabled (Found in the settings menu) (Also, do this after initial ngh deployment)

# Caution

`ng github-pages:deploy` has been deprecated.  Use `ngh` instead.

# Instructions

`npm i -g angular-cli@latest`
`npm i -g angular-cli-ghpages@latest`

`git clone https://github.com/stuartmurry/angular-nav-menu.git` 

`cd angular-nav-menu`

To run locally

`ng serve`

# To deploy to Github Pages

Create a new repository on Github.  Find the clone or download button.  You will see an https link. 

`git remote add origin https://github.com/<repository-name>/<project>.git`

Build Project
`ng build --prod --base-href "https://<repository-name>.github.io/<project>/"`

Deploy to GitHub Pages
`ngh`

Go into `settings` within your Github account and select `settings` tab. Find Github Pages and select `gh-pages` branch from the dropdown menu. 

# Create From Scratch
Using the angular-cli, create a new angular project.
`ng new angular-nav-menu`

`cd angular-nav-menu`

Jump to `To deploy to Github Pages` and follow those instructions.





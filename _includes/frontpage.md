---
title:  "Using the Repo"
---

Clone this repo:

```git clone https://github.com/DavidCWebs/jekyll-bootstrap.git```

Rename the new "jekyll-bootstrap" directory:

```mv jekyll-bootstrap new-site```

Move to the new directory:

```cd new-site```

Install Grunt:

```sudo npm install```

##Runnint Grunt Tasks
Grunt for this project needs to be refined.

Build the site:
```grunt```

Serve and watch:
```grunt exec```

##Notes
* This project has a base url setting in _config.yml
* Running grunt compiles app/assets/_less/style.less to css/style.css
* Bootstrap (and other styles) are imported into style.less
* Add styles to app/assets/_less/style.less

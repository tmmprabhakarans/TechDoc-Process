---
title: "Levels"
date: 2023-03-22T12:51:53+05:30
weight: 2
---

## 1. Initial/Preparation stage:
1.	Based on the Tech Doc request, gather all the inputs required to create the document.
2.	Identify the document type and organize the folder structure.
3.	Liase with SMEs and stakeholders to collect all available inputs.
4.	Have a Q&A session with SME to clarify any doubts.

## 2. Version Control System:
* VCS is a software designed to help team collaborate and work in parallel.
* Git is distributed version control software. Version control is a way to save changes over time without overwriting previous versions. Being distributed means that every developer working with a Git repository has a copy of that entire repository - every commit, every branch, every file. Git is used locally in individual systems.
* GitHub is a cloud server used for team collaboration and task monitoring.

### GitHub: 
1.	Create a GitHub account.
2.	Create a standalone repository.
3.	Define standard rules for repo and branches.

### Git:
1.	Create input and output folders and organize the input files in compliance with folder structure.
2.	Initiate an empty Git repository by git init.
3.	Clone the repository. (git clone)
4.	Establish remote connection of the repository with .git folder and sync all the available files to GitHub cloud.
5. Type the following in the cmd prompt and press enter for each code of line.
	```           
    git remote add origin <repo link>
	git push -u origin main
	git push –set –upstream origin main
    ```
6.	To sync, type:
	```
	git add .
	git commit
	git push (To add all files to the staging area)
	```
## 3. Editorial and Publishing System:

### Hugo:
Hugo is a general-purpose website framework. Technically speaking, Hugo is a static site generator. 

Steps:
1.	Create a new site.
	```
	hugo new site <sitename>
	```	
	A new folder with sitename and a bunch of folders created inside it.
2. Download the hugo theme [Relearn](https://mcshelby.github.io/hugo-theme-relearn/index.html) and place it inside the themes folder. 
3. Edit the **config file** to add the theme name.
4.	Create pages and add content.
	1. Home page, 2. Chapter & 3. Default page.
	```
	hugo new --kind home _index.md
	hugo new --kind chapter <name>/_index.md
	hugo new <chapter>/<name>/_index.md
	```
5.  Introduce [markdown syntax](https://mcshelby.github.io/hugo-theme-relearn/cont/markdown/index.html) into the content page.
3.	Review content and configure the site.
4.	Publish the site locally and do a final review.

### Render
Deploying static sites on Render is incredibly easy. Just link your GitHub or GitLab repo — we build your site every time you push to your repo and serve it over a global CDN with fully managed TLS certificates.

1.	Sign into Render using GitHub account.
2.	Click New and select Static Site.
![Staticsite](/images/Staticsite.png?classes=left)
 
3.	Connect a GitHub repository that you wish to deploy.
![Repo](/images/Repo.png?classes=left)
 

4.	Fill in the fields in the following format:

	Name = <Name of the site>

	Branch = Main

	Root directory = <Project folder location>

	Build command = hugo --gc –minify

	Publish directory = Public (public folder inside hugo project folder)

![createsite](/images/createsite.png?classes=left)
 
5.	Click Create Static site.



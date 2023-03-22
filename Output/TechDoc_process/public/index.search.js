var relearn_search_index = [
  {
    "content": " The Technical Documentation system at Metamation can be divided into three levels. They are: Level 1 - Initial/Preparation stage\nLevel 2 - Version Control System\nLevel 3 - Editorial and Publishing System\n",
    "description": "",
    "tags": null,
    "title": "Technical Documentation",
    "uri": "/procedure/technical-documentation/index.html"
  },
  {
    "content": " ",
    "description": "",
    "tags": null,
    "title": "Workflow",
    "uri": "/workflow/index.html"
  },
  {
    "content": "1. Initial/Preparation stage: Based on the Tech Doc request, gather all the inputs required to create the document. Identify the document type and organize the folder structure. Liase with SMEs and stakeholders to collect all available inputs. Have a Q\u0026A session with SME to clarify any doubts. 2. Version Control System: VCS is a software designed to help team collaborate and work in parallel. Git is distributed version control software. Version control is a way to save changes over time without overwriting previous versions. Being distributed means that every developer working with a Git repository has a copy of that entire repository - every commit, every branch, every file. Git is used locally in individual systems. GitHub is a cloud server used for team collaboration and task monitoring. GitHub: Create a GitHub account. Create a standalone repository. Define standard rules for repo and branches. Git: Create input and output folders and organize the input files in compliance with folder structure. Initiate an empty Git repository by git init. Clone the repository. (git clone) Establish remote connection of the repository with .git folder and sync all the available files to GitHub cloud. Type the following in the cmd prompt and press enter for each code of line. git remote add origin \u003crepo link\u003e git push -u origin main git push –set –upstream origin main To sync, type: git add . git commit git push (To add all files to the staging area) 3. Editorial and Publishing System: Hugo: Hugo is a general-purpose website framework. Technically speaking, Hugo is a static site generator.\nSteps:\nCreate a new site. hugo new site \u003csitename\u003e A new folder with sitename and a bunch of folders created inside it. Download the hugo theme Relearn and place it inside the themes folder. Edit the config file to add the theme name. Create pages and add content. Home page, 2. Chapter \u0026 3. Default page. hugo new --kind home _index.md hugo new --kind chapter \u003cname\u003e/_index.md hugo new \u003cchapter\u003e/\u003cname\u003e/_index.md Introduce markdown syntax into the content page. Review content and configure the site. Publish the site locally and do a final review. Render Deploying static sites on Render is incredibly easy. Just link your GitHub or GitLab repo — we build your site every time you push to your repo and serve it over a global CDN with fully managed TLS certificates.\nSign into Render using GitHub account.\nClick New and select Static Site. Connect a GitHub repository that you wish to deploy. Fill in the fields in the following format:\nName = Branch = Main\nRoot directory = Build command = hugo –gc –minify\nPublish directory = Public (public folder inside hugo project folder)\nClick Create Static site. ",
    "description": "",
    "tags": null,
    "title": "Levels",
    "uri": "/procedure/technical-documentation/levels/index.html"
  },
  {
    "content": "The purpose of this document is to explain the process flow carried out in Technical Documentation team at Metamation.\n",
    "description": "",
    "tags": null,
    "title": "Purpose",
    "uri": "/intro/index.html"
  },
  {
    "content": "Document Number:\nDocument Title: Technical Documentation Process Flow\nDocument Type: Process Document\nAuthor:\nReviewer:\nCreated date:\nVersion: 0.1\n",
    "description": "",
    "tags": null,
    "title": "Technical Documentation Process Flow",
    "uri": "/index.html"
  },
  {
    "content": "Input Channel: Any new documentation request is raised in Fogbugz, the same is notified to the Tech Doc team using Fogbugz cases. Fogbugz is a project management tool used at Metamation. Create a new case in Fogbugz to initiate a document creation process. To create a case, get necessary approval and access to use Fogbugz. Contact sanjiv@metamation.com Responsibility: Technical Writer\nCRM: CRM along with TechDoc is responsible for delivering the documents to customer on time and to collect feedback on document quality. Responsibility: Customer support team and Technical Writer\n",
    "description": "",
    "tags": null,
    "title": "Procedure",
    "uri": "/procedure/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]

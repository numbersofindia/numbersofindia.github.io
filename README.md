# Numbers Of India : Website
## Sections
- Newsletter Subscription
- Stories (Filterable)
- About + Airtable ToDo List
- Contact + Social Icons

## How to Add a new Story : TL;DR 
- Pull the repo
- Make sure you're on the 'dev' branch 
- `npm install` in the root directory
- In 'stories' folder, make a copy of the 'template-story' sub-folder
- Rename it to the story name (this will form the url)
- Add the story (use the js, scss, res, data folders liberally)
- While developing, to live check the story/viz go to the root directory and run `gulp watchstory --story=stories/name-of-story-folder/`
- Once you've done developing, run `gulp buildstory --story=stories/name-of-story-folder/` to build the story
- Add and Commit changes
- Push to the dev branch by running `git push origin dev`
- Push the build subtree to master, to deploy by running `git subtree push --prefix build origin master`
- Wait for 2 mins and check the [site to make sure everthing's alright](http://numbersofindia.github.io)


## Make changes to the main site : TL;DR 
- Pull the repo
- Make sure you're on the 'dev' branch 
- `npm install` in the root directory
- Make necessary changes (use the js, scss, res, data folders liberally)
- While developing, to live check the story/viz go to the root directory and run `gulp watch`
- Once you've done developing, run `gulp` to build the story
- Add and Commit changes
- Push to the dev branch by running `git push origin dev`
- Push the build subtree to master, to deploy by running `git subtree push --prefix build origin master`
- Wait for 2 mins and check the [site to make sure everthing's alright](http://numbersofindia.github.io)

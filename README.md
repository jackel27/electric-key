# Jackel's Electric-Key

> Set up hotkeys to open specific files or programs. Made with Electron.
This is currently a work in progress. Functionality is present though. No releases as of yet.
### TODOS

* <strike> Find out why duplicates objects are saving to parent.localStorage on the second attempt </strike>
* <strike> Bug concerning fs-extra about not creating directories if they do not exist. files yes, but not directories... </strike>
* icon is extracting well, but images are not. need a default icon in place
* <strike> Bind the hotkeys to electron</strike>
* Add constraints for redundant shortcuts....
* context-menu needs a "move to..."
* context-menu needs functionality for edit, delete, and move to
* A general folder needs to be created and static.
* allow user to delete folders. Upon deletion, items redirect to general folder.
* prevent duplicate folder names
* prevent duplicate shortcuts
* prevent duplicate paths
* prompt user upon duplication flags. give user option as to what they want to do
* need some graphic swag (icons, etc...)


### Future Goals

* Enable Profiles
* Adjust hotkey input field


#### Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:9080
yarn dev

# build electron app for production
yarn run build
```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[de85f81](https://github.com/SimulatedGREG/electron-vue/tree/de85f81890c01500113738bfe57bef136f9fbf52) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

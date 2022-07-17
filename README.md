## HW 8 - [Getting Started with React Native](https://canvas.northseattle.edu/courses/2206721/assignments/26601681?module_item_id=64995452)
- [x] Setup React Native Dev Environment, making sure `ANDROID_SDK_ROOT` is set
- [x] Create a new React Native project with `npx react-native init ad340_react_native`
- [x] Make the home screen show:
  - [x] An application name or heading, centered and styled with a bold font >= 24pt
  - [x] A brief 1-2 sentence description of the application
  - [x] A list of values (any values?)
- [x] Publish the code to a new github repo
## HW 9 - Hooked on React Native
- [x] Add People and Person Detail screens
- [x] Retrieve person data from the API when the People Screen loads
- [x] Make the list items in the People screen function as links to the Person Detail screen with the given person's data selected
  - [x] Figure out how to pass person's data to the next screen (props via something with the navigator? modify the global context object?)
  - [x] Wrap the `PersonListItem` component in a `TouchableOpacity` to allow navigation to `PersonDetailsScreen`
- [x] Allow navigation back to each screen's parent (`Home -> People -> Person Details`) in the status bar
- [x] Complete `PeopleScreen.js` to display the person's image, as well as a list of their details
- [x] Fix Person Page Header
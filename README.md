# CS402 Final Project - Wordbites
Wordbites is a clone of the [Wordle](https://www.nytimes.com/games/wordle/index.html) game by Josh Wardle built in React Native using the Expo framework. This app aims to replicate the same gameplay of Wordle except the player can continously play multiple games with different word lengths ranging from 4 to 8 letters.

## Planned features
These were the feature that we planned to add while developing this project, but weren't able to due to time constraints. 
- Daily Word challenge (used a backend to retrieve word of the day)
- Other game modes, such as a 'timed' game mode where you would solve as many words as you can before the time runs out or implementing existing Wordle clones such as [Quordle](https://www.quordle.com/).
- Accounts system to sync stats and settings over multiple devices
- Better scaling of elements for tablet screens
## Run Instructions
1) Clone this repo.
2) Run `npm i` to install all required dependencies
3) If you don't have `expo-cli` yet, use `npm i -g expo-cli` to install it.
4) After installing the expo-cli, use `expo start` to start running the app.
5) In order to use the app on mobile, you need the Expo Go app, which is available for [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) or [iOS](https://apps.apple.com/us/app/expo-go/id982107779). For Android, use the in-app QR code scanner to open the app on the device. For iOS use the device's camera app to scan the QR code.

*Note: During the app's development, playtesting was mostly done on mobile phones (16:9 and 16:10 screens). Using this app on tablet-sized devices may not have the best visual experience.*

### **Alternate Run Instuctions**
If you want to try out the app without cloning the repo, you could just download Expo Go (from Step 5 above) and use the link below to try out the app.
```exp://exp.host/@angelolz/Wordbites?release-channel=default```

## Build instructions
1) Before building, you would need `eas-cli`. If you don't have it yet, use `npm i -g eas-cli` to install it.
2) If you're not logged in Expo yet, use `eas login` to do so.
3) To build for Android or iOS use `eas build --platform android` or `eas build --platform ios`. To build for both platforms, use `eas build --platform all`.
4) eas-cli will ask you other questions such as generating a keystore (Android) or generating a provisioning profile (iOS).
5) eas-cli will wait for your build to finish before it exits, but you can interupt with `ctrl+c` if you don't want to wait. You can always check build progress [here](https://expo.dev/builds).

## Dependencies used 
*Note: the Expo and React essential dependencies will not be listed here.*
- [react-native-elements](https://github.com/react-native-elements/react-native-elements)
- [react-native-paper](https://callstack.github.io/react-native-paper/)
- [react-native-root-toast](https://github.com/magicismight/react-native-root-toast)
- [@react-native-picker/picker](https://github.com/react-native-picker/picker)

## License
GNU GPL 3.0
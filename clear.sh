watchman watch-del-all
rm -rf yarn.lock package-lock.json node_modules
rm -rf android/app/build
rm ios/Pods ios/Podfile.lock
rm -rf ~/Library/Developer/Xcode/DerivedData
$TMPDIR/react-native-packager-cache-* $ rm -rf $TMPDIR/metro-bundler-cache-*
npm install && cd ios && pod update && cd ..
cd android && ./gradlew clean && cd ..
npx react-native-asset
npm start --reset-cache

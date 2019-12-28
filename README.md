# steps required

1. $ yarn add file:../../react-native-slang
2. $ react-native link react-native-slang
3. In project level build.gradle add under allprojects/repositories

```
maven {
            url "http://maven.slanglabs.in:8080/artifactory/gradle-release"
}
```

4. Change the keys in App.js to refer to the buddy_id and api_key specific to your account (as available in https://console.slanglabs.in)

```
componentDidMount() {
    Slang.initialize(
      'fill_buddy_id', // Set the buddy id here
      'fill_api_key',  // Set the api key here
      {
        locale: 'LOCALE_ENGLISH_IN', // Other possible values: LOCALE_HINDI_IN, LOCALE_ENGLISH_US
        position: 'CENTER_BOTTOM', // Other possible values: LEFT_TOP, CENTER_TOP, RIGHT_TOP, CENTER, LEFT_BOTTOM, RIGHT_BOTTOM etc.
      },
```

5. Run the react native app as usual. If successful, you should see the slang mic icon at the bottom of the screen once the app loads. 

6. Click on the mic to launch Slang. 

7. Change the handler to customize handling of the intents

```
Slang.setIntentActionHandler(intent => {
      this.setState({data: intent});
});
```

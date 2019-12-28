# steps required

1. $ yarn add file:../../react-native-slang
2. $ react-native link react-native-slang
3. In project level build.gradle add under allprojects/repositories

```
maven {
            url "http://maven.slanglabs.in:8080/artifactory/gradle-release"
}
```

4. Change the keys in App.js to refer to the buddy_id and api_key specific to your account

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

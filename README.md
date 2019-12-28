# steps required

yarn add file:../../react-native-slang
react-native link react-native-slang

in project level build.gradle add

```
maven {
            url "http://maven.slanglabs.in:8080/artifactory/gradle-release"
        }
```

under allprojects/repositories

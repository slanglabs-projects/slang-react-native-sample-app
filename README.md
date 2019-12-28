# steps required

1. $ yarn add file:../../react-native-slang
2. $ react-native link react-native-slang

in project level build.gradle add

```
maven {
            url "http://maven.slanglabs.in:8080/artifactory/gradle-release"
        }
```

under allprojects/repositories

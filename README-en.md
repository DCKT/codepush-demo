# Code Push

When you develop a mobile application with React Native, you will need to share it to your users by the store (AppStore or PlayStore).

Then, when your app is available, you will obviously encounter a production bug. In this kind of situation, depends of the bug gravity, it could be better to do a rollback to the previous version of your application. However, actually, the AppStore and PlayStore don't let us to do this kind of things.

Indeed, you will have to upload the previous build version of your app to do a rollback. And also wait for the update to be effective. As you know, this could take some hours for the PlayStore to some days for the AppStore.

You risk, in case of blocking bug, to frustrate all the next users of your app and generate bad notes and comments until the correct patch.

Hopfully, there is a solution to this problem who will let you to update your application **without passing by the store** who is  [CodePush](https://microsoft.github.io/code-push/).

## CodePush, a service

CodePush is a hosted service highlighted by Microsoft who offer to React Native & Cordova developers, the ability to deploy updates directly on their user's phones.

It works simply by a repo system, in which you will send your JavaScript build to the service who will make the link with the application who use the SDK.

**Note :** CodePush only allow to update statics elements like HTML, CSS, JavaScript and pictures. If you edit a native module, you will have to send your app to the store.

## Configure our application

Before setting up the SDK, we have to create a new application in CodePush. This will be done by the CLI tool in 3 steps :

1 - install CodePush CLI
```
npm i -g code-push-cli
```

2- register to CodePush (if you don't own one yet)
```
code-push register
```

3- Create an application
```
// At the root of your app
code-push app add MyApp-android android react-native
code-push app add MyApp-ios ios react-native
```

You will see that we have to create an app for each platform. This has the disavantage to make you deploy 2 times the same build but this will allow you to fix a bug on a specific platform.

At the end, you will have two pairs of deploy keys (Staging, Production).
We will need it later but you can retrieve them with this command :

```
code-push deployment list MyApp-android -k
```

## Setup the SDK

The SDK write by Microsoft is very well maintened on [Github](https://github.com/Microsoft/react-native-code-push) and follow scrupulously each React Native update. You can retrieve the list of CodePush versions based on [React Native version](https://github.com/Microsoft/react-native-code-push#supported-react-native-platforms).

To begin, you need to install the module :
```
yarn add react-native-code-push
```

This SDK use native modules, so you must link him to the application :
```
react-native link react-native-code-push
```

I will ask you to give the production keys for Android and iOS. And then, you will be able to use the SDK in your application.

To use the SDK, it's very easy, you just need to use a "Higher Order Component" (HOC) on the root component of your application (`App.js` in the demo project).

```javascript
import React from 'react'
import codePush from 'react-native-code-push'

class App extends React.Component {
  ...
}

export default codePush(App)
```

Your app can now be updated by CodePush ! When you don't specify options, by default, CodePush will check if there is an update at the starting of the application, and if finds one, download it in background to install them at the next restart of the app.

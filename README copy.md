This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

pour configurer  android studio , android_home, android_sdk , adb, gradlew 
> npx react-native doctor

ANDROID_HOME = C:\Users\youssef\AppData\Local\Android\Sdk

entrepot
  allee
    rayon
      niveau 
        article



cd C:\Users\Your-Username\AppData\Local\Android\Sdk\platform-tools
Une fois que vous êtes dans le répertoire platform-tools, vous pouvez utiliser ADB. Par exemple, 
pour afficher la liste des appareils Android connectés à votre machine, 
vous pouvez utiliser la commande adb devices.

ANDROID_HOME est une variable d'environnement utilisée dans les systèmes d'exploitation pour spécifier l'emplacement du SDK Android sur votre système de fichiers. Cette variable est utilisée par des outils tels que le Android Debug Bridge (ADB), le Gradle Android Plugin et d'autres outils de développement Android pour trouver les outils et les ressources nécessaires pour construire et déboguer vos applications Android.

Par exemple, si vous avez installé le SDK Android dans le répertoire C:\Users\Your-Username\AppData\Local\Android\Sdk sur Windows, vous définiriez ANDROID_HOME comme suit :

> setx ANDROID_HOME "C:\Users\Your-Username\AppData\Local\Android\Sdk"

Et sur MacOS ou Linux, si vous avez installé le SDK Android dans le répertoire ~/Library/Android/sdk, vous définiriez ANDROID_HOME comme suit :

> export ANDROID_HOME=~/Library/Android/sdk


### Gradle
==== 
Pour installer Gradle sur Windows et l'ajouter au PATH, suivez ces étapes :

Téléchargez la dernière version de Gradle à partir de la page de téléchargement officielle.

Décompressez l'archive dans le répertoire de votre choix. Par exemple, vous pouvez le décompresser dans C:\Gradle.

Ajoutez Gradle à votre variable d'environnement PATH. Pour ce faire, ouvrez le Panneau de configuration -> Système et sécurité -> Système -> Paramètres système avancés. Cliquez ensuite sur Variables d'environnement.

Dans la fenêtre Variables d'environnement, sous Variables système, cliquez sur Nouveau.

Dans la fenêtre Nouvelle variable système, entrez GRADLE_HOME pour le nom de la variable et le chemin vers le répertoire où vous avez décompressé Gradle pour la valeur de la variable. Par exemple, si vous avez décompressé Gradle dans C:\Gradle\gradle-7.2, entrez C:\Gradle\gradle-7.2.

Sélectionnez la variable système Path et cliquez sur Modifier. Dans la fenêtre Modifier la variable d'environnement, cliquez sur Nouveau et ajoutez 
> ***%GRADLE_HOME%\bin.***

Cliquez sur OK dans toutes les fenêtres pour fermer.

Pour vérifier que Gradle est correctement installé, ouvrez une nouvelle fenêtre de l'invite de commandes et exécutez *** gradle -v ***. Vous devriez voir des informations sur la version de Gradle.

Notez que Gradle nécessite une machine virtuelle Java (JVM) pour exécuter. Assurez-vous donc que vous avez également installé une JVM compatible.


### reactnative doctor
=====
> npx react-native doctor


Adb 
=========
> adb devices

### expo
========== 
> npx expo start

1. Installez d'abord l'outil en ligne de commande Expo CLI. Ouvrez votre terminal et exécutez la commande suivante :
> npm install -g expo-cli

2. Une fois Expo CLI installé, vous pouvez créer une nouvelle application React Native en exécutant :

> expo init my-react-native-app
> cd my-react-native-app

> npm start

Ou si vous préférez utiliser expo :
> expo start


si vous avez cette erreur ExpoMetroConfig.loadAsync is not a function
TypeError: ExpoMetroConfig.loadAsync is not a function

la solution est 

> npm uninstall -g expo
> npm uninstall @expo/metro-config

Reinstall expo:
> npm install -g expo-cli

In your project directory, reinstall @expo/metro-config:
> npm install @expo/metro-config

Finally, try running your project again:
expo start



> npm install @react-navigation/native @react-navigation/stack react-native-sqlite-storage axios react-native-camera
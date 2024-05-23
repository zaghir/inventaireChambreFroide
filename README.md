
pour configurer  android studio , android_home, android_sdk , adb, gradlew 
> npx react-native doctor

ANDROID_HOME = C:\Users\myacount\AppData\Local\Android\Sdk

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

> expo init inventaireChambreFroid
> cd inventaireChambreFroid

> npm start

Ou si vous préférez utiliser expo :
> npx expo start


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
> npx expo start


> npx expo start



npm install @react-navigation/native @react-navigation/stack react-native-sqlite-storage axios react-native-camera 

npm install @react-native-picker/picker --save
npx expo install @react-native-picker/picker


https://www.npmjs.com/package/react-native-element-dropdown
npm i react-native-element-dropdown --save
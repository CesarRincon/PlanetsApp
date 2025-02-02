This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

## Step 1: Install dependencies

En la raiz del proyecto ejecuta

```
yarn
```

## Step 2: Build and run your app

Para ejecutar el proyecto

### Android

# Using Yarn
```
yarn android
```



# INGLES

# Dependencies

## 1. @react-native-async-storage/async-storage

Purpose: Allows storing data locally on the device asynchronously.

Usage: Used to save the list of favorite planets and restore it when the app starts.

## 2. @react-navigation/native

Purpose: The core of React Navigation, used for screen navigation in the app.

Usage: Manages the main navigation of the application.

## 3. @react-navigation/bottom-tabs

Purpose: Provides a bottom navigation bar.

Usage: Used to switch between different sections of the app, such as the planets list and favorites.

## 4. @react-navigation/stack

Purpose: Enables stack (screen stack) navigation within the app.

Usage: Used for transitioning between screens, such as opening a planet's details.

## 5. react-native-fast-image

Purpose: Provides an optimized solution for loading and handling images in React Native.

Usage: Used to improve performance when loading images of planets.

## 6. react-native-svg

Purpose: Allows rendering SVG graphics in React Native.

Usage: Used to display custom icons within the application.

# Structure

The app structure was based on the required views: a home screen displaying a list of planets, allowing users to search for a specific planet and mark it as a favorite.

A tab-based navigation system was implemented to switch between the main views: the planets list (home) and the favorites list.

Initially, useContext was used to manage state globally within the app. Later, Async Storage was added to ensure favorite planets persist even after closing the app.

The main planets list was manually created since no API provided the necessary data.

The API https://api.api-ninjas.com/v1/planets was used to fetch detailed information for each planet. However, as it only provides data and no images, the planet image in the details view is the same as in the planet list card.

# ESPAÑOL

# Dependencias

## 1. @react-native-async-storage/async-storage

Propósito: Permite almacenar datos localmente en el dispositivo de manera asíncrona.

Uso: La utilizo para guardar la lista de planetas favoritos y restaurarla cuando se inicia la aplicación y así tener permanencia de los datos.

## 2. @react-navigation/native

Propósito: Se utiliza para la navegación entre pantallas en la app.

Uso: Gestión de la navegación principal de la aplicación.

## 3. @react-navigation/bottom-tabs

Propósito: Proporciona una barra de navegación en la parte inferior de la pantalla.

Uso: Se utiliza para cambiar entre las diferentes secciones de la app, como la lista de planetas y favoritos.

## 4. @react-navigation/stack

Propósito: Permite la navegación tipo stack dentro de la app.

Uso: Se usa para la transición entre pantallas, como al abrir los detalles de un planeta.

## 5. react-native-fast-image

Propósito: Proporciona una solución optimizada para cargar y manejar gift.

Uso: La utilizo para poder usar gift en la aplicación, aunque sirve para mejorar el rendimiento de las imagenes de la app.

## 6. react-native-svg

Propósito: Permite crear SVG como componentes.

Uso: Lo use para crear iconos personalizados en la app.

# Estructura

Para la estructura la de la app me base en las vistas que debía realizar, un home donde tenga una lista de planetas y puedas buscar el planeta de tu gusto, además de poder agregarlo como favorito

Decidí que manejaria una navegacion por taps entre las principales vistas que vendria siendo la lista planetas(home) y la lista de favoritos(favorites)

Para guardar la información en un principio solo utilice useContext y así poder tenerla en cualquier parte de la app, luego quise que los datos de favoritos tuviese permanencia y agregue el uso de async storage

La lista de planetas principales la busque y cree ya que no habia una api donde me trajera lo que necesitaba

Utilice **https://api.api-ninjas.com/v1/planets** para traer el detalle de cada planeta, como solo me trae datos y ninguna imagen, la imagen en el detalle es la misma que en la card de la lista de planetas




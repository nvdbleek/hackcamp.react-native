# HackJam 4: React Native Maps
## Introduction
During this HackJam you'll learn how to use [React Native Maps](https://github.com/airbnb/react-native-maps), a library made by the awesome engineering team at [Airbnb](https://github.com/airbnb)

## Getting Started
```bash
git clone https://github.com/hackages/hackcamp.react-native.git
git checkout hackjam-4
yarn # Or npm install if you're one of those people ... Just kidding ;-)

# It is recommended to launch the app using the EXPO XDE
# You can start it with the command below if you dont want to use it
yarn ios # or yarn android
```

## Todos:
### Order of the todos
There's no real order to respect for the todos but it's important to do the steps 1 2 and 3 before moving to something else.
### Rendering the Map Component
If you open `screens/map/MapScreen` you are going to find a component called MapScreen.
If you're reading this then your component is probably pretty empty, your goal for this first todo is to render a Map on the screen, that's it.

Doc: [https://github.com/airbnb/react-native-maps](https://github.com/airbnb/react-native-maps)

### Rendering the trucks
The MapScreen component is receiving an array of truck in its props. 
Each truck has a coordinate object containing a latitude and a longitude, use this object to display Markers on the map

Doc: [https://github.com/airbnb/react-native-maps/blob/master/docs/marker.md](https://github.com/airbnb/react-native-maps/blob/master/docs/marker.md)
### Custom Makers
Your trucks should each have an *image*, in the same file as your component you can find an array of images, each truck has an index that you can use to select an image in that array.
You should give your truck a *title* aswell, the title is used to display informations when the user clicks on the marker.
 
### Animate the markers
To do this your markers should use the class MapView.Marker.Animated, you should also give each of your truck an animated region, the easiest way to do this is to create an higher order component that'll update the trucks that you receive in your props with an animated region
You can find an example [here](https://github.com/airbnb/react-native-maps/blob/master/example/examples/AnimatedMarkers.js) on how to animate markers.
If you don't know how to write an higher order component you can find an example in the same file as your MapScreen, there's a constant called "exampleHigherOrder".

Decorators are activated, you can use them ;-)

### Draw a line behind the trucks
Use the doc found [here](https://github.com/airbnb/react-native-maps/blob/master/docs/polyline.md) to draw your polylines.
This one is really easy, you just give an array of coordinates and it'll draw a polyline that follow the coordinates.

[spoiler](https://gist.github.com/anonymous/5765fa68c620e37fe02c46cbfae9c997)

### Fit the map to the provided trucks coordinates
Have the map always display all the trucks by fitting the map size to the provided trucks

[hint](https://github.com/airbnb/react-native-maps/blob/master/example/examples/FitToCoordinates.js)

### Pick an example from the doc!
You can find a lot of examples of differnet usage of the map [here](https://github.com/airbnb/react-native-maps/tree/master/example/examples), just pick one and implement it ;)

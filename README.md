# Hackjam 3
## Advanced Redux
In this app you will focus on async actions, websockets, local vs remote.
## First things first
We changed the way the app keeps track of the active trucks.

In hackjam-2 you had an "active" property on the trucks.

We now want this key to be local only, to make things easier
<br /> We created a reducer that tracks the active trucks in the app.

Basically, the data structure used to be:
```JavaScript
const reduxState = {
    // Trucks reducer
    trucks: [
        uuid: 'fdfk3232--'
        name: 'Truck 1',
        active: false
    ]
}
```

It's now
```JavaScript
const reduxState = {
    // Trucks reducer
    trucks: [
        uuid: 'fdfk3232--',
        name: 'Truck 1'
    ], 
    // Active trucks reducer
    activeTrucks: {
        'fdfk3232--': true
    } 
}
```

### TODO
```bash
yarn test
# Edit src/reducers/activeTrucks.ts to make the tests pass
```

## Onto the next one
In this second part of the hackjam-3 you'll have to implement all the 
<br />async actions aswell as the websocket component
```bash
yarn
yarn build
# Open Expo sdk to run your app on your device or the emulator
```

### TODO
- Make the red screen of death go away
- Open src/actions/trucks.ts and implement the TODOS
- Open src/components/TruckSocket.tsx and implement the TODOS
- Open src/store/store.ts and implement the TODOS
- Open src/screens/TruckList/Footer.tsx implement the TODOS

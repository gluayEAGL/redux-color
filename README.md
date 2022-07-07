npm i redux / react-redux / @redux toolkit --

index.js
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

```
const store = configureStore({
  reducer: {},
});
```

```
<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
```

```
import { useSelector } from "react-redux";
```

- gets values from the hook - state

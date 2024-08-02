import { configureStore } from "@reduxjs/toolkit"
import persistedReducers from "./root-reducer"
import persistStore from "redux-persist/es/persistStore"

export const store = configureStore({
    reducer: persistedReducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export const persistor = persistStore(store);
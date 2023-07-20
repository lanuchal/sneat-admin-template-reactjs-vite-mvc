import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './MenuSlice'
import MenuStateSlice from './MenuStateSlice'

export const Store = configureStore({
    reducer: {
        menuStore: menuSlice,
        menuStateStore: MenuStateSlice,
    },
})
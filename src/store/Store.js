import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './MenuSlice'

export const Store = configureStore({
    reducer: {
        menuStore: menuSlice,
    },
})
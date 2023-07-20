import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dashboard: true,
  layout: {
    status: false,
    data: {
      widthout_menu: false,
      widthout_nav: false,
      container: false,
      fluid: false,
      blank: false
    }
  },
  account: {
    status: false,
    data: {
      account: false,
      notification: false,
      connection: false
    }
  },
  auth: {
    status: false,
    data: {
      login: false,
      register: false,
      forget_pass: false
    }
  },
  misc: {
    status: false,
    data: {
      error: false,
      maintenance: false
    }
  },
  card: false,
  ui: false,
  eui: false,
  icons: false,
  forme: false,
  forml: false,
  tables: false
}

export const MenuStateSlice = createSlice({
  name: 'menuStateStore',
  initialState,
  reducers: {
    active: (state, action) => {
      const { key } = action.payload;
      // ตั้งค่า key ที่รับมาเป็น true
      state[key] = true;
      // ตั้งค่าที่เหลือทั้งหมดเป็น false
      Object.keys(state).forEach((menuKey) => {
        if (menuKey !== key) {
          state[menuKey] = false;
        }
      });
    },
  },
})

// Action creators are generated for each case reducer function
export const { active } = MenuStateSlice.actions

export default MenuStateSlice.reducer
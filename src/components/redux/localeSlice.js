import { createSlice } from '@reduxjs/toolkit';

export const localeSlice = createSlice({
  name: 'locale',
  initialState: {
    lang: 'ua',
  },
  reducers: {
    changeLang(state, action) {
      state.lang = action.payload;
    },
  },
  // goo: {
  //   reducer(state, action) {},
  //   prepare(x) {
  //     return {
  //       payload: {
  //         value: x,
  //       },
  //     };
  //   },
  // }, --- Якщо потрібно змінити payload
});
// export const { changeLang,goo } = localeSlice.actions;
export const { changeLang } = localeSlice.actions;
export const localeReducer = localeSlice.reducer;
//
//
//
//
//
//                      Redux (vanila)
// const initialState = {
//   lang: 'ua',
// };

// export const localeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'locale/changeLang':
//       return {
//         ...state,
//         lang: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const changeLang = newLang => {
//   return {
//     type: 'locale/changeLang',
//     payload: newLang,
//   };
// };

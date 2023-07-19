import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    balance: 0,
  },
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
  },
});

export const { deposit, withdraw } = accountSlice.actions;
export const accountReducer = accountSlice.reducer;
//
//
//
//
//
//               createAction + createReducer
// import { createAction, createReducer } from '@reduxjs/toolkit';

// export const deposit = createAction('account/deposit');
// export const withdraw = createAction('account/withdraw');

// const accInitialState = {
//   balance: 0,
// };

// export const accountReducer = createReducer(accInitialState, builder =>
//   builder
//     .addCase(deposit, (state, action) => {
//       state.balance += action.payload;
//     })
//     .addCase(withdraw, (state, action) => {
//       state.balance -= action.payload;
//       // return {
//       //   ...state,
//       //   balance: state.balance - action.payload,
//       // };
//     })
// );

// // export const withdraw = createAction('account/withdraw', x => {
// //   return {
// //     payload: {
// //       value: x,
// //     },
// //   };
// // });
// // console.log(withdraw(5)); --- Якщо потрібно змінити payload
//
//
//
//
//
//                        Redux (vanila)
// const accInitialState = {
//   balance: 0,
// };

// export const accountReducer = (state = accInitialState, action) => {
//   switch (action.type) {
//     case 'account/deposit':
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//       };
//     case 'account/withdraw':
//       return {
//         ...state,
//         balance: state.balance - action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const deposit = value => {
//   return {
//     type: 'account/deposit',
//     payload: value,
//   };
// };

// export const withdraw = value => {
//   return {
//     type: 'account/withdraw',
//     payload: value,
//   };
// };

import { createSlice, nanoid} from '@reduxjs/toolkit';

const groceriesSlice = createSlice({
    name: 'groceries',
    initialState: [],
    reducers: {
        addGrocery: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare({ name, quantity, category }) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        quantity,
                        category,
                        bought: false,
                    }
                };
            }
        },
        toggleBought(state, action) {
            const grocery = state.find(item => item.id === action.payload);
            if (grocery) grocery.bought = !grocery.bought;
        },
        deleteGrocery(state, action) {
            return state.filter(item => item.id !==action.payload);
        }
    }
});

export const { addGrocery, toggleBought, deleteGrocery } = groceriesSlice.actions;
export default groceriesSlice.reducer;
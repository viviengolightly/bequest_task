import { v4 as uuid } from 'uuid';

export const addressReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ADDRESS':
            return [...state, {
                id: uuid(),
                lineOne: action.address.lineOne,
                lineTwo: action.address.lineTwo,
                lineThree: action.address.lineThree,
                postcode: action.address.postcode,
                town: action.address.town,
                country: action.address.country,
            }];
        case 'REMOVE_ADDRESS':
            return state.filter(address => address.id !== action.id);
        case 'CLEAR_ADDRESSES':
            return [];
        default:
            return state;
    }
};
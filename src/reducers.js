import {
    CREATE_HERO,
    REMOVE_HERO,
    LOAD_HEROES_IN_PROGRESS,
    LOAD_HEROES_SUCCESS,
    LOAD_HEROES_FAILURE,
} from './actions';

const initialState = { isLoading: false, data: [] };

export const heroes = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_HERO: {
        const { hero } = payload;
        return {
            ...state,
            data: state.data.concat(hero),
        };
    }
    case REMOVE_HERO: {
        const { hero: heroToRemove } = payload;
        return {
            ...state,
            data: state.data.filter(hero => hero.id !== heroToRemove.id),
        };
    }
    case LOAD_HEROES_SUCCESS: {
        const { heroes } = payload;
        return {
            ...state,
            isLoading: false,
            data: heroes,
        };
    }
    case LOAD_HEROES_IN_PROGRESS:
        return {
            ...state,
            isLoading: true,
        }
    case LOAD_HEROES_FAILURE:
        return {
            ...state,
            isLoading: false,
        }
    default:
        return state;
    }
}
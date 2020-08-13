import {
    CREATE_HERO,
    REMOVE_HERO,
    LOAD_HEROES_IN_PROGRESS,
    LOAD_HEROES_SUCCESS,
    LOAD_HEROES_FAILURE,
    LOAD_ALL_IN_PROGRESS,
    LOAD_ALL_SUCCESS,
    LOAD_ALL_FAILURE,
    MARK_HERO_AS_ACTIVE,
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
    case MARK_HERO_AS_ACTIVE: {
        const { hero: updatedHero } = payload;
        return {
            ...state,
            data: state.data.map(hero => {
                if (hero.id === updatedHero.id) {
                    return updatedHero;
                }
                return hero;
            }),
        };
    }
    case REMOVE_HERO: {
        const { hero: heroToRemove } = payload;
        return {
            ...state,
            data: state.data.filter(hero => hero.id !== heroToRemove.id),
        };
    }
    case LOAD_ALL_SUCCESS: {
        const { heroes } = payload;
        return {
            ...state,
            isLoading: false,
            data: heroes,
        };
    }
    case LOAD_ALL_IN_PROGRESS:
        return {
            ...state,
            isLoading: true,
        }
    case LOAD_ALL_FAILURE:
        return {
            ...state,
            isLoading: false,
        }
    default:
        return state;
    }
}
export const CREATE_HERO = 'CREATE_HERO';
export const createHero = hero => ({
    type: CREATE_HERO,
    payload: { hero },
});

export const REMOVE_HERO = 'REMOVE_HERO';
export const removeHero = hero => ({
    type: REMOVE_HERO,
    payload: { hero },
});

export const LOAD_HEROES_IN_PROGRESS = 'LOAD_HEROES_IN_PROGRESS';
export const loadHeroesInProgress = () => ({
    type: LOAD_HEROES_IN_PROGRESS,
});

export const LOAD_HEROES_SUCCESS = 'LOAD_HEROES_SUCCESS';
export const loadHeroesSuccess = heroes => ({
    type: LOAD_HEROES_SUCCESS,
    payload: { heroes },
});

export const LOAD_HEROES_FAILURE = 'LOAD_HEROES_FAILURE';
export const loadHeroesFailure = () => ({
    type: LOAD_HEROES_FAILURE,
});
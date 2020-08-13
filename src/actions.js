export const CREATE_HERO = 'CREATE_HERO';
export const createHero = hero => ({
    type: CREATE_HERO,
    payload: { hero },
});

export const MARK_HERO_AS_ACTIVE = 'MARK_HERO_AS_ACTIVE';
export const markHeroAsActive = hero => ({
    type: MARK_HERO_AS_ACTIVE,
    payload: { hero },
})

export const REMOVE_HERO = 'REMOVE_HERO';
export const removeHero = hero => ({
    type: REMOVE_HERO,
    payload: { hero },
});
// load all heroes and villains
export const LOAD_ALL_IN_PROGRESS = 'LOAD_ALL_IN_PROGRESS';
export const loadAllInProgress = () => ({
    type: LOAD_ALL_IN_PROGRESS,
});

export const LOAD_ALL_SUCCESS = 'LOAD_ALL_SUCCESS';
export const loadAllSuccess = all => ({
    type: LOAD_ALL_SUCCESS,
    payload: { all },
});

export const LOAD_ALL_FAILURE = 'LOAD_ALL_FAILURE';
export const loadAllFailure = () => ({
    type: LOAD_ALL_FAILURE,
});

// loads just the villains
export const LOAD_VILLAINS_IN_PROGRESS = 'LOAD_VILLAINS_IN_PROGRESS';
export const loadVillainsInProgress = () => ({
    type: LOAD_VILLAINS_IN_PROGRESS,
});

export const LOAD_VILLAINS_SUCCESS = 'LOAD_VILLAINS_SUCCESS';
export const loadVillainsSuccess = villains => ({
    type: LOAD_VILLAINS_SUCCESS,
    payload: { villains },
});

export const LOAD_VILLAINS_FAILURE = 'LOAD_VILLAINS_FAILURE';
export const loadVillainsFailure = () => ({
    type: LOAD_VILLAINS_FAILURE,
});


// loads just the heroes
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
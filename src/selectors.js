import { createSelector } from 'reselect';

export const getAllSupers = state => state.heroes.data;

export const getSuperHeroesLoading = state => state.heroes.isLoading;

export const getAllHeroes = createSelector(
    getAllSupers,
    (heroes) => heroes.filter(hero => hero.type === 'hero'),
)

export const getAllVillains = createSelector(
    getAllSupers,
    (villains) => villains.filter(villain => villain.type === 'villain'),
)

export const getInactiveHeroes = createSelector(
    getAllHeroes,
    (heroes) => heroes.filter(hero => !hero.isActive),
);

export const getActiveHeroes = createSelector(
    getAllHeroes,
    (heroes) => heroes.filter(hero => hero.isActive),
);

export const getInactiveVillains = createSelector(
    getAllVillains,
    (heroes) => heroes.filter(hero => !hero.isActive),
);

export const getActiveVillains = createSelector(
    getAllVillains,
    (heroes) => heroes.filter(hero => hero.isActive),
);
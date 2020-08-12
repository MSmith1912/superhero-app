import { createSelector } from 'reselect';

export const getSuperHeroes = state => state.heroes.data;
export const getSuperHeroesLoading = state => state.heroes.isLoading;

export const getInactiveHeroes = createSelector(
    getSuperHeroes,
    (heroes) => heroes.filter(hero => !hero.isActive),
);

export const getActiveHeroes = createSelector(
    getSuperHeroes,
    (heroes) => heroes.filter(hero => hero.isActive),
);
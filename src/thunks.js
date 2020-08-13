import { createHero, removeHero, markHeroAsActive, 
        loadHeroesInProgress, loadHeroesSuccess, loadHeroesFailure,
        loadVillainsInProgress, loadVillainsSuccess, loadVillainsFailure, 
        loadAllInProgress, loadAllSuccess, loadAllFailure  } from './actions';


export const loadAll = () => async (dispatch, getState) => {
    try {
        dispatch(loadAllInProgress());
        const response = await fetch('http://localhost:8080/heroes');
        const all = await response.json();

        dispatch(loadAllSuccess(all));
    } catch(err) {
        dispatch(loadAllFailure())
        dispatch(displayAlert(err));
    }
}

export const loadHeroes = () => async (dispatch, getState) => {
    try {
        dispatch(loadHeroesInProgress());
        const response = await fetch('http://localhost:8080/heroes');
        const heroes = await response.json();
    
        dispatch(loadHeroesSuccess(heroes));
    } catch (err) {
        dispatch(loadHeroesFailure());
        dispatch(displayAlert(err));
    }
}

export const addSuperHeroRequest = text => async dispatch => {
    try {
        const body = JSON.stringify({text});
        const response = await fetch(`http://localhost:8080/heroes`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'post',
        body,
    });
    const hero = await response.json();
    dispatch(createHero(hero));
    }
    catch(err) {
        dispatch(displayAlert(err));
    }
}

export const markHeroAsActiveRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/heroes/${id}/active`, {
            method: 'post'
        });
        const updatedHero = await response.json();
        dispatch(markHeroAsActive(updatedHero));
    } catch(err) {
        dispatch(displayAlert(err));
    }
}

export const removeHeroRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/heroes/${id}`,{
            method: 'delete'
        });
        const removedHero = await response.json();
        dispatch(removeHero(removedHero));
    } catch(err) {
        dispatch(displayAlert(err));
    }
}

export const displayAlert = text => () => {
    alert(text);
};

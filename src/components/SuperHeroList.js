import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SuperHeroItem from '../components/SuperHeroItem';
import { getSuperHeroesLoading, getActiveHeroes, getInactiveHeroes, getActiveVillains, getInactiveVillains } from '../selectors';
import { loadAll, loadHeroes, removeHeroRequest, markHeroAsActiveRequest } from '../thunks';

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;

const SuperHeroList = ({ activeHeroes, inactiveHeroes, activeVillains, inactiveVillains, onRemovePressed, onActivePressed, 
                        isLoading, startLoadingSuperHeroes }) => {
                            useEffect(() => {
                                startLoadingSuperHeroes();
                            }, []);
        const loadingMessage = <div>Loading SuperHeroes...</div>;
        const content = (
            <ListWrapper>
                <div className="superhero-list">
                    <h2>Super Hero List</h2>
                    <h3>Active</h3>
                    {activeHeroes.map(hero => <SuperHeroItem
                        key={hero.id}
                        hero={hero}
                        onRemovePressed={onRemovePressed}
                        onActivePressed={onActivePressed}
                        />)}
                    <h3>Inactive</h3>
                    {inactiveHeroes.map(hero => <SuperHeroItem
                        key={hero.id}
                        hero={hero}
                        onRemovePressed={onRemovePressed}
                        onActivePressed={onActivePressed}
                        />)}
                </div>

                <div className="villian-list">
                    <h2>Villian List</h2>
                    <h3>Active</h3>
                        {activeVillains.map(hero => <SuperHeroItem
                            key={hero.id}
                            hero={hero}
                            onRemovePressed={onRemovePressed}
                            onActivePressed={onActivePressed}
                            />)}
                        <h3>Inactive</h3>
                        {inactiveVillains.map(hero => <SuperHeroItem
                            key={hero.id}
                            hero={hero}
                            onRemovePressed={onRemovePressed}
                            onActivePressed={onActivePressed}
                            />)}
                </div>
            </ListWrapper>
        );
        return isLoading ? loadingMessage : content;

};

const mapStateToProps = state => ({
    isLoading: getSuperHeroesLoading(state),
    activeVillains: getActiveVillains(state),
    inactiveVillains: getInactiveVillains(state),
    activeHeroes: getActiveHeroes(state),
    inactiveHeroes: getInactiveHeroes(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingSuperHeroes: () => dispatch(loadAll()),
    onRemovePressed: id => dispatch(removeHeroRequest(id)),
    onActivePressed: id => dispatch(markHeroAsActiveRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SuperHeroList);
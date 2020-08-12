import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SuperHeroItem from '../components/SuperHeroItem';
import { getSuperHeroesLoading, getActiveHeroes, getInactiveHeroes } from '../selectors';
import { loadHeroes, removeHeroRequest } from '../thunks';

const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;

const SuperHeroList = ({ activeHeroes, inactiveHeroes, onRemovePressed, 
                        isLoading, startLoadingSuperHeroes }) => {
                            useEffect(() => {
                                startLoadingSuperHeroes();
                            }, []);
        const loadingMessage = <div>Loading SuperHeroes...</div>;
        const content = (
            <ListWrapper>
                <h2>Super Hero List</h2>
                <h3>Active</h3>
                {activeHeroes.map(hero => <SuperHeroItem
                    hero={hero}
                    onRemovePressed={onRemovePressed}
                    />)}
                <h3>Inactive</h3>
                {inactiveHeroes.map(hero => <SuperHeroItem
                    hero={hero}
                    onRemovePressed={onRemovePressed}
                    />)}
            </ListWrapper>
        );
        return isLoading ? loadingMessage : content;

};

const mapStateToProps = state => ({
    isLoading: getSuperHeroesLoading(state),
    activeHeroes: getActiveHeroes(state),
    inactiveHeroes: getInactiveHeroes(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingSuperHeroes: () => dispatch(loadHeroes()),
    onRemovePressed: id => dispatch(removeHeroRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SuperHeroList);
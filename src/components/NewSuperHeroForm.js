import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getAllSupers } from '../selectors';
import { addSuperHeroRequest } from '../thunks';

const FormContainer = styled.div`
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 8px grey;
`;

const NewSuperHeroInput = styled.input`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #ddd;
    border-radius: 8px;
    width: 70%;
    outline: none;
`;

const NewSuperHeroButton = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    margin-left: 8px;
    width: 20%;
    background-color: #22ee22;
`;

const NewSuperHeroForm = ({ superHeroes, onCreatePressed }) => {
    const [ text, setText ] = useState('');
    const [ type, setType ] = useState('');
    const [ species, setSpecies ] = useState('');
    const [ powers, setPowers ] = useState('');
    const [ powerLevel, setPowerLevel ] = useState('');

    const body = {
        text,
        type,
        species,
        powers,
        powerLevel
    }

    return (
        <FormContainer>
            <NewSuperHeroInput type="text" value={text} onChange={e => setText(e.target.value)} placeholder="type name here"/>
            <NewSuperHeroInput type="text" value={type} onChange={e => setType(e.target.value)} placeholder="type type here"/>
            <NewSuperHeroInput type="text" value={species} onChange={e => setSpecies(e.target.value)} placeholder="type species here"/>
            <NewSuperHeroInput type="text" value={powers} onChange={e => setPowers(e.target.value)} placeholder="type powers here"/>
            <NewSuperHeroInput type="text" value={powerLevel} onChange={e => setPowerLevel(e.target.value)} placeholder="type power level here"/>
            <NewSuperHeroButton onClick={() => {
                const dupName = superHeroes.some(superHero => superHeroes.name === text);
                if (!dupName) {
                    onCreatePressed(body);
                        setText('');
                    setType('');
                    setSpecies('');
                    setPowers('');
                    setPowerLevel('');
                }
            }}>Create Super Hero</NewSuperHeroButton>
        </FormContainer>
    );
};

const mapStateToProps = state => ({
    superHeroes: getAllSupers(state),
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: body => dispatch(addSuperHeroRequest(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewSuperHeroForm);
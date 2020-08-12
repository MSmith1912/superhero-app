import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getSuperHeroes } from '../selectors';
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
    const [ name, setName ] = useState('');
    const [ powers, setPowers ] = useState('');
    const [ powerLevel, setPowerLevel ] = useState('');

    return (
        <FormContainer>
            <NewSuperHeroInput type="text" value={name} onChange={e => setName(e.target.value)} placeholder="type name here"/>
            <NewSuperHeroInput type="text" value={powers} onChange={e => setPowers(e.target.value)} placeholder="type powers here"/>
            <NewSuperHeroInput type="text" value={powerLevel} onChange={e => setPowerLevel(e.target.value)} placeholder="type power level here"/>
            <NewSuperHeroButton onClick={() => {
                const dupName = superHeroes.some(superHero => superHeroes.name === name);
                if (!dupName) {
                    onCreatePressed(name, powers, powerLevel);
                    setName('');
                    setPowers('');
                    setPowerLevel('');
                }
            }}>Create Super Hero</NewSuperHeroButton>
        </FormContainer>
    );
};

const mapStateToProps = state => ({
    superHeroes: getSuperHeroes(state),
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addSuperHeroRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewSuperHeroForm);
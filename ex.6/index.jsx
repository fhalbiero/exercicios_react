import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';


ReactDOM.render(
    <Family lastName="Albiero">
        <Member name="Fabio"/>
        <Member name="Vanessa"/> /**Erro */
    </Family>
, document.getElementById("app"));



import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';


ReactDOM.render(
    <Family lastName="Albiero">
        <Member name="Fabio Henrique"/>
        <Member name="Vanessa Maria"/>
        <Member name="Ian Henrique"/>
        <Member name="Cauã Henrique"/>
        <Member name="Emilly"/>
        <Member name="Enzo Henrique"/>
    </Family>
, document.getElementById("app"));



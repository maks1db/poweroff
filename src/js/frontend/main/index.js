import React from 'react';
import ContentIco from 'material-ui/svg-icons/action/power-settings-new';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import api from '../api';

const style = {
    marginTop:'40px'
}
export default class Index extends React.Component{
    constructor(){
        super();
        document.title = 'Выключание домашнего сервера';
    }

    render(){
        return (
            <div style={{textAlign:'center'}}>
                <h2>{document.title}</h2>

                <FloatingActionButton 
                    onTouchTap={()=>api.poweroff()}
                    secondary={true} 
                    style={style}>
                    <ContentIco />
                </FloatingActionButton>
            </div>
        )
    }
}

import React, { useContext, FunctionComponent } from 'react';
import { StateContext } from '../contexts/StateContex';
import '../styles/toggleFormStyle.css';

const ToggleForm:FunctionComponent = () => {
    const { checked, dispatch } = useContext(StateContext);
    const handleToggle = () => {
        dispatch({
            type: 'TOGGLE_CHECKED',
            checked,
        });
    };
    return ( 
        <div className="toggle">
            {checked ? 
                (<p className="lbl">Toggle to type in the address manually ...</p>) :
                (<p className="lbl">Toggle to find address by postcode...</p>)
            }
            <label className="switch">
                <input type="checkbox" checked={checked} onChange={handleToggle} />
                <span className="slider round"></span>
            </label>
        </div>
     );
}
 
export default ToggleForm;
import React, { useContext, useState, FunctionComponent } from 'react';
import { AddressContext } from '../contexts/AddressContext';
import { StateContext } from '../contexts/StateContex';
import FetchedAddresses from './FetchedAddresses';
import '../styles/addressFormStyle.css';

const AddressForm:FunctionComponent = () => {
    const { checked } = useContext(StateContext);
    const { countries, dispatch } = useContext(AddressContext);
    const [ lineOne, setLineOne ] = useState('');
    const [ lineTwo, setLineTwo ] = useState('');
    const [ lineThree, setLineThree ] = useState('');
    const [ postcode, setPostcode ] = useState('');
    const [ town, setTown ] = useState('');
    const [ country, setCountry ] = useState('');
    const [ error, setError ] = useState(false);
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if(validateInput(lineOne) && validateInput(postcode) && validateInput(town) && validateInput(country)){

            dispatch({
                type: 'ADD_ADDRESS',
                address: {
                    lineOne, lineTwo, lineThree, postcode, town, country
                }
            });
            setLineOne('');
            setLineTwo('');
            setLineThree('');
            setPostcode('');
            setTown('');
            setCountry('');
        } else {
            setError(true);
        }
    };

    const validateInput = (value: string): boolean => {
        if(value.length !== 0 && value !== ''){
            return true;
        }
        return false;
    };
    

    return checked ? (
        <FetchedAddresses />
    ) : ( 
        <form onSubmit={handleSubmit}>
            <label className="required lbl">Line one:</label>
            <input type="text" placeholder="Line one" value={lineOne} onChange={(e) => setLineOne(e.target.value)} />
            <label className="lbl">Line two:</label>
            <input type="text" placeholder="Line two" value={lineTwo} onChange={(e) => setLineTwo(e.target.value)} />
            <label className="lbl">Line three:</label>
            <input type="text" placeholder="Line three" value={lineThree} onChange={(e) => setLineThree(e.target.value)} />
            <label className="required lbl">Postcode:</label>
            <input type="text" placeholder="Postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)} />
            <label className="required lbl">Town:</label>
            <input type="text" placeholder="Town" value={town} onChange={(e) => setTown(e.target.value)} />
            <label className="required lbl">Country:</label>
            <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} list="countryList" />
            <datalist id="countryList">
                {countries.map((country: { name: string; id: string | number; }) => {
                    return(
                        <option value={country.name} key={country.id}>{country.name}</option>
                    );
                })}
            </datalist>
            {error &&
                <div className="error">ERROR: Fill up all the required fields: Line one, Postcode, Town and Country!</div>
            }
            <input type="submit" value="ADD ADDRESS" className="btn" />
        </form>
     );
}
 
export default AddressForm;
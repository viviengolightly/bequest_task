import React, { useState, useContext, FunctionComponent } from 'react';
import AddressDetails from './AddressDetails';
import { AddressContext } from '../contexts/AddressContext';
import { v4 as uuid } from 'uuid';
import '../styles/addressesListStyle.css';
import '../styles/addressFormStyle.css';



const FetchedAddresses:FunctionComponent = () => {
    const { fetchedAddresses, fetchedDispatch, dispatch } = useContext(AddressContext);
    const [postcode, setPostcode] = useState('');
    const [error, setError] = useState(null);
    const updateVar = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        fetchedDispatch({ type: 'CLEAR_ADDRESSES'});
        fetch(`https://api.getAddress.io/find/${postcode}?api-key=jXxbCExmc0-4t6-HasWh0w29873`)
            .then(response => response.json())
            .then(data => mapFetchedData(data))
            .catch(error => setError(error));
    }

    const addAddress = (address: {
        id: string, 
        lineOne:string, 
        lineTwo:string, 
        lineThree:string, 
        postcode: string, 
        town: string, 
        country: string   
    }): void => {
        dispatch({ 
            type: 'ADD_ADDRESS', 
            address: {
                id: address.id,
                lineOne: address.lineOne,
                lineTwo: address.lineTwo,
                lineThree: address.lineThree,
                postcode: address.postcode,
                town: address.town,
                country: address.country,
            }
        });
        
        fetchedDispatch({
            type: 'REMOVE_ADDRESS',
            id: address.id
        });
    };

    const mapFetchedData = (data: { addresses: any[]; }): void => {
        data.addresses.forEach((ele: string) => {
            let id: string = uuid();
            let addArr = ele.split(',');
            fetchedDispatch({ 
                type: 'ADD_ADDRESS', 
                address: {
                    id: id,
                    lineOne: addArr[0],
                    lineTwo: addArr[1],
                    lineThree: addArr[2],
                    postcode: postcode,
                    town: addArr[5],
                    country: 'United Kingdom',
                }
            })  
        });
    }

    return ( 
        <div>
            <form>
                <label className="lbl">Postcode:</label>
                <input type="text" placeholder="Postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)} />
                <button onClick={updateVar} className="btn" >Search</button>
            </form>
            <div className="address-list">
                <ul>
                    {fetchedAddresses &&
                        <React.Fragment>
                            {fetchedAddresses.map((address: { lineOne: string; lineTwo: string; lineThree: string; postcode: string; town: string; country: string; id: string; }) => {
                                return(
                                    <AddressDetails 
                                        lineOne={address.lineOne} 
                                        lineTwo={address.lineTwo} 
                                        lineThree={address.lineThree} 
                                        postcode={address.postcode} 
                                        town={address.town} 
                                        country={address.country} 
                                        key={address.id} 
                                        dispatch={() => addAddress(address)}
                                    />
                                );
                            })}
                        </React.Fragment>
                    }
                    <React.Fragment>
                        {error &&
                            <div className="lbl">
                                No addresses for this input ...
                            </div>
                        }
                    </React.Fragment>
                </ul>
            </div>
        </div>
     );
}
 
export default FetchedAddresses;
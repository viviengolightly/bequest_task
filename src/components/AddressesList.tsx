import React, { useContext, FunctionComponent } from 'react';
import { AddressContext } from '../contexts/AddressContext';
import AddressDetails from './AddressDetails';
import '../styles/addressesListStyle.css';

const AddressList:FunctionComponent = () => {
    const { addresses, dispatch } = useContext(AddressContext);
    return addresses.length ? ( 
        <div className="address-list" >
            <ul>
                {addresses.map((address: { lineOne: string; lineTwo: string; lineThree: string; postcode: string; town: string; country: string; id: string | number; }) => {
                    return(
                        <AddressDetails 
                            lineOne={address.lineOne} 
                            lineTwo={address.lineTwo} 
                            lineThree={address.lineThree} 
                            postcode={address.postcode} 
                            town={address.town} 
                            country={address.country} 
                            key={address.id} 
                            dispatch={() => dispatch({ type: 'REMOVE_ADDRESS', id: address.id })}
                        />
                    );
                })}
            </ul>
        </div>
     ) : (
         <div className="empty">
             Address book is empty. 
         </div>
     );
}
 
export default AddressList;
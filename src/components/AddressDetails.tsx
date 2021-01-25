import React, { FunctionComponent } from 'react';

type AddressDetailsProps = {
    lineOne: string,
    lineTwo: string,
    lineThree: string,
    postcode: string,
    town: string,
    country: string,
    dispatch: () => void,
}

export const AddressDetails: FunctionComponent<AddressDetailsProps> = ({ lineOne, lineTwo, lineThree, postcode, town, country, dispatch }) => 
    <li onClick={dispatch} data-test="button">
        <div className="line" data-test="lineOne" >{lineOne}</div>
        <div className="line" data-test="lineTwo" >{lineTwo}</div>
        <div className="line" data-test="lineThree" >{lineThree}</div>
        <div className="line" data-test="postcode" >{postcode}</div>
        <div className="line" data-test="town" >{town}</div>
        <div className="line" data-test="country" >{country}</div>
    </li>

 
export default AddressDetails;
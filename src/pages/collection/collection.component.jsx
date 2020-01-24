import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
    console.log(match.params);
    return (
        <div className='collection-page'>
            <h1>Collection Page</h1>
        </div>
    );
};

export default CollectionPage;
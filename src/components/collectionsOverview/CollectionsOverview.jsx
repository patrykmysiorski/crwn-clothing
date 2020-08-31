import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectShopCollections} from "../../redux/shop/shopSelectors";
import CollectionPreview from "../previewCollection/CollectionPreview";

const CollectionsOverview = ({collections}) => (
    <div className={'collections-overview'}>
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionsOverview);

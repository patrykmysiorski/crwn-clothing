import React from 'react';
import CollectionsOverview from "../../../components/collectionsOverview/CollectionsOverview";
import {Route} from "react-router-dom";
import CollectionPage from "../../collection/CollectionPage";
import {convertCollectionsSnapshotToMap, firestore} from "../../../firebase/firebase.utils";
import {updateCollections} from "../../../redux/shop/shopActions";
import {connect} from "react-redux";

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections')

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
        })
    }

    render() {
        const {match} = this.props
        return (
            <div className={'shop-page'}>
                <Route exact path={`${match.path}`} component={CollectionsOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);

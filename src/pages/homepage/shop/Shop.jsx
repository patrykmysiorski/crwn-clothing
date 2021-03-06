import React from "react";
import { Route } from "react-router-dom";
import { fetchCollectionsStart } from "../../../redux/shop/shopActions";
import { connect } from "react-redux";
import CollectionsOverviewContainer from "../../../components/collectionsOverview/CollectionsOverviewContainer";
import CollectionsPageContainer from "../../collection/CollectionPageContainer";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className={"shop-page"}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionsPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

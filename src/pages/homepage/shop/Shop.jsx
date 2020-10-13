import React from "react";
import CollectionsOverview from "../../../components/collectionsOverview/CollectionsOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../../collection/CollectionPage";
import { fetchCollectionsStartAsync } from "../../../redux/shop/shopActions";
import { connect } from "react-redux";
import WithSpinner from "../../../components/withSpinner/WithSpinner";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../../redux/shop/shopSelectors";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match, isCollectionFetching } = this.props;
    return (
      <div className={"shop-page"}>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

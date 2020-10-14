import { selectIsCollectionFetching } from "../../redux/shop/shopSelectors";
import WithSpinner from "../withSpinner/WithSpinner";
import CollectionsOverview from "./CollectionsOverview";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;

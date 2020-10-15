import { call, put, takeLatest } from "redux-saga/effects";
import ShopActionTypes from "../../../redux/shop/shopTypes";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../../firebase/firebase.utils";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccessful,
} from "../../../redux/shop/shopActions";

export function* fetchCollectionsAsync() {
  yield console.log("i`m fired");

  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccessful(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

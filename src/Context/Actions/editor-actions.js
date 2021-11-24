import * as actionType from "../ActionTypes/action-types";

const downloadDocumentInit = () => {
  return {
    type: actionType.DOWNLOAD_DOCUMENT_INIT,
  };
};

const downloadDocumentSuccess = (data) => {
  return {
    type: actionType.DOWNLOAD_DOCUMENT_SUCCESS,
    payload: data,
  };
};

const downloadDocumentFail = (data) => {
  return {
    type: actionType.DOWNLOAD_DOCUMENT_FAIL,
    payload: data,
  };
};

const downloadDocument = (dispatch) => {
  dispatch(downloadDocumentInit());
  dispatch(downloadDocumentSuccess());
  dispatch(downloadDocumentFail());
};

export { downloadDocument };

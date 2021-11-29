import * as actionType from "../ActionTypes/action-types";

const _createNewDocument = (name, dispatch) => {
  dispatch({
    type: actionType.CREATE_NEW_DOCUMENT,
    payload: {
      fileName: name,
    },
  });
};

const _uploadDocument = (name, file, dispatch) => {
  dispatch({
    type: actionType.UPLOAD_DOCUMENT,
    payload: {
      fileName: name,
      file: file,
    },
  });
};
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

export { _uploadDocument, _createNewDocument, downloadDocument };

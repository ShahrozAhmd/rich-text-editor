import * as actionType from "../ActionTypes/action-types";

const createNewDocument = () => {
  return {
    type: actionType.CREATE_NEW_DOCUMENT,
  };
};

const uploadDocumentInit = () => {
  return {
    type: actionType.UPLOAD_DOCUMENT_INIT,
  };
};

const uploadDocumentSuccess = (data) => {
  return {
    type: actionType.UPLOAD_DOCUMENT_SUCCESS,
    payload: data,
  };
};

const uploadDocumentFail = (data) => {
  return {
    type: actionType.UPLOAD_DOCUMENT_FAIL,
    payload: data,
  };
};

const uploadDocument = (dispatch) => {
  dispatch(uploadDocumentInit());
  dispatch(uploadDocumentSuccess());
  dispatch(uploadDocumentFail());
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

export { uploadDocument, createNewDocument, downloadDocument };

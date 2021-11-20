import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";

var mammoth = require("mammoth");

const App = ({}) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [uploadedFile, setUploadedFile] = useState("");

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
    "disablePlugins": "powered-by-jodit",
    "height":"100vh",
  };

  useEffect(() => {
    if (uploadedFile !== "") {
      mammoth
        .convertToHtml({ arrayBuffer: uploadedFile })
        .then(function (result) {
          var html = result.value; // The generated HTML
          var messages = result.messages; // Any messages, such as warnings during conversion
          // console.log(html,messages)
          setContent(html);
        })
        .done();
    }
  }, [uploadedFile]);

  const downloadFile = () => {
    var filename = "exportContent";
    var preHtml =
      "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";
    var html2 = preHtml + content + postHtml;

    var blob = new Blob(["\ufeff", html2], {
      type: "application/msword",
    });

    console.log(blob);
    // Specify link url
    var url =
      "data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(html2);
    console.log(url);
    // Specify file name
    filename = filename ? filename + ".doc" : "document.doc";

    // Create download link element
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      // Create a link to the file
      downloadLink.href = url;

      // Setting the file name
      downloadLink.download = filename;

      //triggering the function
      downloadLink.click();
    }

    document.body.removeChild(downloadLink);
  };
  useEffect(() => {
    console.log(content);
  }, [content]);
  return (
    <>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => {
          setContent(newContent);
        }} // preferred to use only this option to update the content for performance reasons
        // onChange={(newContent) => {}}
        // onChange={(newContent) => {setContent(newContent)}}
      />
      <input
        type="file"
        id="myfile"
        name="myfile"
        onChange={(e) => setUploadedFile(e.target.files[0])}
      />
      <button onClick={() => downloadFile()}>Download</button>
    </>
  );
};

export default App;

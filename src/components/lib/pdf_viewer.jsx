// export default Pdf_Viewer;
import * as React from 'react';

const Pdf_Viewer = (props) => {
    const pdf_url = `https://api-docs-studyhacks-v1.onrender.com/files/download/${props?.pdf_id}`
    return (<object data={pdf_url} type="application/pdf" width="100%" height="100%"></object>);
};

export default Pdf_Viewer;

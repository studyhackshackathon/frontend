// import * as React from 'react';

// const Pdf_Viewer = (props) => {
//     console.log(props?.pdf_url)
//     const pdf_url = props?.pdf_url
//     return (
//         <iframe src={`https://docs.google.com/gview?url=${pdf_url}&embedded=true`} style={{width:'70%',height:'100%'}}>
//         </iframe>
//     );
// };

// export default Pdf_Viewer;
import * as React from 'react';

const Pdf_Viewer = (props) => {
    const pdf_url = props?.pdf_url
    return (
            <object data={pdf_url} type="application/pdf" width="100%" height="100%"></object>
    );
};

export default Pdf_Viewer;

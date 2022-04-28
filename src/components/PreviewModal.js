import { useEffect } from "react";
import { Modal } from "react-bootstrap";
function PreviewModal({  onSave, onDiscard, data }) {
    const {html} = data ;
    useEffect(()=> {
        const prev = document.getElementById("previewContainer");
        console.log(html);
        if(prev) {
            prev.innerHTML = html ;
        }
        
    },[])
    return (
        <>
        <Modal
          show={true}
          onHide={onDiscard}
          dialogClassName="modal-90w previewContainerModal"
          centered
          style={{background : "none"}}
        >

            <div id="previewContainer">

            </div>
          
        </Modal>
      </>
    );
}



export default PreviewModal;
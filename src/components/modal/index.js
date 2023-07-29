import { Button, Modal, Text, View } from "react-native";

import React from "react";

const CustomModal=({children,estadoModal,animationType})=>{
    return(
        <Modal 
            animationType={animationType} 
            visible={estadoModal}
        >
            {children}
        </Modal>
    )
}

export default CustomModal;
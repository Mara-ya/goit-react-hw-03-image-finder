import { Children, Component } from "react";
import { createPortal } from 'react-dom';
import { Overlay, ModalStyle } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    componentDidMount(){
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if(e.code === 'Escape'){
            this.props.onClose();
        }
    }

    handleBackdropClick = event => {
        if(event.currentTarget === event.target){
            this.props.onClose();
        }
    }

    render(){
        return createPortal(
            <Overlay onClick={this.handleBackdropClick}>
                <ModalStyle>
                    {this.props.children}
                </ModalStyle>
            </Overlay>, modalRoot
        )
    }
}
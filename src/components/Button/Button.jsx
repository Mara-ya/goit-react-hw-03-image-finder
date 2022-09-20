import PropTypes from 'prop-types';
import { Button, BtnWrapper } from "./Button.styled";

export const BtnLoadMore = ({onClick}) => {
    return(
    <BtnWrapper>
        <Button type='button' onClick={onClick}>
            Load more
        </Button>
    </BtnWrapper>
    )
}

BtnLoadMore.propTypes = {
    onClick: PropTypes.func.isRequired,
};
import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import useScrollDetection from '../../../../hooks/front/useScrollDetection'
import { scrollToTop } from '../../../utils';
import './ScrollToTopButton.scss'

const ScrollToTopButton: React.FC = () => {
    const isVisible = useScrollDetection(150);

    if (!isVisible) return null

    return (
        <button className="scroll-to-top" onClick={scrollToTop}>
            <ArrowUpwardIcon />
        </button>
    );
};

export default ScrollToTopButton;

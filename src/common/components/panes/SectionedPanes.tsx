import './SectionedPanes.scss';

interface Pane {
    element: JSX.Element;
    className?: string;
}

interface PanedSectionInterface {
    title?: JSX.Element;
    leftPane: Pane;
    rightPane: Pane;
}
const PanedSection: React.FC<PanedSectionInterface> = ({ title, leftPane, rightPane }) => {
    return (
        <div className="sectioned-pane-container">
            {title}
            <div className="panes-container">
                <div className={`pane ${leftPane.className ?? ''}`}>{leftPane.element}</div>
                <div className={`pane ${rightPane.className ?? ''}`}>{rightPane.element}</div>
            </div>
        </div>
    );
};

export default PanedSection;

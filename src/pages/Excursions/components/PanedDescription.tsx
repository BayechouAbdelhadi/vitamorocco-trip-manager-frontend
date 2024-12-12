import { useTranslation } from 'react-i18next';
import PanedSection from '../../../common/components/panes/SectionedPanes';
import { defaultImage } from '../../../common/utils/imageUtils';
import parse from 'html-react-parser';

interface PanedDescriptionInterface {
    description: string;
    imgSrc: string;
}
export const PanedDescription = ({ description, imgSrc }: PanedDescriptionInterface): JSX.Element => {
    const { t } = useTranslation();

    return (
        <PanedSection
            title={
                <h5 className="setcion-title left-title">
                    {t('description')}
                </h5>
            }
            leftPane={{
                element: (
                    <p>
                        {parse(description)}
                    </p>
                ),
                className: 'content-pane',
            }}
            rightPane={{
                element: <img
                    src={imgSrc}
                    loading='lazy'
                    alt="description"
                    onError={defaultImage.large.errorHandler}
                />,
                className: 'visual-pane',
            }}
        />
    );
};

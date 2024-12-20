import PanedSection from "../../common/components/panes/SectionedPanes"
import { useTranslation } from "react-i18next";

interface TourInformationProps {
    informationList: string[]
}

function TourInformation({ informationList }: TourInformationProps) {
    const { t } = useTranslation();

    return (
        <PanedSection
            title={
                <h5 className="setcion-title left-title">
                    {t('information')}
                </h5>
            }
            leftPane={{
                element: <ol className='information-lo'>
                    {informationList.map((information, index) => (
                        <li key={`information-${index}`} className='information-li'>
                            {information}
                        </li>
                    ))}
                </ol>,
                className: 'content-pane',
            }}
        />
    )
}

export default TourInformation
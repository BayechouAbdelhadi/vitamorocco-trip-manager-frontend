import { useQuery } from 'react-query';
import { Page } from '../../common/components/Page/Page';
import { getExcursions } from '../../common/services/excursionService';
import ExcursionSummary from './components/ExcursionSummary';
import { CircularProgress } from '@mui/material';
import './Excursions.scss';

const ExcursionsText = 'Excursions';

export const Excursions = (): JSX.Element => {
    const { data: excursions, isLoading } = useQuery('excursions', getExcursions);

    return (
        <Page description={ExcursionsText} keywords={ExcursionsText} title={ExcursionsText} className='excursions-page-container'>
            {false ? (
                <CircularProgress />
            ) : (
                <>
                    <h2>a small title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed qui quos blanditiis ratione consectetur
                        veniam velit voluptatum accusantium numquam repudiandae pariatur, veritatis tempora voluptatibus quas
                        quisquam natus! Corrupti, beatae et?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed qui quos blanditiis ratione consectetur
                        veniam velit voluptatum accusantium numquam repudiandae pariatur, veritatis tempora voluptatibus quas
                        quisquam natus! Corrupti, beatae et?</p>
                    <div className="excursions-container">
                        {excursions?.map((excursion) => (
                            <ExcursionSummary key={excursion.id} excursion={excursion} />
                        ))}
                    </div>
                </>
            )}
        </Page>
    );
};
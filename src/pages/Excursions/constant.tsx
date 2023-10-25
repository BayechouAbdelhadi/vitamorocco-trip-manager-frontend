import HumainIcon from '@mui/icons-material/AccessibilityOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import DriveEtaOutlinedIcon from '@mui/icons-material/DriveEtaOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import TransferWithinAStationOutlinedIcon from '@mui/icons-material/TransferWithinAStationOutlined';
export interface ServiceOption {
    name: string;
    icon?: JSX.Element;
}

export const INCLUDED_SERVICES: ServiceOption[] = [
    {
        name: 'private_tour',
        icon: <HumainIcon style={{ fontSize: 45 }} color="primary" />,
    },
    {
        name: 'pickup_at',
        icon: <ApartmentOutlinedIcon style={{ fontSize: 45 }} color="primary" />, // Replace iconForPickupAt with the appropriate icon
    },
    {
        name: 'transport',
        icon: <DriveEtaOutlinedIcon style={{ fontSize: 45 }} color="primary" />, // Replace iconForTransport with the appropriate icon
    },
    {
        name: 'driver_guide',
        icon: <ExploreOutlinedIcon style={{ fontSize: 45 }} color="primary" />, // Replace iconForDriverGuide with the appropriate icon
    },
    {
        name: 'expenses',
        icon: <LocalAtmOutlinedIcon style={{ fontSize: 45 }} color="primary" />, // Replace iconForExpenses with the appropriate icon
    },
    {
        name: 'local_guide',
        icon: <TransferWithinAStationOutlinedIcon style={{ fontSize: 45 }} color="primary" />, // Replace iconForLocalGuide with the appropriate icon
    },
];

export const EXCLUDED_SERVICES: string[] = ['food_drink', 'monuments_entrance', 'tip_propina'];

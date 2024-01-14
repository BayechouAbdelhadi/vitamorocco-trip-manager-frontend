import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
type SelectOption = {
    label: string | JSX.Element;
    value: string;
};
interface SelectBoxProps extends Omit<SelectProps<any>, 'onChange'> {
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
    parentClassName?: string;
}
const SelectBox: React.FC<SelectBoxProps> = ({ options, value, parentClassName = '', onChange, ...otherProps }) => {
    const { t } = useTranslation();
    const handleChange = (event: SelectChangeEvent) => {
        onChange(event.target.value);
    };

    return (
        <FormControl className={parentClassName}>
            <InputLabel id={otherProps.labelId}>{otherProps.label}</InputLabel>
            <Select onChange={handleChange} {...otherProps} value={value}>
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {typeof option.label === 'string' ? t(option.label) : option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default SelectBox;

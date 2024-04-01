import LanguageIcon from '@mui/icons-material/Language';
import { Button, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQueryClient } from 'react-query';
import { AvailableLanguage, languages } from '../../../locales';
// import applicationConfigurationService from '../../services/applicationConfigurationService';
interface LanguagePickerProps {
    className?: string;
}
const LanguagePicker = ({ className = '' }: LanguagePickerProps): JSX.Element => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedLanguage, setSelectedLanguage] = useState<AvailableLanguage>(AvailableLanguage.EN); // Default language is English
    const { i18n, t } = useTranslation();
    const queryClient = useQueryClient();

    const handleLanguageChange = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (language: AvailableLanguage) => {
        // applicationConfigurationService
        //     .changeLanguage(language)
        //     .then(() => {
        //         setAnchorEl(null);
        //         setSelectedLanguage(language);
        //         i18n.changeLanguage(language);
        //         queryClient.invalidateQueries(undefined);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        setAnchorEl(null);
        setSelectedLanguage(language);
        i18n.changeLanguage(language);
        localStorage.setItem("language", language)
        queryClient.invalidateQueries(undefined);
    };

    return (
        <div className={className}>
            <Button startIcon={<LanguageIcon />} onClick={handleLanguageChange}>
                {languages.find((lang) => lang.key === selectedLanguage)?.flag}
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleClose(selectedLanguage)}>
                {languages
                    .filter((lang) => lang.key !== selectedLanguage)
                    .map((language) => (
                        <MenuItem key={language.key} onClick={() => handleClose(language.key)}>
                            {language.flag} &nbsp; {t(language.name)}
                        </MenuItem>
                    ))}
            </Menu>
        </div>
    );
};

export default LanguagePicker;

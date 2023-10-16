import LanguageIcon from '@mui/icons-material/Language';
import { Button, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AvailableLanguage, languages } from '../../../locales';
interface LanguagePickerProps {
    className?: string;
}
const LanguagePicker = ({ className = '' }: LanguagePickerProps): JSX.Element => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedLanguage, setSelectedLanguage] = useState<AvailableLanguage>(AvailableLanguage.EN); // Default language is English
    const { i18n, t } = useTranslation();

    const handleLanguageChange = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (language: AvailableLanguage) => {
        setAnchorEl(null);
        setSelectedLanguage(language);
        i18n.changeLanguage(language);
    };

    return (
        <div className={className}>
            <Button startIcon={<LanguageIcon />} onClick={handleLanguageChange}>
                {languages.find((lang) => lang.key === selectedLanguage)?.flag}
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleClose(selectedLanguage)}>
                {languages.map((language) => (
                    <MenuItem key={language.key} onClick={() => handleClose(language.key)}>
                        {language.flag} {t(language.name)}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default LanguagePicker;

import LanguageIcon from '@mui/icons-material/Language';
import { Button, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

type Language = 'fr' | 'es' | 'en' | 'pt';

const languages = [
    { key: 'fr', name: 'french', flag: '🇫🇷' },
    { key: 'es', name: 'spanish', flag: '🇪🇸' },
    { key: 'en', name: 'english', flag: '🇺🇸' },
    { key: 'pt', name: 'portuguese', flag: '🇵🇹' },
];

const LanguagePicker: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedLanguage, setSelectedLanguage] = useState<Language>('en'); // Default language is English
    const { i18n, t } = useTranslation();

    const handleLanguageChange = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (language: string) => {
        setAnchorEl(null);
        setSelectedLanguage(language as Language);
        i18n.changeLanguage(language);
    };

    return (
        <div>
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
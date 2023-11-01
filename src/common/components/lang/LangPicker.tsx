import LanguageIcon from '@mui/icons-material/Language';
import { Button, Menu, MenuItem } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AvailableLanguage, languages } from '../../../locales';
import applicationConfigurationService from '../../services/applicationConfigurationService';
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
        applicationConfigurationService
            .changeLanguage(language)
            .then(() => {
                setAnchorEl(null);
                setSelectedLanguage(language);
                i18n.changeLanguage(language);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const SelectedFlag = () => languages.find((lang) => lang.key === selectedLanguage)?.flag() ?? null;

    const renderOtherFlags = useMemo(
        () => (
            <>
                {languages
                    .filter((lang) => lang.key !== selectedLanguage)
                    .map((language) => (
                        <MenuItem key={language.key} onClick={() => handleClose(language.key)}>
                            {language.flag()} &nbsp; {t(language.name)}
                        </MenuItem>
                    ))}
            </>
        ),
        [languages]
    );

    return (
        <div className={className}>
            <Button startIcon={<LanguageIcon />} onClick={handleLanguageChange}>
                <SelectedFlag />
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleClose(selectedLanguage)}>
                {renderOtherFlags}
            </Menu>
        </div>
    );
};

export default LanguagePicker;

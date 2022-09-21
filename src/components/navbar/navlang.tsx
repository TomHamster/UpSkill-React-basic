import { ExpandLess, ExpandMore } from '@mui/icons-material';
import TranslateIcon from '@mui/icons-material/Translate';
import {
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  Typography
} from '@mui/material';
import i18n from 'i18n/i18n';
import React, { useState } from 'react';

export default function NavLang() {
  const langList: Record<string, { nativeName: string }> = {
    en: { nativeName: 'English' },
    pl: { nativeName: 'Polski' }
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenLangMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseLangMenu = () => {
    setAnchorEl(null);
  };

  const [openSubMenu, setOpenSubMenuSubMenu] = useState(true);

  const handleOpenMobileSubmenu = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setOpenSubMenuSubMenu(!openSubMenu);
  };

  return (
    <>
      <Tooltip title="Change Language">
        <IconButton
          onClick={handleOpenLangMenu}
          sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
          <TranslateIcon />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '20px' }}
        id="menu-appbar"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseLangMenu}>
        {Object.keys(langList).map((lng: string) => (
          <MenuItem
            key={lng}
            onClick={() => {
              handleCloseLangMenu();
              i18n.changeLanguage(lng);
            }}>
            <Typography
              textAlign="center"
              fontWeight={i18n.resolvedLanguage === lng ? 'bold' : 'normal'}>
              {langList[lng].nativeName}
            </Typography>
          </MenuItem>
        ))}
      </Menu>

      <ListItemButton
        sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
        onClick={handleOpenMobileSubmenu}>
        <ListItemIcon>
          <TranslateIcon />
        </ListItemIcon>
        <ListItemText primary="Language" />
        {openSubMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse
        in={openSubMenu}
        timeout="auto"
        unmountOnExit
        sx={{ display: { xs: 'block', sm: 'none' } }}>
        <List component="div" disablePadding>
          {Object.keys(langList).map((lng: string) => (
            <ListItemButton
              key={lng}
              sx={{ textAlign: 'center' }}
              onClick={() => {
                handleCloseLangMenu();
                i18n.changeLanguage(lng);
              }}>
              <ListItemText
                sx={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
                primary={langList[lng].nativeName}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
}

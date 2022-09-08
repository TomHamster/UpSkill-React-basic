import { SvgIconComponent } from '@mui/icons-material';
import { IconButtonProps } from '@mui/material/IconButton/IconButton';

export interface StickyTableColumn {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  format?: (value: number | string) => string;
}

export interface StickyTableActions extends IconButtonProps {
  icon: SvgIconComponent;
  ariaLabel: string;
  onClick: any;
}

export interface StickyTableProps {
  columns: StickyTableColumn[];
  rows: any[] | null;
  actions: StickyTableActions[];
}

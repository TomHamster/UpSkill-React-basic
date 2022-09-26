import { SvgIconComponent } from '@mui/icons-material';
import { IconButtonProps } from '@mui/material/IconButton/IconButton';
import { TableCellProps } from '@mui/material/TableCell/TableCell';

export interface StickyTableColumnProps extends Partial<TableCellProps> {
  id: string;
  label: string;
  minWidth?: number;
  format?: (value: number | string) => string;
}
export interface StickyTableActionsProps extends IconButtonProps {
  icon: SvgIconComponent;
  ariaLabel: string;
  onClick: any;
}

export interface StickyTableProps {
  tableMaxHeight?: string;
  columns: StickyTableColumnProps[];
  rows: any[];
  actions: StickyTableActionsProps[];
}

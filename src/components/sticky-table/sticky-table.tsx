import { Box, IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { RowsPerPageOptions } from './sticky-table.const';
import { StickyTableProps } from './sticky-table.interfaces';

const StickyTable = ({ columns, rows, actions, tableMaxHeight }: StickyTableProps) => {
  const { t } = useTranslation();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(RowsPerPageOptions[0]);
  tableMaxHeight = tableMaxHeight ? tableMaxHeight : '100vh';

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <TableContainer sx={{ maxHeight: tableMaxHeight }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns?.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}>
                  {t(column.label)}
                </TableCell>
              ))}
              {actions.length && (
                <TableCell key="actions" align="right">
                  {t('Actions')}
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map((column) => {
                    const value: any = row[column.id];

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                  {actions.length && (
                    <TableCell key="actions" align="right">
                      <Box>
                        {actions.map((action, index) => {
                          return (
                            <IconButton
                              key={`action_${index}`}
                              color={action.color}
                              aria-label={t(action.ariaLabel)}
                              component="label"
                              onClick={() => action.onClick(row.id)}>
                              <action.icon />
                            </IconButton>
                          );
                        })}
                      </Box>
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={RowsPerPageOptions}
        component="div"
        count={rows?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default StickyTable;

import { FC } from "react";
import { GenericTablePagination } from "../generic-table-pagination";
import { GenericTableColumnType } from "../../model/types";
import { useGenericTableFilter } from "../..";
import { Field } from "../../../field";
import { Label } from "../../../label";
import { cn, useIsMobile } from "../../../../lib";

type Props = {
  columns: GenericTableColumnType[];
  dataSource: any[];
  pagination: {
    pageSize: number;
    pageNumber: number;
    recordsCount: number;
  };
};

export const GenericTable: FC<Props> = ({
  columns,
  dataSource,
  pagination,
}) => {
  const { filter } = useGenericTableFilter({ keys: ["q", "pn", "ps"] });

  const isFilterNotEmpty = !!Object.keys(filter).length;

  const isShowPagination = isFilterNotEmpty && dataSource.length === 0;

  const isMobile = useIsMobile();

  if (isMobile) {
    const isShowTable = !!dataSource.length;

    return (
      <div>
        <p className="text-sm mb-1">
          {`Найдено записей: ${pagination.recordsCount}`}
        </p>

        {isShowTable && (
          <div className="flex flex-col gap-2">
            {dataSource.map((key) => (
              <Field
                key={key.id}
                className="bg-white p-2 rounded-md border border-gray-200 flex flex-col gap-1"
              >
                {columns.map((column, columnIndex) => (
                  <div
                    key={`${column.key}_${columnIndex}`}
                    className="text-black text-sm break-words"
                  >
                    <Label>{column.title}</Label>

                    <div>
                      {column.render
                        ? column.render(key)
                        : key[column.dataIndex]}
                    </div>
                  </div>
                ))}
              </Field>
            ))}
          </div>
        )}

        {isShowTable && (
          <div className="flex justify-center mt-2">
            {!isShowPagination && <GenericTablePagination {...pagination} />}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      <table className="w-full text-sm text-left rtl:text-right table-fixed text-gray-500 border-spacing-0">
        <thead className="text-gray-800 uppercase border-b border-gray-200">
          <tr>
            {columns.map((key, index) => (
              <th
                key={`${key}_${index}`}
                style={{ width: key.width }}
                scope="col"
                className="px-4 py-1.5 font-bold text-xs"
              >
                {key.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {dataSource.map((row) => (
            <tr
              key={row.id}
              className="border-b border-gray-200 last:border-b-0"
            >
              {columns.map((column, columnIndex) => (
                <td
                  key={`${column.key}_${columnIndex}`}
                  className="px-4 py-1.5 text-gray-800 text-sm break-words h-11"
                  valign="middle"
                >
                  {column.render ? column.render(row) : row[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div
        className={cn(
          "flex justify-between items-center py-2 border-t border-t-neutral-300 border-solid px-3",
          {
            "border-none justify-center": isShowPagination,
          }
        )}
      >
        <span className="text-sm">
          {`Найдено документов: ${pagination.recordsCount}`}
        </span>

        {!isShowPagination && <GenericTablePagination {...pagination} />}
      </div>
    </div>
  );
};

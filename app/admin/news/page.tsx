"use client";

import Link from "next/link";
import z from "zod";
import {
  SortingState,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState,
  getSortedRowModel,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import BouncingDotsLoader from "@/components/loader";
import Image from "next/image";
import { formatDateToDayAndTime, formatDateWithSlash } from "@/lib/date";

type Payment = z.infer<typeof PaymentSchema>;

export const PaymentSchema = z.object({
  id: z.string(),
  imagePvw: z.string(),
  title: z.string(),
  excerpt: z.string(),
  createdAt: z.date(),
});

const data: Payment[] = [
  {
    id: "34m5gr84i9",
    imagePvw: "success",
    title:
      "kkekken99@example.comkekken99@example.comkekken99@example.comkekken99@example.comkekken99@example.comkekken99@example.comkekken99@example.comkekken99@example.comkekken99@example.comkekken99@example.comekken99@example.com",
    createdAt: new Date(),
    excerpt: "aksdmaksd",
  },
  {
    id: "34m5gr84i9",
    imagePvw: "success",
    title:
      "kkekken99@example.comkekken99@example.comkekken99@example.comkekken99@example.comkekken99@example.comkekken99@example.comkekken99@example.comkekken99@example.comkekken99@example.comkekken99@example.comekken99@example.com",
    createdAt: new Date(),
    excerpt: "aksdmaksd",
  },
  {
    id: "34m5gr84i9",
    imagePvw: "success",
    title:
      "kkekken99@example.comkekken99@example.comkekken99@example.comkekken99@example.comkekken99@example.comkekken99@example.comkekken99@example.comkekken99@example.comkekken99@example.comkekken99@example.comekken99@example.com",
    createdAt: new Date(),
    excerpt: "aksdmaksd",
  },

  {
    id: "34m5gr84i9",
    imagePvw: "success",
    title: "kekken99@example.com",
    createdAt: new Date(),
    excerpt:
      "aaksdmaksdaksdmaksdaksdmaksdaksdmaksdaksdmaksdaksdmaksdaksdmaksdaksdmaksdaksdmaksdaksdmaksdaksdmaksdaksdmaksdksdmaksd",
  },
];

async function getData(): Promise<Payment[]> {
  await new Promise((r) => setTimeout(r, 100));
  return data;
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "checkbox",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="ml-[8px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "imagePvw",
    header: ({ column }) => {
      return <div className="w-[100px]"></div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} // todo: api call
          className="ml-[-12px] hover:cursor-pointer"
        >
          {/* TODO: extend string method for capitalized */}
          Published at
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      // const amount = parseFloat(row.getValue("amount"));
      // const formatted = new Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // }).format(amount);

      const x = row.getValue("createdAt") as Date;
      return <div className="font-medium">{formatDateToDayAndTime(x)}</div>;
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => <div>Title</div>,
  },
  {
    accessorKey: "excerpt",
    header: ({ column }) => <div>Excerpt</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 ml-7 mr-10">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          // value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          // onChange={(event) =>
          //   table.getColumn("email")?.setFilterValue(event.target.value)
          // }
          className="max-w-sm"
        />
      </div>

      <div className="overflow-hidden rounded-md text-white ">
        {/* TODO: move pagination on top, change to chevron */}
        <Table>
          {/* HEADER */}

          <TableHeader className="border-none">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-none hover:bg-transparent"
              >
                {headerGroup.headers.map((header) => {
                  if (header.isPlaceholder) {
                    return <TableHead key={header.id}>{null}</TableHead>;
                  }

                  if (header.column.id === "checkbox") {
                    return (
                      <TableHead key={header.id} className="text-surf">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </TableHead>
                    );
                  }

                  return (
                    <TableHead key={header.id} className="text-surf">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          {/* BODY */}

          <TableBody className="news-table">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-none hover:bg-[#3b4167]"
                >
                  {row.getVisibleCells().map((cell) => {
                    if (cell.column.id === "imagePvw") {
                      return (
                        <TableCell key={cell.id}>
                          <div className="flex flex-col justify-center items-center h-full">
                            <Image
                              src="/icons/favicon.svg"
                              alt=""
                              width={58}
                              height={58}
                              className="align-middle"
                            />
                          </div>
                        </TableCell>
                      );
                    }

                    if (cell.column.id === "createdAt") {
                      return (
                        <TableCell key={cell.id} className="w-[200px]">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      );
                    }

                    if (
                      cell.column.id === "title" ||
                      cell.column.id === "excerpt"
                    ) {
                      return (
                        <TableCell
                          key={cell.id}
                          className="w-[340px] max-w-[500px] truncate"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      );
                    }

                    return (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="cursor-pointer"
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="cursor-pointer"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default function Page() {
  const [data, setData] = useState<Payment[]>([]);
  useEffect(() => {
    const x = async () => {
      const d = await getData();
      setData(d);
    };
    x();
  }, [data]);

  return (
    <div className="h-full">
      <div className="m-4 min-h-1/2 rounded-md bg-[#0e1025] py-5 px-6 min-w-full w-fit">
        <p className="text-xl text-surface-25">News & Battle Updates</p>

        {/* TODO: loading if data undefined, "No resulst" if data empty */}
        {!data.length ? (
          <BouncingDotsLoader />
        ) : (
          <DataTable columns={columns} data={data} />
        )}
      </div>
    </div>
  );
}

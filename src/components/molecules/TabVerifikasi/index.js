import { Tab } from "@headlessui/react";
import React from "react";
import { usePagination, useTable } from "react-table";
import {
    IcArrowLeftInactive,
    IcArrowRightActive,
    IcSearch,
} from "../../../assets/Icons";
import serverData from "../../../assets/JSON/data";
import { Button, Gap } from "../../atoms";

function Table({
    columns,
    data,
    fetchData,
    loading,
    pageCount: controlledPageCount,
}) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageSize: 5, pageIndex: 0 },
            manualPagination: true,
            pageCount: controlledPageCount,
        },
        usePagination
    );

    React.useEffect(() => {
        fetchData({ pageIndex, pageSize });
    }, [fetchData, pageIndex, pageSize]);

    return (
        <>
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto">
                    <table {...getTableProps()} className="w-full table-auto">
                        <thead className="bg-primary">
                            {headerGroups.map((headerGroup, i) => {
                                return (
                                    <tr
                                        {...headerGroup.getHeaderGroupProps()}
                                        className="font-sans text-sm font-medium text-secondary bg-surface text-left"
                                        key={i}
                                    >
                                        {headerGroup.headers.map(
                                            (column, i) => {
                                                return (
                                                    <td
                                                        {...column.getHeaderProps()}
                                                        className="py-2 px-3 border-b"
                                                        key={i}
                                                    >
                                                        {column.render(
                                                            "Header"
                                                        )}
                                                    </td>
                                                );
                                            }
                                        )}
                                    </tr>
                                );
                            })}
                        </thead>
                        <tbody {...getTableBodyProps()} className="bg-white">
                            {page.map((row, i) => {
                                prepareRow(row);
                                return (
                                    <tr
                                        {...row.getRowProps()}
                                        className="font-sans text-sm font-normal text-primary text-left"
                                        key={i}
                                    >
                                        {row.cells.map((cell, i) => {
                                            return (
                                                <td
                                                    {...cell.getCellProps()}
                                                    className="px-3 py-5 border"
                                                    key={i}
                                                >
                                                    {cell.render("Cell")}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="pagination flex justify-between">
                <div className="flex items-center">
                    <h2 className="font-sans text-sm font-normal text-secondary leading-5 mr-2">
                        Item per halaman
                    </h2>
                    <select
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                        }}
                        className="bg-white border border-inline p-2.5 rounded-md"
                    >
                        {[5, 10, 15, 20].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center">
                    <button
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                        className="w-11 h-11 flex justify-center items-center"
                    >
                        <img src={IcArrowLeftInactive} alt="icon" />
                    </button>
                    <div className="flex">
                        {pageOptions.map((item) => (
                            <div
                                className={`${
                                    pageIndex === item
                                        ? "w-11 h-11 flex justify-center items-center rounded-md bg-outline mx-0.5"
                                        : "w-11 h-11 flex justify-center items-center"
                                }`}
                            >
                                <p
                                    className={`${
                                        pageIndex === item
                                            ? "font-sans text-sm font-normal text-primary leading-5"
                                            : "font-sans text-sm font-normal text-secondary leading-5"
                                    }`}
                                >
                                    {item + 1}
                                </p>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                        className="w-11 h-11 flex justify-center items-center"
                    >
                        <img src={IcArrowRightActive} alt="icon" />
                    </button>
                </div>
            </div>
        </>
    );
}

function TabVerifikasi() {
    const columns = React.useMemo(
        () => [
            {
                Header: "ID Pengguna",
                accessor: "idPengguna",
            },
            {
                Header: "Nama Pengguna",
                accessor: "namaPengguna",
            },
            {
                Header: "Kewarganegaraan",
                accessor: "kewarganegaraan",
            },
            {
                Header: "Nomor Kependudukan",
                accessor: "nomorKependudukan",
            },
            {
                Header: "Tanggal Registrasi",
                accessor: "tgl",
            },
            {
                Header: "Estimasi Diverifikasi",
                accessor: "estimasi",
            },
            {
                id: "id",
                accessor: "id",
                Cell: (value) => {
                    return (
                        <Button
                            text="Lihat Detail"
                            onClick={() =>
                                alert(value.row.original.namaPengguna)
                            }
                        >
                            Edit
                        </Button>
                    );
                },
            },
        ],
        []
    );

    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [pageCount, setPageCount] = React.useState(0);
    const fetchIdRef = React.useRef(0);

    const fetchData = React.useCallback(({ pageSize, pageIndex }) => {
        const fetchId = ++fetchIdRef.current;
        setLoading(true);
        setTimeout(() => {
            if (fetchId === fetchIdRef.current) {
                const startRow = pageSize * pageIndex;
                const endRow = startRow + pageSize;
                setData(serverData.slice(startRow, endRow));

                setPageCount(Math.ceil(serverData.length / pageSize));

                setLoading(false);
            }
        }, 1000);
    }, []);

    return (
        <Tab.Panel className="mt-8">
            <div>
                <div className="mt-1 relative w-64 rounded-md border border-inline">
                    <div className="absolute inset-y-0 left-0 pl-3 pr-3 flex items-center pointer-events-none ">
                        <img alt="icon" src={IcSearch} />
                    </div>
                    <input
                        type="text"
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full py-4 px-12 pr-12 rounded-md font-sans text-base font-normal text-icon"
                        placeholder="Pencarian"
                    />
                </div>
            </div>
            <Gap height={20} />
            <Table
                columns={columns}
                data={data}
                fetchData={fetchData}
                loading={loading}
                pageCount={pageCount}
            />
        </Tab.Panel>
    );
}

export default TabVerifikasi;

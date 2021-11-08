import axios from "axios";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

const DataTable = () => {
    const [activePge, setActivePage] = useState(0);
    const [Page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0,
    });
    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activePge}&size=20`)
            .then(response => {
                setPage(response.data);
            });
    }, [activePge]);

    const changePage = (index: number) => {
        setActivePage(index);
    }
    return (
        <>
            <Pagination page={Page}onPageChange={changePage} />
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Vendedor</th>
                            <th>Clientes visitados</th>
                            <th>Negócios fechados</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Page.content?.map(x => (
                            <tr key={x.id}>
                                <td>{formatLocalDate(x.date, "dd/MM/yyyy")}</td>
                                <td>{x.seller.name}</td>
                                <td>{x.visited}</td>
                                <td>{x.deals}</td>
                                <td>R$ - {x.amount.toFixed(2)}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <Pagination page={Page}onPageChange={changePage} />
        </>
    );
}
export default DataTable;
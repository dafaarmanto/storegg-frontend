import { useCallback, useEffect, useState } from "react"
import { toast } from "react-toastify"
import { HistoryTransactionTypes, TopupCategoryTypes } from "../../../services/data-types"
import { getMemberOverview } from "../../../services/player"
import ContentCard from "./ContentCard"
import TableRow from "./TableRow"

export default function OverviewContent() {
	const [count, setCount] = useState([]);
	const [data, setData] = useState([]);

	const getMemberOverviewAPI = useCallback(async () => {
		const response = await getMemberOverview()
		if (response.error) {
			toast.error(response.message)
		} else {
			setCount(response.data.count)
			setData(response.data.data)
		}
	}, [])

	useEffect(() => {
		getMemberOverviewAPI()
	}, [])


	const IMG = process.env.NEXT_PUBLIC_API_IMG

  return (
    <main className="main-wrapper">
        <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
            <div className="top-up-categories mb-30">
                <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
                <div className="main-content">
                    <div className="row">
												{count.map((item: TopupCategoryTypes) => (
													<ContentCard 
														icon="/icon/CardContent1.svg"
														key={item._id} 
														name={item.name} 
														title="Total Spent" 
														balance={item.value} 
													/>
												))}
                    </div>
                </div>
            </div>
            <div className="latest-transaction">
                <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
                <div className="main-content main-content-table overflow-auto">
                    <table className="table table-borderless">
                        <thead>
                            <tr className="color-palette-1">
                                <th className="text-start" scope="col">Game</th>
                                <th scope="col">Item</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
													{data.map((item: HistoryTransactionTypes) => (
                            <TableRow 
															image={`${IMG}/${item.historyVoucherTopup.thumbnail}`}
															key={item._id} 
															title={item.historyVoucherTopup.gameName} 
															category={item.historyVoucherTopup.category} 
															item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`} 
															price={item.value} 
															status={item.status} 
														/>
													))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
  )
}

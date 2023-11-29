import style from './page.module.css';
export default function OverviewPage() {
    return (
        <div>
            <h1 className={style.heading}>Dashboard Overview</h1>
            <div className={style.grid_container}>
                <div>
                    <h2>Total Invested</h2>
                    <p>N300,000</p>
                </div>
                <div>
                    <h2>Total Profit</h2>
                    <p>0</p>
                </div>
                <div>
                    <h2>Total Acres</h2>
                    <p>1 Acre</p>
                </div>
                <div>
                    <h2>Harvest Date</h2>
                    <p>22 Aug, 2024</p>
                </div>
            </div>
        </div>
    )
}
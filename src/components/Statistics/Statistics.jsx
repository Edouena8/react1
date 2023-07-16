import { StatisticElem } from "components/StatisticElem/StatisticElem";
import css from './Statistics.module.css';

export const Statistics = ({title, stats}) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>
            <ul className={css.statList}>
                {stats.map(stat => (
                    <StatisticElem key={stat.id} label={stat.label} percentage={stat.percentage}/>
                ))}
            </ul>
        </section>
    );
};
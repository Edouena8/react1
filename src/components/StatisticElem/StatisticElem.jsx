import css from './StatisticsElem.module.css';
import { getRandomHexColor } from 'utils';

export const StatisticElem = ({label, percentage}) => {
    const randomHexColor = getRandomHexColor();
    
    return (
        <li className={css.item} style={{backgroundColor: `${randomHexColor}`}}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>               
    );
};
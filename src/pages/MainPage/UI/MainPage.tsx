import React, {
    JSXElementConstructor, useCallback, useEffect, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch';
import { anomalyService } from '../../../entities/Annomally/model/services/anomalyService';
import { getAnomalyData } from '../../../entities/Annomally/model/selectors/getAnomalyData/getAnomalyData';
import cls from './MainPage.module.scss';

interface Metric {
    metric: string
}

const MainPage = () => {
    const dispatch = useAppDispatch();
    const data = useSelector(getAnomalyData);
    const [metrics, setMetrics] = useState<Metric[]>([{ metric: '' }]);

    useEffect(() => {
        // dispatch(anomalyService());
    }, [dispatch, metrics]);

    const handleMetrics = () => {
        setMetrics([...metrics, { metric: '' }]);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        const updatedMetrics = metrics.map((item, i) => {
            if (i === index) {
                return { ...item, metric: value };
            }
            return item;
        });
        setMetrics(updatedMetrics);
    };
    const findAnomaly = useCallback(() => {
        dispatch(anomalyService());
    }, [dispatch]);

    return (
        <div className={cls.MainPage}>
            <div className={cls.mainPageContent}>
                <div>
                    <div className={cls.mainPageTittle}>
                        <span>
                            <p>
                                Подключить БД и указать отслеживаемые метрики
                            </p>
                        </span>
                    </div>
                    <div className={cls.dbAndMetrics}>
                        <div>
                            <input className={cls.dataBaseInput} placeholder="Ссылка на базу данныз" />
                        </div>
                        <div className={cls.metricsList}>
                            {metrics.map((elem, i) => (
                                <div>
                                    <input name="metric" value={elem.metric} onChange={(e) => handleChange(e, i)} />
                                </div>
                            ))}
                            <button type="submit" onClick={handleMetrics}>Добавить метрику</button>
                        </div>
                    </div>
                    <button type="submit" onClick={findAnomaly}>Найти аномалии</button>
                </div>
                {data?.map((elem) => (
                    <div className={cls.content}>
                        <p>{elem.message}</p>
                        <img src={`data:image/png;base64,${elem.image}`} alt="graph" width="50%" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainPage;

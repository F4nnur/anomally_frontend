import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch';
import { anomalyService } from '../../../entities/Annomally/model/services/anomalyService';
import { getAnomalyData } from '../../../entities/Annomally/model/selectors/getAnomalyData/getAnomalyData';
import cls from './MainPage.module.scss';

const MainPage = () => {
    const dispatch = useAppDispatch();
    const data = useSelector(getAnomalyData);
    useEffect(() => {
        dispatch(anomalyService());
    }, [dispatch]);
    return (
        <div className={cls.MainPage}>
            <div>
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

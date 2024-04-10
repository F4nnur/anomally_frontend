import axios from 'axios';
import { ACCESS_KEY } from '../const/localStorage';

const baseUrl = 'http://127.0.0.1:8000';
const ACCESS_TOKEN = localStorage.getItem(ACCESS_KEY);

export const $api = axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
});

const baseAirflowUrl = 'http://localhost:8080/api/v1/';

export const $airflowApi = axios.create({
    baseURL: baseAirflowUrl,
    headers: {
        Authorization: `Basic ${btoa('airflow:airflow')}`,
        'Content-Type': 'application/json',
    },
});

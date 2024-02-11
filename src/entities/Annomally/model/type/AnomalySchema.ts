interface Anomaly {
    message: string
    image: string
}

export interface AnomalySchema {
    data?: Anomaly[];
    isLoading: boolean;
    error?: string;
}

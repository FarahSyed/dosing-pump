// Navigation Type
export type RootStackParamList = {
    Home: undefined;
    Settings: {
        onSubmit: (page: string, data: any) => void;
        pumpName?: string;
        containerSize?: number;
    };
    Schedule: {
        onSubmit: (page: string, data: any) => void;
        dosesPerDay?: number;
        volumePerDay?: number;
    };
    Manual: {
        onSubmit: (page: string, data: any) => void;
        volumeToDispense?: number;
    };
    Calibrate: {
        onSubmit: (page: string, data: any) => void;
        calibrationTime?: number;
    };
    StoredData: undefined;
};


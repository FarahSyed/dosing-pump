export const isFormValid = (data: any): boolean => {
    const { settings, schedule, manual, calibrate } = data;

    if (!settings?.pumpName || settings?.pumpName.trim() === '') return false;
    if (settings?.containerSize === undefined || settings.containerSize === '') return false;

    if (schedule?.dosesPerDay === undefined || schedule.dosesPerDay === '') return false;
    if (schedule?.volumePerDay === undefined || schedule.volumePerDay === '') return false;

    if (manual?.volumeToDispense === undefined || manual.volumeToDispense === '') return false;

    if (calibrate?.calibrationTime === undefined || calibrate.calibrationTime === '') return false;

    return true;
};

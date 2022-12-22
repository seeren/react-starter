// eslint-disable-next-line import/named
import { ReportHandler } from 'web-vitals';

const reportWebVitals: (onPerfEntry?: ReportHandler) => void = async (
  onPerfEntry?: ReportHandler,
): Promise<void> => {
  if (onPerfEntry) {
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import(
      'web-vitals'
    );
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};

export default reportWebVitals;

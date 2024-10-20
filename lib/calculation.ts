export interface CalculationData {
    caffeine_type: string;
    caffeine_amount: string;
    time_ingested: string;
}

export const calculateResult = (data: CalculationData): string => {
   return 'some words'
};
export interface CalculationData {
    caffeine_type: string;
    caffeine_amount: string;
    time_ingested: string;
}

export const calculateResult = (data: CalculationData): string => {
    let time = 0
    let amount = Number(data.caffeine_amount)
    let startTime = Number(data.time_ingested)
    let threshhold = 1
    let halfLife = 5
    let endTime = ""

    while ( amount > threshhold ){
        amount *= 0.5
        time += halfLife 
    }

    endTime = `The caffeine will leave your system in ${time} hrs`

   return endTime
};
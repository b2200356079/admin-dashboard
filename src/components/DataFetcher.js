import { addDays, format } from 'date-fns';

export const fetchData = async (period) => {
  const url = `http://10.220.14.207/selin/${period}`; 
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("data");
    return data.map(item => ({
      ...item,
      TARIH: format(new Date(item.TARIH), 'dd-MM-yyyy') //!!!
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; 
  }
};


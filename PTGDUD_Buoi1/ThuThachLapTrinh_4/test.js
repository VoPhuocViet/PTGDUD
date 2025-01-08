const bills = [275,40,430];

bills.forEach((bill)=>{
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  const tong = bill + tip;
  console.log(`Hóa đơn là: ${bill}, tiền boa: ${tip}, tổng bill của bạn: ${tong}`)
})

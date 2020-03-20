export default interface LineChartInterface {
  data: {
    title: any;
    x: { title: any; label: string | any[] };
    y: { title: any; limit: any; data: any[] };
  };
}

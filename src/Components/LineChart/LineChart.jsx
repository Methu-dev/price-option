import { LineChart as LChart, Line, XAxis, YAxis} from 'recharts';
const LineChart = () => {
    const studentMarks = [
  { id: 1, name: "Alice", math: 85, physics: 80, chemistry: 78 },
  { id: 2, name: "Bob", math: 78, physics: 75, chemistry: 72 },
  { id: 3, name: "Charlie", math: 92, physics: 88, chemistry: 91 },
  { id: 4, name: "David", math: 66, physics: 70, chemistry: 65 },
  { id: 5, name: "Ella", math: 74, physics: 72, chemistry: 76 },
  { id: 6, name: "Frank", math: 88, physics: 85, chemistry: 83 },
  { id: 7, name: "Grace", math: 81, physics: 78, chemistry: 80 },
  { id: 8, name: "Hannah", math: 95, physics: 90, chemistry: 94 },
  { id: 9, name: "Ian", math: 70, physics: 68, chemistry: 72 },
  { id: 10, name: "Jack", math: 60, physics: 62, chemistry: 58 }
];

  return (
    <div>
      <LChart width={800} height={400} data={studentMarks}>
        <XAxis dataKey={'name'}/>
        <YAxis />
        <Line dataKey="math" stroke='black'/>
        <Line dataKey="physics" stroke='red'/>
        <Line dataKey="chemistry" stroke='green'/>
      </LChart>
    </div>
  )
}

export default LineChart

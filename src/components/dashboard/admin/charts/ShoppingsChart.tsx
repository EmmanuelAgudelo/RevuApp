import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useStore } from 'zustand';
import { shoppingStore } from '../../../../store';

export const ShoppingsChart = () => {
    const { promShopping } = useStore(shoppingStore);

    const sortedData = [...promShopping].sort((a, b) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return months.indexOf(a.month) - months.indexOf(b.month);
      });

    return (
        <ResponsiveContainer width='100%' height="100%">
            <LineChart data={sortedData}>
                <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>

    )
}
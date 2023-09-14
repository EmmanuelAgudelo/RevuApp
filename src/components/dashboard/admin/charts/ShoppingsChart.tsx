import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useStore } from 'zustand';
import { shoppingStore } from '../../../../store';

export const ShoppingsChart = () => {
    const { promShopping } = useStore(shoppingStore);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const sortedData = [...promShopping].sort((a, b) => {
        return months.indexOf(a.month) - months.indexOf(b.month);
    });

    return (
        <>
            {promShopping.length > 0 ?
                <ResponsiveContainer width='100%' height="100%">
                    <LineChart data={sortedData}>
                        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
                :
                <p>No hay nada</p>
            }
        </>

    )
}
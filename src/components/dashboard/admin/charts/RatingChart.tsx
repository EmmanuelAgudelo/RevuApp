import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ratingStore } from '../../../../store';
import { useStore } from 'zustand';

export const RatingChart = () => {
    const { promRatings } = useStore(ratingStore);

    return (
        <ResponsiveContainer width='100%' height="100%">
            <LineChart data={promRatings}>
                <Line type="monotone" dataKey="ratings" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>

    )
}
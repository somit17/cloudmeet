import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
interface Meeting {
    meetingTitle: string;
    time: string;
}
const MeetingPage: React.FC<Meeting> = ({ meetingTitle, time }) => {
    const footer = (
        <Button label='Join' rounded className="w-8rem"></Button>
    );
    return (
        <div className="card">
            <Card title={meetingTitle} footer={footer}>
                <p className="text-lg font-semibold">{time}</p>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>


            </Card>
        </div>
    )
}
export default MeetingPage;

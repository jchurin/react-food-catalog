import React from 'react';

export const ReservationOpeningInfo = () => {
    return (
        <div className="opening-time">
            <h3 className="opening-time-title">Hours</h3>
            <p>Mon to Fri: 7:30 AM - 11:30 AM</p>
            <p>Sat & Sun: 8:00 AM - 9:00 AM</p>
            <div className="launch">
                <h4>Lunch</h4>
                <p>Mon to Fri: 12:00 PM - 5:00 PM</p>
            </div>
            <div className="dinner">
                <h4>Dinner</h4>
                <p>Mon to Sat: 6:00 PM - 1:00 AM</p>
                <p>Sun: 5:30 PM - 12:00 AM</p>
            </div>
        </div>
    );
}
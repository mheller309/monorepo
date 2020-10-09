import React from 'react';

interface NotificationProps {
  text: string;
}

const Notification: React.FC<NotificationProps> = ({ text }) => {
  return (
    <div>
      <h3>Notification tittle</h3>
      <p>{text}</p>
    </div>
  );
};

export default Notification;

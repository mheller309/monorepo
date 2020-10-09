import React from 'react';
import { toLowercase } from '@testa-lerna/lib2-utils';

interface NotificationProps {
  text: string;
}

const Notification: React.FC<NotificationProps> = ({ text }) => {
  return (
    <div>
      <h3>Notification tittle</h3>
      <p>{toLowercase(text)}</p>
    </div>
  );
};

export default Notification;

import React from 'react';

interface ProfileCardProps {
    title: string;
    avatarUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    title,
    avatarUrl,
}) => (
    <div className='flex flex-col items-center justify-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
        <img
            src={avatarUrl}
            style={{
                width: 96,
                height: 96,
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: 16,
                border: '3px solid #eee'
            }}
        />
        <h4 className='text-white'>{title}</h4>

    </div>
);

export default ProfileCard;
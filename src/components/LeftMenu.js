import React from 'react';
import { ActionMenu, Label } from '@primer/react';

const LeftMenu = () => {
  const [activeItem, setActiveItem] = React.useState('Home');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
      

      {/* Example of rendering items with Label */}
      {['Home', 'Shorts', 'Subscriptions', 'History', 'Watch Later', 'Liked videos', 'Explore', 'Trending', 'Shopping', 'Music', 'Films'].map((item) => (
        <Label
          key={item}
          sx={{
            fontSize: '18px',
            marginBottom: '8px',
            cursor: 'pointer',
            fontWeight: activeItem === item ? 'bold' : 'normal',
            backgroundColor: activeItem === item ? '#333' : 'transparent', // Dark background for active item
            color: activeItem === item ? 'white' : 'inherit', // White text for active item
            borderRadius: '4px', // Optional: Add border-radius for a rounded look
          }}
          onClick={() => handleItemClick(item)}
        >
          {item}
        </Label>
      ))}

      <ActionMenu
        label={<Label fontSize="18px" sx={{ marginBottom: '8px' }}>Subscriptions</Label>}
        icon="bell"
        sx={{
          backgroundColor: activeItem === 'Subscriptions' ? '#333' : 'transparent',
          color: activeItem === 'Subscriptions' ? 'white' : 'inherit',
          borderRadius: '4px',
        }}
        items={[
          {
            label: <Label fontSize="18px">A&B Car reviews</Label>,
          },
          {
            label: <Label fontSize="18px">+ Browse channels</Label>,
          },
        ]}
      />
    </div>
  );
};

export default LeftMenu;

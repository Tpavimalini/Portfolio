import React from 'react';

function Profile({ name, bio }) {
  return (
    <div style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}

export default Profile;
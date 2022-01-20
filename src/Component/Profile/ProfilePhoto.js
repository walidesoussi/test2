import React from 'react';

export const ProfilePhoto = () => {
  return <div>
      <img style={{
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            resizeMode: "cover",
            height: 500,
            width: 300,
          }}
           src='https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/67913943_10212471771024292_2227788287915851776_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=6nZHD8fJ7uMAX8gEDYJ&tn=3AlsOgLztv_aJ32P&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-_PODLfQ89BdB5OeJBD3O_BRp_p9bikuULACVVsVomVA&oe=620F5B99' alt="img" />
  </div>;
};

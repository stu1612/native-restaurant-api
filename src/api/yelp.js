// const passwords = [
//     { clientID: 'hKZAXrBwKWzEN4BNG_5pig' },
//     {
//         APIKey:
//             'wnMohCQeuGi5NG4URyT_T9JhJI80Wyysag_KtkTsZh7gCxBkfBiBeCW1OVdYi70ygSPA2m74jx933qiKoThU07sI-qrWmXsaMvaHXe7sf66TLHSPvBem0PBqr24qYHYx',
//     },
// ];

import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer wnMohCQeuGi5NG4URyT_T9JhJI80Wyysag_KtkTsZh7gCxBkfBiBeCW1OVdYi70ygSPA2m74jx933qiKoThU07sI-qrWmXsaMvaHXe7sf66TLHSPvBem0PBqr24qYHYx',
    },
});

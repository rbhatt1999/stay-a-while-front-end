import { rest } from 'msw';

const handlers = [
  rest.get('http://127.0.0.1:3000/home_stays', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({
      data: {
        home_stays: [
          {
            id: 1,
            name: 'Cottage by Maxwell',
            location: 'Sao Paulo, Brazil',
            description: 'A house, built of a wooden base, brick, and glass is surrounded by a green field of 5000 m2 where, over the last 20 years,  it has being planted various species of fruit trees and ornamental plants.',
            no_of_rooms: 3,
            rating: 3,
            price: 150,
            user_id: 1,
            created_at: '2023-05-06T17:11:22.046Z',
            updated_at: '2023-05-06T17:11:22.046Z',
            images: [
              {
                id: 1,
                url: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600',
                home_stay_id: 1,
                created_at: '2023-05-06T17:11:22.073Z',
                updated_at: '2023-05-06T17:11:22.073Z',
              },
              {
                id: 2,
                url: 'https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=600',
                home_stay_id: 1,
                created_at: '2023-05-06T17:11:22.089Z',
                updated_at: '2023-05-06T17:11:22.089Z',
              },
              {
                id: 3,
                url: 'https://images.pexels.com/photos/2179214/pexels-photo-2179214.jpeg?auto=compress&cs=tinysrgb&w=600',
                home_stay_id: 1,
                created_at: '2023-05-06T17:11:22.092Z',
                updated_at: '2023-05-06T17:11:22.092Z',
              },
              {
                id: 4,
                url: 'https://images.pexels.com/photos/2346091/pexels-photo-2346091.jpeg?auto=compress&cs=tinysrgb&w=600',
                home_stay_id: 1,
                created_at: '2023-05-06T17:11:22.097Z',
                updated_at: '2023-05-06T17:11:22.097Z',
              },
              {
                id: 5,
                url: 'https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg?auto=compress&cs=tinysrgb&w=600',
                home_stay_id: 1,
                created_at: '2023-05-06T17:11:22.102Z',
                updated_at: '2023-05-06T17:11:22.102Z',
              },
            ],
          },
        ],
      },
    }),
  )),
];
export default handlers;

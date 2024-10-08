import React from 'react';

// import FeatherIcon from 'feather-icons-react';

// import { TSocial } from '../types/TSocial';

// interface OnlyProps {
//   name: string;
//   user: string;
//   avatar: string;
//   about: string;
//   info: string[];
//   social: TSocial[] | null;
// }

const Only = ({
  name,
  user,
  avatar,
  about,
  info,
  social,
}) => {
  const infos = info && info[0] && info[0].split(' ');
  return (
    <a
      className="lp adb shadow-xl rounded-3xl p-4"
      href={`/users/${user}/`}
    >
      <img src={avatar} alt={user} />
      <div className="relative w-full p-6 -mt-8 bg-white rounded-3xl">
        <p>{user}</p>
        <h5 className="text-xl font-bold text-gray-900">{name}</h5>
        <p className="hidden mt-2 text-gray-500 sm:block">{about}</p>
        {social && social.length > 0 && (
          <ul>
            {social.map((s) => (
              <li key={JSON.stringify(s)}>
                <a href={s.href}>{s.href}</a>
              </li>
            ))}
          </ul>
        )}
        <dl className="items-center mt-6 sm:flex">
          <div className="flex items-center">
            <span className="flex-shrink-0 p-1 text-white bg-pink-600 rounded-full">
              <span className="w-5 h-5">
                "heart"
                {//<FeatherIcon icon="heart" />
                }
              </span>
            </span>

            <span className="flex ml-3 text-sm font-medium text-gray-600 space-x-1 space-x-reverse">
              <dt>Likes</dt>
              <dd className="order-first">{infos && infos[1]}</dd>
            </span>
          </div>

          <div className="flex items-center mt-3 sm:ml-6 sm:mt-0">
            <span className="flex-shrink-0 p-1 text-white bg-pink-600 rounded-full">
              <span className="w-5 h-5">
                "share"
                {//<FeatherIcon icon="share-2" />
                }
              </span>
            </span>

            <span className="flex ml-3 text-sm font-medium text-gray-600 space-x-1 space-x-reverse">
              <dt>Shares</dt>
              <dd className="order-first">{infos && infos[3]}</dd>
            </span>
          </div>
          <div className="flex items-center mt-3 sm:ml-6 sm:mt-0">
            <span className="flex-shrink-0 p-1 text-white bg-pink-600 rounded-full">
              <span className="w-5 h-5">
                "dollar"
                {
                    // <FeatherIcon icon="dollar-sign" />
                }
              </span>
            </span>

            <span className="flex ml-3 text-sm font-medium text-gray-600 space-x-1 space-x-reverse">
              <dt>Tips</dt>
              <dd className="order-first">{infos && infos[7]}</dd>
            </span>
          </div>
        </dl>
      </div>
    </a>
  );
};

export default Only;